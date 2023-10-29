// Get the dropdown element
var dropdown = document.getElementById("myDropdown");

// Add an event listener to listen for changes
dropdown.addEventListener("change", function() {
    var selectedOption = dropdown.value;
    // Do something with the selected option
    console.log("Selected option: " + selectedOption);
});