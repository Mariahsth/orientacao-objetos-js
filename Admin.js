import User from "./User.js";

export default class Admin extends User {
    constructor (nome, email, nascimento, role='admin', ativo=true){
        super(nome, email,nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas){
        return `O curso ${nomeCurso} foi criado com ${qtdVagas} vagas`
    }
    // exibirInfos() {
    //     const infos = super.exibirInfos()
    //     return `admin - ${infos}`;
    //   }
}


// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('JavaScript', 25))