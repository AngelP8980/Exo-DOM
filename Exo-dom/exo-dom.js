//------------------Exo 1 du fihier exo_DOM.odt

const tbody = document.querySelector('tbody');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', generator)

function generator() {

    for (let i = 1; i <= input.value; i++) {
        let pairImpair = "";
        if(i % 2 == 0) {
            pairImpair = "Pair"
            bg = "bg-success" // balise bootstrap
        } else {
            pairImpair = "Impair"
            bg = "bg-warning" // balise bootstrap  avec en tr class="${bg}"

        }
        tbody.innerHTML += `
            <tr class="${pairImpair}"> 
                <th scope="row">${i}</th>
                <td>${pairImpair}</td>
            </tr>
        `
    }
    input.value = ""

}

// !!! voir pour annuler l'effet d'ajout de ligne repartant de 1 si reclic sur Envoyer avec une nouvelle valeur !!!


// exemple de syntaxe : 
/*let nom = 'Katy'
let age = 25
console.log(`Bonjour ${nom},
    tu as ${age} ans
    `)
*/
