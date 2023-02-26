import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedModule } from '../shared.module';
import { environment } from '../../../environments/environment.prod';
import { JogadorCadastro } from '../models/jogador-cadastro.model';

@Injectable({
  providedIn: SharedModule
})
export class JogadorService {

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<JogadorCadastro[]>(`${environment.urlBackend}/jogador/todos`);
  }

  save(jogador: JogadorCadastro) {
    return this.http.post(`${environment.urlBackend}/jogador`, jogador);
  }


}
