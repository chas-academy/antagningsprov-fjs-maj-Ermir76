

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    function sort(numbers){
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    for (let i = 0; i < numbers.length; i++) {
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
   if (numbers[i] % 2 === 0) {
                console.log(numbers[i], " jämt");
            } else {
                console.log(numbers[i], " udda");
            }
        }
    }
    // anropa funktionen och skicka med en array som argument
 sort([13, 22, 38, 31, 15, 26, 45, 81, 34, 52, 64, 91]);
  
}
uppg9();

module.exports = { uppg9 };