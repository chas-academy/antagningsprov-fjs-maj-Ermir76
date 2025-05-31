

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const people = [
        { name: "Athena", age: 5 },
        { name: "Joy", age: 4 },
        { name: "Keira", age: 19 },
        { name: "Nikol", age: 18 },
        { name: "Ermir", age: 48 }
    ];

// skapa en fuktion som tar in en array som argument
 function printOver30(array) {
    
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
        for (let i = 0; i < array.length; i++) {
            if (array[i].age > 30) {
                console.log(array[i].name);
            }
        }
    }

// anropa funktionen och skicka med arrayen som argument
 printOver30(people);
}

uppg8();

module.exports = { uppg8 };