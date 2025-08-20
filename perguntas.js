criaCartao(
    'Gaara',
    'Qual papel de Gaara na vila?',
    'Kazekage.'
)
criaCartao(
    'Gaara',
    'Qual papel de Gaara na quarta guerra ninja?',
    'Comandante da Quarta Divisão das Forças Aliadas Shinobi,liderando batalhas e protegendo seus companheiros.'
)
criaCartao(
    'Gaara',
    'Qual a fraqueza de Gaara?',
    'Gaara consome muito chakra,e sua areia pode se tornar pesada e difícil de controlar em contato com óleo.'
)
criaCartao(
     'Gaara'
     'Qual o significado do ideograma na testa de Gaara?'
     'O ideograma significa amor'
)
criaCartao(
     'Gaara'
     'Quem são os irmãos de Gaara?'
     'Os irmãos de Gaara são Temari e Kankuro'
)
criaCartao(
     'Gaara'
     'Em qual episódio ocorre a amorte de gaara após a extração de shukaku?'
     'A morte de Gaara, após a extração do Shukaku, ocorre no episódio 17 de Naruto Shippuden'
)
cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
        </div>
        </div>
`