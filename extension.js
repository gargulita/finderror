const vscode = require("vscode");
const openBrowser = require ("open-web-browser");

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "finderror.helloWorld",
    function () {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}
		let selection = editor.selection;
		let text = editor.document.getText(selection);
		const uri = "https://stackoverflow.com/search?q=" + text;
		const encoded = encodeURI(uri);
		openBrowser(encoded);
	}
  );
  context.subscriptions.push(disposable);
}

function deactivate(){}

module.exports = {
	activate,
	deactivate,
};