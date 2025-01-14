import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role='docente', ativo=true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(aluno, curso){
        return `O aluno ${aluno} está aprovado no curso ${curso}. Responsável: ${this.nome}`
    }
}


// console.log(novaDocente)
// console.log(novaDocente.exibirInfos())
// console.log(novaDocente.aprovarEstudante('Luis', 'Python'))