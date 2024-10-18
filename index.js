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

var gomb = document.getElementById('gomb')
var answers = document.getElementById('jatekmezo')

gomb.addEventListener('click', function kviz(){
    gomb.remove();
    let szam = 1;
    let random =Math.floor(Math.random() * kerdesek.length)
    let kerdes = document.createElement('span');
    answers.appendChild(kerdes)
    kerdes.innerText = szam + ". kérdés: " + kerdesek[random].kerdes
    kerdesek[random].valasz.forEach(function (elem){
        var valaszok = document.createElement('button');
        valaszok.innerText = elem.text;
        answers.appendChild(valaszok);
        valaszok.addEventListener("click", function(){
            if (elem.correct == true){
                valaszok.style.backgroundColor = "green"
                answers.style.backgroundColor = "white"
                let kovetkezo = document.createElement("button")
                kovetkezo.innerText = "Következő kérdés"
                answers.appendChild(kovetkezo);
                szam++;
                kovetkezo.addEventListener('click', function(){
                    answers.innerHTML = ""
                    kviz()
                })
            }
            else{
                answers.style.backgroundColor = "red"
            }
        });
        
    });
});
gomb.removeAttribute("onclick")