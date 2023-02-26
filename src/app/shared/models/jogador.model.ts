import { Stefamon } from "./stefamon.model";

export class Jogador {
  constructor(public id: number, public nickname:string, public saldo: number,public stefamons:Stefamon[]){

  }
}
