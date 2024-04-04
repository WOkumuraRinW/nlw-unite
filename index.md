fronteditor.dev/nlw-unite

# HTML

Significa : *Hypertext, markup, language (linguagem de marcação de hipertexto)*

*Hypertext*


*markup*
- Tag
- Atributos, propriedades e aspectos

*language*



# Tag : h1
 
 <h1>
  Texto, título.
</h1>

# Tag 2 : a  (hipertexto, hiperlink)

<a href="https//google.com">Te manda pro google (colocar nome do site aqui)</a>

# Tag 3 : Table, Thead, Tr, Th, Tbody, etc. JS
- Table : tabela
- Thead : cabeça da tabela, Cabeçalho
- Tittle : título do nome do projeto
- Tr : linha, coluna
- Th : nome ou o assunto
- Tbody : corpo da tabela 
- Td : informações que quero ver visíveis
- Strong : negrito, cor forte
- Br : break, quebra de linha (não deixa do lado)
- Break : interromper loop
- Small : deixa o texto menor
- Text-align : Alinhamento do texto (direita esquerda centro)
- Form : Formulário
- Input : Entrada
- Fieldset : conjunto de campos
- Legend : legenda título da caixa 
- Div : divisão
- Wrapper : envolver tags
# Tag 3, Atributos e estilos: Width, Style etc. HTML 
- Width : espaçamento, largura 100% 
- Style : estilo do texto

# CSS *Estilos* Significa /* Cascading Stylesheet */ = Folha de estilo em cascata
- body : seleciona todo o copo ou partes
- backgound-color : muda corzinha uwu
- color : mudar corzinha de texto uwu
- :root : Raiz de tudo, como se fosse pegar a page toda 
- all: unset : tira todas as configs (tamanho peso etc)
- ; : final de cada função (importante)
- font : colocar tamanho e tipo de fonte 
- px : tamanho da fonte
- font-size : tamanho de uma fonte especifica
- font-wight : Peso da fonte
- line-heigh: altura da linha especifica
- /100% : altura da linha / coluna 
- 100/500 : antes do px vai definir o quão grosso la ele o texto fica
- table thead : espaçamento seria buscar algo específico
- padding : espaço nas bordas de dentro
- border : espaço nas bordas de fora do quadrado
- border-top : linha no topo
- border-collapse: juntar as linhas
- border-inline : Colocar ou tirar bordas das laterais
- border-radius : Arredondar bordas
- margin : fazer um quadrado para destaque
- display : apresentação
- box-sizing : medida da caixa borda a borda
- border-box : soma o tamanho total
- * : seletor universal, aplica pra toda a tela
- align-items: acertar o centro e bordas
- #ffffff / black red / 1a a1 = opacidade
- : : significa seletor de opção
- Hover : quando passar o mouse encima faz uma ação 
- text-decoration : decora o botão com alguma ação
- underline : deixa a linha embaixo do texto uwu
# JavaSCRIPT *Programação avançada*
// : Instrução (ajuda a separar e não computa)

= : Atribuição de valor

" ' ` : textos ou falas no geral

() : Mensagem ou texto para aparecer / selecionar função

=> {} : Colocar para executar quando eu quiser

{} : Objeto js

.innerHTML : Puxar algo do HTML

${} : substituir nomes (importante)

new Date : (ano, mês, Dia, horas, minutos),

[] : Guardar coisas dentro 

# Variaveis *Lugar pra guardar informações e usar depois*


# Tipos de dados *Lugar parar guardar equações e dados numéricos*
Number : numeros matemáticos e dados desse gênero
String : Textos no geral

# Função JS
Alert() : caixa de texto pop-up
Const : constante / mensagem / caixa de diálogo
Return : Retornar o resultado que eu colocar 
document.querySelector() : Selecionar o corpo pela tag / função HTML
let : fazer algo
for : para cada alguma coisa
output : Saida
onsubmit : Atenção /forçar
placeholder : fundo para caixa de diálogos / nome do fundo
type : tipo de formato
name : nome doformato
required : obrigatório preencher
null : nulo, não existe nada
... : espalhar
== : dois iguais siginificam equivalente true false 
# Algoritmo, lógica e sintaxe

Significa : *Passo a passo, tipos de meios e vias, tipos de Programação*


# Linhas de códigos aleatórios 

```js
// Variaveis
const mensagem = `Oi, tudo bem?`
// Tipos de dados
  // number
  // string
// Função
alert(mensagem)
```

```js
const atualizarlista = () => {}// arrow function
  // pegar informação do HTML


  // substituir informação do HTML
```
 #Criando uma lista 

```js
// objeto javascript
const participante = {
  nome: "Jonathan Rocha",
  email: "jonathanpsaicon@gmail.com",
  dataIncricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 19, 20)
// Modelo do objeto
}

// array
let participantes = [
  {
   nome: "Jonathan Rocha",
   email: "jonathanpsaicon@gmail.com",
   dataIncricao: new Date(2024, 2, 22, 19, 20),
   dataCheckIn: new Date(2024, 2, 25, 19, 20)
  },
  
]

HTML
<table width=100%>
  <thead style="text-align: left">
    <tr>
     <th>Participante</th>
     <th>Data da inscrição</th>
     <th>Data do check-in</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
     <td>
       <strong>
       Diego Fernandes
       </strong>
       <br>
       <small>
       diego@gmail.com
       </small>
     </td>
     <td>Há 3 dias</td>
     <td>Há 3 minutos</td>
    </tr>
  </tbody>
</table>
```

```js
// array
let participantes = [
  {
   nome: "Jonathan Rocha",
   email: "jonathanpsaicon@gmail.com",
   dataIncricao: new Date(2024, 2, 22, 19, 20),
   dataCheckIn: new Date(2024, 2, 25, 19, 20)
  },
  
]
```

```js
const CriarNovoParticipante = (participante) => {
  return `
  <tr>
     <td>
       <strong>
       ${participante.nome}
       </strong>
       <br>
       <small>
       ${participante.email}
       </small>
     </td>
     <td>${participante.dataIncricao}</td>
     <td>${participante.dataCheckIn}</td>
    </tr>
  `
}

const atualizarlista = (participante) => {
  // pegar informação do HTML


  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = CriarNovoParticipante(participante)
}

atualizarlista(participante)
````

````js
// estrutura de  repetição - loop
let output = ""

for (let participante of participantes) {
  // para (for) cada (let) participante de (of) participantes faça {} alguma coisa
  // enquanto tiver participantes nessa lista/ variavel
}

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}
````

````js
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js"></script>
<script>dayjs.extend(window.dayjs_plugin_relativeTime)</script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/pt-br.js"></script>
<script>dayjs.locale('pt-br')</script>
````
````js
 // condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onlick="fazerCheckIn(event)"
      >
       Confirmar check-in 
       </button>
      `
````

````js
const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataIncricao: new Date(),
    dataCheckIn: null
  }

  
  // verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => {
       return p.email == participante.email
    }
  )
  
 if(participanteExiste) {
   alert('Email já cadastrado!')
   return
 }

  participantes = [participante, ...participantes]
  atualizarlista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}


````

````js
const fazerCheckIn = (event) => {
  // confirmar se realmente quer o check-in
   const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
   if(confirm(mensagemConfirmacao) == false) {
      return
   }
  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  
  // atualizar a lista de participantes.
  atualizarlista(participantes)
  ````

  ````css
  /* Declaraões */
  body, table, input, button {
   font: 300 16px/140% 'roboto', sans-serif;
   
}  
 body {
   background-color: #121214;
   color: #ffffff;
 }

 table {
  border-collapse: collapse;
 }
 
 table thead {
   font-size: 14px;
   line-height: 16px;
 }

 thead th,
 tbody td {
  padding: 12px 16px;
}

 tbody td {
  border-top: 1px solid #ffffff1a;
  font-size: 13px;
  line-height: 15px;
  color: #c4c4cc;
 }

 tbody td strong {
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
 }

tbody td small {
  font-size: 12px;
  line-height: 16px;
}

tbody td button {
  all: unset;
  color: #9ff9cc;
}

tbody td button:hover {
  text-decoration: underline;

}
````