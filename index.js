const testo = document.getElementById("poesia");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let baciate = document.getElementById("baciate");
let alternate = document.getElementById("alternate");
let incrociate = document.getElementById("incrociate");


let RiBa = 0; //rime baciate
let RiAl = 0; //rime alternate
let RiIn = 0; //rime incrociate


reset.addEventListener("click", (e) => {

    testo.value = "";

});


submit.addEventListener("click", (e) => {

    RiBa = 0; 
    RiAl = 0; 
    RiIn = 0; 

    trovarime(testo.value);
    
    // aggiorna i valori della tabella
    baciate.innerText = RiBa;
    alternate.innerText = RiAl;
    incrociate.innerText = RiIn;

});


const trovarime = (text) => {

    // divide il testo in un array di stringhe 
    const versi = text.split("\n");

    // crea un array formato dalle finali dei versi
    let finali = [];
    versi.forEach(element => {
        if(element !== "") 
            finali.push(getFinale(element));
    });

    // conta quante e quali rime ci sono (relative ad ogni verso)
    for(let i = 0; i<finali.length;i++){
        if(finali[i] === finali[i+1]) RiBa++;
        if(finali[i] === finali[i+2] && finali[i+2]) RiAl++;
        if(finali[i] === finali[i+3] && finali[i+1] === finali[i+2] && finali[i+1]) RiIn++;
    }
}


const getFinale = (str) => {
    
    // estrapola le ultime 3 lettere di ogni verso
    let end = str.split(" ")[-1] || str;
    
    const regex = /[”!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    end = end.replace(regex, '');
    console.log(end);
    return end.slice(-3);


}