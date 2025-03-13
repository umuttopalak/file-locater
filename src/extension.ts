import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

/**
 * File Locater extension for Visual Studio Code
 * This extension helps locate files in the Explorer view, similar to PyCharm's file locator.
 */
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "file-locater" is now active!');

	/**
	 * Tries to reveal a file in the Explorer view
	 */
	const revealFileInExplorer = async (fileUri: vscode.Uri): Promise<boolean> => {
		try {
			// First attempt: standard reveal
			await vscode.commands.executeCommand('revealInExplorer', fileUri);
			return true;
		} catch (error: any) {
			// If first attempt fails, try the alternative method
			try {
				console.log(`Standard reveal failed, trying alternative method`);
				await vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer');
				return true;
			} catch (altError: any) {
				console.error(`All reveal methods failed: ${altError.message}`);
				return false;
			}
		}
	};

	/**
	 * Hello World command - simple test command
	 */
	const helloWorldCommand = vscode.commands.registerCommand('file-locater.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from File Locater!');
	});

	/**
	 * Main locate file command - locates the current file in Explorer or prompts to select one
	 */
	const locateFileCommand = vscode.commands.registerCommand('file-locater.locateFile', async () => {
		try {
			const activeEditor = vscode.window.activeTextEditor;
			
			if (activeEditor) {
				// If we have an active editor, locate that file
				const fileUri = activeEditor.document.uri;
				const filePath = fileUri.fsPath;
				const fileName = path.basename(filePath);
				
				// Check if the file is in the current workspace
				const workspaceFolders = vscode.workspace.workspaceFolders;
				let inWorkspace = false;
				
				if (workspaceFolders) {
					for (const folder of workspaceFolders) {
						if (filePath.startsWith(folder.uri.fsPath)) {
							inWorkspace = true;
							break;
						}
					}
				}
				
				if (inWorkspace) {
					// File is in workspace, try to reveal it
					await revealFileInExplorer(fileUri);
				} else {
					// Try anyway, but warn that it might not work well
					const success = await revealFileInExplorer(fileUri);
					if (!success) {
						vscode.window.showWarningMessage(
							`File '${fileName}' is not in the current workspace. Cannot locate in Explorer.`
						);
					}
				}
			} else {
				// No active editor, allow user to select a file
				const workspaceFolders = vscode.workspace.workspaceFolders;
				
				if (!workspaceFolders) {
					vscode.window.showErrorMessage('No workspace folders are open. Please open a folder first.');
					return;
				}
				
				// Set up file picker dialog
				const options: vscode.OpenDialogOptions = {
					canSelectFiles: true,
					canSelectFolders: false,
					canSelectMany: false,
					openLabel: "Select File",
					defaultUri: workspaceFolders[0].uri
				};
				
				// Show file picker
				const fileUri = await vscode.window.showOpenDialog(options);
				
				if (fileUri && fileUri[0]) {
					const selectedPath = fileUri[0].fsPath;
					const fileName = path.basename(selectedPath);
					
					// Make sure the file exists
					if (fs.existsSync(selectedPath)) {
						try {
							// Try to open the file in editor
							const document = await vscode.workspace.openTextDocument(fileUri[0]);
							await vscode.window.showTextDocument(document);
							
							// Then reveal in explorer
							await revealFileInExplorer(fileUri[0]);
						} catch (error: any) {
							console.error('Error opening or revealing file:', error);
							vscode.window.showErrorMessage(`Failed to open or locate '${fileName}': ${error.message}`);
						}
					} else {
						vscode.window.showErrorMessage(`File '${fileName}' does not exist.`);
					}
				}
			}
		} catch (error: any) {
			console.error('Error in locate file command:', error);
			vscode.window.showErrorMessage(`File location failed: ${error.message}`);
		}
	});

	// Register commands with extension context
	context.subscriptions.push(helloWorldCommand, locateFileCommand);
}

/**
 * This method is called when the extension is deactivated
 */
export function deactivate() {
	// Clean up resources if needed
}
