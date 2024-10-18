const kerdesek = [
    {
        kerdes: 'Mi Magyarország fővárosa?',
        valasz: [
            { text: 'Budapest', correct: true },
            { text: 'Pécs', correct: false },
            { text: 'Debrecen', correct: false },
            { text: 'Szeged', correct: false }
        ]
    },
    {
        kerdes: 'Mi a legnagyobb bolygó a Naprendszerben?',
        valasz: [
            { text: 'Föld', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Vénusz', correct: false }
        ]
    },
    {
        kerdes: 'Ki festette a Mona Lisát?',
        valasz: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Michelangelo', correct: false },
            { text: 'Pablo Picasso', correct: false }
        ]
    }
];
var lista = []
var gomb = document.getElementById('gomb')
var answers = document.getElementById('jatekmezo')
var helyes = 0;
var helytelen = 0;
gomb.addEventListener('click', function kviz(){
    gomb.remove();
    console.log(lista)
    let random;
    do {
        random = Math.floor(Math.random() * kerdesek.length);
    } 
    while (lista.includes(random) && lista.length < kerdesek.length); 
    let kerdes = document.createElement('span');
    answers.appendChild(kerdes)
    kerdes.innerText = "kérdés: " + kerdesek[random].kerdes
    kerdesek[random].valasz.forEach(function (elem){
        var valaszok = document.createElement('button');
        valaszok.innerText = elem.text;
        answers.appendChild(valaszok);
        valaszok.addEventListener("click", function (){
            if (helyes + helytelen != 3){
            if (elem.correct == true){
                valaszok.style.backgroundColor = "green"
                answers.style.backgroundColor = "white"
                let kovetkezo = document.createElement("button")
                kovetkezo.innerText = "Következő kérdés"
                answers.appendChild(kovetkezo);
                helyes ++;
                lista.push(random)
                document.getElementById('helyes').innerText = "helyes válaszaid: "+helyes 
                kovetkezo.addEventListener('click', function(){
                    answers.style.backgroundColor= "white";
                    answers.innerHTML = ""
                    kviz()   
                })
            }
            else{
                answers.style.backgroundColor = "red"
                let kovetkezo = document.createElement("button")
                kovetkezo.innerText = "Következő kérdés"
                answers.appendChild(kovetkezo);
                helytelen ++;
                document.getElementById('helytelen').innerText = "helytelen válaszaid: "+helytelen
                kovetkezo.addEventListener('click', function(){
                    
                    answers.style.backgroundColor= "white";
                        answers.innerHTML = ""
                        kviz()
                        

                    
                })
            }
        }
        else{
            answers.innerHTML = "Vége"
        }
        });
    
    });

});
gomb.removeAttribute("onclick")