let ism = prompt("Ismingizni kiriting");
let harif = prompt("Bironta harif kiriting");
let ornida = ism.indexOf(harif); 

if (ornida < 0) {
    alert( ism + " ismining ichida " +  harif + " mavjud emas!");
} else {
    alert( ism + " ismining ichida " +  harif + " mavjud!");
}