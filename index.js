let participantes = [
  {
    nome: "Jonathan Rocha",
    email: "jonathanpsaicon@gmail.com",
    dataIncricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "May Brito",
    email: "mayk@gmail.com",
    dataIncricao: new Date(2024, 1, 23, 19, 20),
    dataCheckIn: new Date(2024, 1, 27, 20, 20)
  },
  {
    nome: "Lucas Souza",
    email: "lucas.souza@gmail.com",
    dataIncricao: new Date(2024, 0, 15, 19, 20),
    dataCheckIn: new Date(2024, 0, 20, 20, 20)
  },
  {
    nome: "Ana Silva",
    email: "ana.silva@gmail.com",
    dataIncricao: new Date(2023, 11, 10, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Pedro Santos",
    email: "pedro.santos@gmail.com",
    dataIncricao: new Date(2023, 10, 5, 19, 20),
    dataCheckIn: new Date(2023, 10, 10, 20, 20)
  },
  {
    nome: "Mariana Oliveira",
    email: "mariana.oliveira@gmail.com",
    dataIncricao: new Date(2023, 9, 1, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "João Barbosa",
    email: "joao.barbosa@gmail.com",
    dataIncricao: new Date(2023, 8, 22, 19, 20),
    dataCheckIn: new Date(2023, 8, 27, 20, 20)
  },
  {
    nome: "Camila Alves",
    email: "camila.alves@gmail.com",
    dataIncricao: new Date(2023, 7, 17, 19, 20),
    dataCheckIn: new Date(2023, 7, 22, 20, 20)
  },
  {
    nome: "Rafael Oliveira",
    email: "rafael.oliveira@gmail.com",
    dataIncricao: new Date(2023, 6, 12, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Carla Santos",
    email: "carla.santos@gmail.com",
    dataIncricao: new Date(2023, 5, 7, 19, 20),
    dataCheckIn: new Date(2023, 5, 12, 20, 20)
  }
];

const CriarNovoParticipante = (participante) => {
  const dataIncricao = dayjs(Date.now())
  .to(participante.dataIncricao) 
  
  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button
    
     `

  }
 
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
     <td>${dataIncricao}</td>
     <td>${dataCheckIn}</td>
    </tr>
  `
}

const atualizarlista = (participantes) => {
  // estrutura de  repetição - loop
let output = ""

for (let participante of participantes) {
  output = output + CriarNovoParticipante(participante)
}

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarlista(participantes)

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
}