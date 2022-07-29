// liaison d'une variable à mon fichier .json
let data = "cities.json"
// liaison d'une variable à un tableau vide
let table = []
// liaison d'une variable à mon select dans l'HTML
let select = document.querySelector("#countries")

let citiesList = document.querySelector("#cities")

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
            // j'ajoute une option au select dans l'HTML grâce au innerHTML
            select.innerHTML += "<option>" + country + "</option>"
        });

        // le "addEventListener" est lié au select, il fonctionne toujours avec "change"
        select.addEventListener('change', event => {
            let citiesTable = []
            // je vide le tableau
            citiesList.innerHTML = ""
            data.forEach(city => {
                // le ".value" récupère la valeur du select et non le select en lui-même
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