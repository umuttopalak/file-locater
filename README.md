# File Locater

File Locater is a Visual Studio Code extension that allows you to quickly locate the currently open or selected file in the VSCode Explorer view, similar to the "Show in Explorer" feature in PyCharm.

## Features

- **Locate Open File**: Quickly find and highlight the currently open file in VSCode Explorer.
- **Select & Locate**: Allows you to select a file and open it in Explorer if no file is open.
- **Explorer Button**: A button in the Explorer header for quick file location.
- **Editor Button**: Quickly locate the active file with a button in the editor header.

## Usage

- **Command Palette**: Open with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) and select "Locate File".
- **Explorer Button**: Use the "Locate File" button in the Explorer view.
- **Editor Button**: Click the "Locate File" button in the editor tab.

## Screenshots

*[Consider adding screenshots or GIFs here showing the extension in action, especially:]*
- *The Explorer button*
- *The Editor button*
- *The file being highlighted in Explorer*

## Requirements

- Visual Studio Code 1.74.0 or newer

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

### 0.0.3 - 2025-03-14

#### Added
- **New Feature**: Added the ability to locate files directly from the command palette.
- **UI Enhancement**: Improved the design of the Explorer and Editor buttons for better user experience.
- **Performance Improvement**: Optimized the file locating algorithm for faster results.

#### Fixed
- **Bug Fix**: Resolved an issue where the extension would not activate in certain workspace configurations.
- **UI Bug**: Fixed a display issue with the context menu in dark mode.

#### Changed
- **Dependency Update**: Updated dependencies to the latest versions for improved security and performance.
- **Minimum VSCode Version**: Updated the minimum required VSCode version to ensure compatibility.

### 0.0.1 - 2025-03-13

- Initial release with basic file locating functionality.
- Explorer button for quick access.
- Editor button for active file location.

## License

This extension is licensed under the [MIT License](LICENSE).

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

**Enjoy using File Locater!**
