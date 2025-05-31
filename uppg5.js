
function uppg5(num1, num2) {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"
if (num1 > num2) {
        console.log("Det första talet är större än det andra");
    } else {
        console.log("Det andra talet är större än det första");
    }
}

// Exempel på anrop:
uppg5(4, 5);  
uppg5(8, 7)

module.exports = { uppg5 };