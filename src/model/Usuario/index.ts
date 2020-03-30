import {AuthService} from '../../services/authService'
export default class Usuario  {

  id: string;
  nome: string;
  email: string;
  senha: string;

  constructor(id: string, nome:string, email: string, senha: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }



  static signIn(usuario: Usuario) {
    return new AuthService().signIn(usuario)
  }
}
