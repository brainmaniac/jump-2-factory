// The base for this extension comes from the code of
// sportos GoToSpec extension https://github.com/sporto/rails-go-to-spec-vscode
// I have left a lot of his code as comments as it is good to have if someone wants to
// build the feature 'create-file-if-it-does-not-exist'
// - Brainmaniac

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as resolver from './resolver';
import * as fs from 'fs';
// import * as path from 'path';
// import * as mkdirp from 'mkdirp';

function openFile(fileName: string) {
	vscode.workspace
		.openTextDocument(fileName)
		.then(vscode.window.showTextDocument);
}

// function prompt(fileName, cb) {
// 	let options = {
// 		placeHolder: `Create ${fileName}?`
// 	}
// 	vscode.window.showQuickPick(["Yes", "No"], options)
// 			.then(function(answer) {
// 				if (answer === "Yes") {
// 					cb();
// 				}
// 			});
// }

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('jump-2-factory.jump-2-factory', () => {
	// The code you place here will be executed every time your command is executed

	// Display a message box to the user
	var editor = vscode.window.activeTextEditor;
	if (!editor) {
		return; // No open text editor
	}

	let document = editor.document;
	let fileName: string = document.fileName;
	let related: string = resolver.getRelated(fileName);
	// let relative: string = vscode.workspace.asRelativePath(related);
	let fileExists: boolean = fs.existsSync(related);
	// let dirname: string = path.dirname(related);

	console.log('fileExists', fileExists);

	if (fileExists) {
		openFile(related);
	} else {
		vscode.window.showInformationMessage("Could not find a corresponding file!")
	// 	prompt(relative, function() {
	// 		mkdirp.sync(dirname);
	// 		fs.closeSync(fs.openSync(related, 'w'));
	// 		openFile(related);
	// 	});
	}


	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}