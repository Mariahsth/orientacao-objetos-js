import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Juliana", "j@j.com", "2024-01-01")
console.log(novoUser.exibirInfos());
novoUser.nome = "Julia"
console.log(novoUser.nome);
console.log(novoUser.exibirInfos())


const novoAdmin=new Admin('Mariah', 'm@m.com', '2024-01-1')
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JavaScript', 30))


const novaDocente=new Docente('Ana', 'a@a.com', '2021-01-01')
console.log(novaDocente.exibirInfos())
console.log(novaDocente.aprovarEstudante('João', 'Python'))



const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com')
console.log(dadosFicticios);