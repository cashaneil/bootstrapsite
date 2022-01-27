//global variables
var value1 = document.getElementById("textbox1");
var value2 = document.getElementById("textbox2");
var value3 = document.getElementById("textbox3");
var value4 = document.getElementById("comment");

function validateForm() {
    if (value1.value == "" || value2.value == "" || value3.value == "" || value4.value == "") {
        alert("Note: ALL inputs are mandatory, please amend your entries and try again.");
        return false;
    }

    else {
        value1.value = "";
        value2.value = "";
        value3.value = "";
        value4.value = "";
        return true;
    }
}