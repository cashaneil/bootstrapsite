//global variables
//inputs
var value1 = document.getElementById("Select");
var value2 = document.getElementById("textbox1");
var value3 = document.getElementById("textbox2");

var totalP = 0;
var vat = 0;
var totalPVat = 0;

function ValidateAndCalculate() {
    if (value1.value == "Selection" || value2.value == "" || value3.value == "") {
        alert("Please check your inputs and try again.");
    }

    else {
        if (value1.value == "NVIDIA GeForce RTX 3080 10 GB Founders Edition Video Card") {
            totalP = 600 * parseInt(value2.value);
            vat = (parseInt(value3.value) / 100) * totalP;
            totalPVat = totalP + vat;
            alert("Total price after VAT: " + totalPVat);
        }

        else if (value1.value == "Asus TUF Gaming VG27VQ 27.0 inch 165 Hz Monitor") {
            totalP = 310 * parseInt(value2.value);
            vat = (parseInt(value3.value) / 100) * totalP;
            totalPVat = totalP + vat;
            alert("Total price after VAT: " + totalPVat);
        }

        else if (value1.value == "NZXT H510 Elite ATX Mid Tower Case") {
            totalP = 120 * parseInt(value2.value);
            vat = (parseInt(value3.value) / 100) * totalP;
            totalPVat = totalP + vat;
            alert("Total price after VAT: " + totalPVat);
        }

        else if (value1.value == "MSI X570 WIFI ATX AM4 Motherboard") {
            totalP = 130 * parseInt(value2.value);
            vat = (parseInt(value3.value) / 100) * totalP;
            totalPVat = totalP + vat;
            alert("Total price after VAT: " + totalPVat);
        }

        else if (value1.value == "SteelSeries ARCTIS 5 (2019 Edition) 7.1 Channel Headset") {
            totalP = 150 * parseInt(value2.value);
            vat = (parseInt(value3.value) / 100) * totalP;
            totalPVat = totalP + vat;
            alert("Total price after VAT: " + totalPVat);
        }

        else if (value1.value == "SteelSeries Rival 3 Wired Optical Mouse") {
            totalP = 60 * parseInt(value2.value);
            vat = (parseInt(value3.value) / 100) * totalP;
            totalPVat = totalP + vat;
            alert("Total price after VAT: " + totalPVat);
        }
    }
}