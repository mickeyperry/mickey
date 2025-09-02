var comp = app.project.activeItem; // get the active comp
if (comp && comp instanceof CompItem && comp.selectedLayers.length > 0) { // check if the active item is a comp and a layer is selected
    var selectedLayer = comp.selectedLayers[0]; // get the first selected layer
    if (selectedLayer.source instanceof CompItem) { // check if the layer is a precomp
        var currentName = selectedLayer.source.name; // get the current name of the precomp
        var newName = prompt("Please enter the new name for the precomp", currentName); // display prompt with the current name as the default
        if (newName !== null && newName !== "") { // if the user provided a new name
            app.beginUndoGroup("Rename Precomp"); // start undo group
            selectedLayer.source.name = newName; // change the precomp name
            app.endUndoGroup(); // end undo group
        }
    } else {
        alert("The selected layer is not a precomp.");
    }
} else {
    alert("Please select a precomp layer in the active composition.");
}
