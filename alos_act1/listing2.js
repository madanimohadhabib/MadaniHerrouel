var unirest = require('unirest')



var req = unirest('GET', 'http://localhost:3000/individuals').headers({
    "cache-control": "no-cache"/*La réponse de la question 3 : Le fait de spécifier no-cache ou max-age=0 indique que les clients peuvent mettre une ressource en cache et doivent la revalider à chaque fois avant de l'utiliser.Cela signifie que la requête HTTP se produit à chaque fois, mais qu'elle peut sauter le téléchargement du corps HTTP si le contenu est valide */
}).then((res) => {
    if (res.error) throw new Error(res.error)

    console.log("the first 10 recordings")
    for (var i = 0;i<10;i++){

        console.log(res.body[i])
        }

        console.log("names start with the letter M:\n")
        function FirstLetter() {
            for (var i=0 ;i<100 ;i++){
                    if (res.body[i]['name'].charAt(0) === "M")
                            console.log(res.body[i])
            }
        }
        FirstLetter();

})
