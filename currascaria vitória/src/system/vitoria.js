function tagFormat(tag, content, klass = "", id = "") {

    return `
    
        <${tag} class="${klass}" id="${id}">
            <label>${content}</label>
        </${tag}>

    `

}

class Vitoria {

    constructor() {

        this.outputs = {

            "price": "preço",
            "varieties": "variedades",
            "time": "horário de funcionamento"

        }

        this.divKlasses = [

            "question",
            "response"

        ]

    }

    sendMensage(mensage) {

        let input, output

        input = tagFormat(
            "div",
            tagFormat("p", mensage, "normal-text"),
            "vitoria-question"
        )

        if (mensage in this.outputs) {

            output = tagFormat(
                "div",
                tagFormat("p", this.outputs[mensage], "normal-text"),
                "vitoria-response"
            )

        }

        return {

            "in": input,
            "out": output

        }

    }

}

const vitoria = (new Vitoria())

var questionButtons = [

    "price",
    "time",
    "varieties"

]

var translations = {

    "price": "preço",
    "time": "horário",
    "varieties": "variedades"

}

function mensage(mensage) {

    divs = vitoria.sendMensage(mensage)

    function divIn() {
        
        if (divs["in"] in translations) {

            divs["in"] = translations[divs["in"]]

        }

        return divs["in"]

    }

    document.getElementById("mensages").innerHTML += `
    
        ${divIn()}
        ${divs["out"]}
    
    `

}

var question

for (question of questionButtons) {

    let button = document.getElementById(`question-${question}`)

    button.addEventListener("click", () => { mensage(question) })

}