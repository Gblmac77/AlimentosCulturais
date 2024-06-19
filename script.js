[12:50, 19/06/2024] Leandro: <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>alimentos culturais</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="caixa-principal">
        <h1>alimento culturais</h1> 
        <div class="caixa-pergunta"></div>
        <div class="caixa-alternativa"></div>  
        <div class="caixa-resultado">
        <p class="texto-resultado"></p>
     </div>
 </div>
 <script src="script.js"></script>
</body>
</html>
[12:51, 19/06/2024] Leandro: index htaml
[12:51, 19/06/2024] Leandro: const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    "Pergunta 1",
    "Pergunta 2"
];
const perguntas = [
    enunciado: "Pergunta 1",
    alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]

    "Pergunta 2"
];
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
    "Pergunta 2"
]; 
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];