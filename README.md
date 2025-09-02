# RenamePrecomp

Quick After Effects script to rename precomps when the timeline isn't focused and the Enter hotkey won't work.

## The Problem

You've selected a precomp layer in the timeline, but:
- **Timeline panel isn't focused** (you're in Project panel, Effects panel, etc.)
- **Enter hotkey doesn't work** for renaming
- **Right-click menu feels slow** for quick renaming tasks
- **Don't want to hunt** for the precomp in the Project panel

## What it does

**RenamePrecomp** lets you instantly rename the selected precomp layer from anywhere:

1. **Detects selected precomp** layer in active composition
2. **Shows rename dialog** with current name pre-filled
3. **Updates the precomp source** (not just the layer name)
4. **Works regardless** of panel focus

Perfect for quick precomp organization without switching panels or losing your workflow focus.

## Installation

1. Copy `RenamePrecomp.jsx` to your After Effects Scripts folder:
   ```
   Windows: C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\
   macOS: /Applications/Adobe After Effects [version]/Scripts/
   ```

2. Restart After Effects

## Usage

1. **Select a precomp layer** in the Timeline
2. Run **File → Scripts → RenamePrecomp.jsx**
3. **Edit the name** in the dialog (current name is pre-filled)
4. **Press OK** or hit Enter
5. **Done!** Precomp is renamed everywhere

## Features

- **Panel-agnostic** - works regardless of which panel has focus
- **Pre-filled dialog** - shows current name, just edit what you need
- **Source renaming** - updates the actual precomp, not just the layer reference
- **Undo support** - single undo reverts the rename
- **Smart validation** - only works on actual precomp layers

## Use Cases

- **Quick organization** - rename precomps without panel switching
- **Focus workflow** - stay in Effects/Project panel while renaming timeline layers
- **Batch renaming** - faster than right-click menus
- **Keyboard shortcuts** - assign to hotkey for instant renaming

## Error Handling

- **"Please select a precomp layer"** - No layer selected or comp not active
- **"The selected layer is not a precomp"** - Selected layer is footage/solid/etc.
- **Empty name validation** - Prevents accidental blank names

## Tips

- **Multiple selection**: Script uses first selected precomp if multiple layers selected
- **Hotkey assignment**: Assign to keyboard shortcut for instant access
- **Workflow integration**: Great for staying focused in other panels
- **Project organization**: Renamed precomps update everywhere they're used

## Requirements

- Adobe After Effects (any version with scripting support)
- Active composition with selected precomp layer

## License

MIT
