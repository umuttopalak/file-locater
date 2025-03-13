# File Locater

File Locater is a Visual Studio Code extension that allows you to quickly locate the currently open or selected file in the VSCode Explorer view, similar to the "Show in Explorer" feature in PyCharm.

## Features

- **Locate Open File**: Quickly find and highlight the currently open file in VSCode Explorer.
- **Select & Locate**: Allows you to select a file and open it in Explorer if no file is open.
- **Explorer Button**: A button in the Explorer header for quick file location.
- **Editor Button**: Quickly locate the active file with a button in the editor header.
- **Context Menu**: Right-click on files to locate them.

## Usage

- **Command Palette**: Open with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) and select "Locate File".
- **Explorer Button**: Use the "Locate File" button in the Explorer view.
- **Editor Button**: Click the "Locate File" button in the editor tab.
- **Context Menu**: Right-click and select "Locate File".

## Requirements

- Visual Studio Code 1.98.0 or newer

## Installation

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "File Locater"
4. Click "Install"

## Extension Settings

Currently, there are no customizable settings for this extension.

## Troubleshooting

- Ensure the file is within an open workspace.
- Make sure you have the latest version of the extension.

## Release Notes

### 0.0.1
- Initial release with basic file locating functionality.

## Developer Notes

This extension is developed using the VS Code API with TypeScript.

---

## Developer Information

### Developing the Project

1. Install dependencies with `npm install`
2. Compile the code with `npm run compile`
3. Run the extension in debug mode with `F5`

### Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---
