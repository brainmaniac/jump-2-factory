# Jump 2 Factory Extension for VSCODE

This extension makes it possible to jump between a model and it's factory. This can now be done with a single command (DEFAUL Mac: shift+cmd+a - Win: shift+ctrl+a)

## Credits
The base for this extension comes from the code of
**sportos** GoToSpec extension https://github.com/sporto/rails-go-to-spec-vscode
I have left a lot of his code as comments as it is good to have if someone wants to
build the feature 'create-file-if-it-does-not-exist'

-Brainmaniac

## Keybindings
These are the default keybindings:
```
  "keybindings": [
			{
        "command": "jump-2-factory.jump-2-factory",
        "key": "ctrl+shift+a",
        "mac": "cmd+shift+a",
        "when": "editorTextFocus"
      }
		]
```

## Further development
I wont most likely do anything more with this and the only feature I could think of missing would be to offer to make the Factory-file if it does not exist.. And also testing 😇

**Enjoy!**
