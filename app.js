// liaison d'une variable à mon fichier .json
let data = "cities.json"
// liaison d'une variable à un tableau vide
let table = []
// liaison d'une variable à mon select dans l'HTML
let select = document.querySelector("#countries")
let citiesTable = []

// utilisation de la méthode fetch pour récupérer le fichier .json
fetch(data)
    .then((response) => response.json())
    .then((data) => {
        // dans data, pour chaques city
        data.forEach(city => {
            // si mon tableau(table) n'inclut(includes) pas(== false) le city.countrycode.name
            if (table.includes(city.countrycode.name) == false) {
                // alors l'ajoute(push) au tableau
                table.push(city.countrycode.name)
            }
        });
        // tri du tableau par ordre alphabétique
        table.sort()

        table.forEach(country => {
            // j'ajoute au select dans l'HTML
            select.innerHTML += "<option>" + country + "<option/>"
        });

        select.addEventListener('change', event => {
            let citiesList = document.querySelector("#cities")
            citiesList.innerHTML = ""
            data.forEach(city => {
                if (city.countrycode.name == select.value) {
                    citiesTable.push(city.name)
                }
            });
            citiesTable.sort()
            citiesTable.forEach(city => {
                citiesList.innerHTML += "<p>" + city + "</p>"
            });
        })
    })








// let data = ("cities.json")

// fetch(data)
//     // On obtient une réponse que l'on convertit au format .json 
//     .then((response) =>
//         response.json()
//             // La méthode then() renvoie un objet Promise
//             .then((data) => {

//                 let table = [];
//                 // Ce foreach sert à créer un nouveau tableau avec les pays sans doublon
//                 data.forEach(ville => {
//                     // Si le tableau n'inclue pas("== false") déjà le pays
//                     if (table.includes(ville.countrycode.name) == false) {
//                         // alors ajouter le pays au tableau
//                         table.push(ville.countrycode.name);
//                     }
//                 });

//                 // Le .sort sert à trier le tableau des pays par ordre alphabétique
//                 table.sort();
//                 let select = document.querySelector("#pays");

//                 // Ce foreach reprend le tablau des pays triés par ordre alphabétique et créer les options du select
//                 table.forEach(country => {
//                     // Avec le innerHTML j'inclue une option dans le select qui se répètera grâce au foreach
//                     select.innerHTML += '<option>' + country + '</option>';
//                 });


//                 select.addEventListener('change', event => {
//                     let tableVille = [];
//                     let listeVille = document.querySelector(".ville")
//                     listeVille.innerHTML = "";
//                     data.forEach(ville => {

//                         if (ville.countrycode.name == select.value) {
//                             tableVille.push(ville.name);
//                         }
//                     });
//                     tableVille.sort();

//                     tableVille.forEach(ville => {

//                         listeVille.innerHTML += '<p>' + ville + '</p>'
//                     }
//                     )
//                 })
//             })
//     )