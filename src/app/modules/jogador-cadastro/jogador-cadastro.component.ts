import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../shared/services/jogador.service';
import { MessageService } from 'primeng/api';
import { JogadorCadastro } from '../../shared/models/jogador-cadastro.model';

@Component({
  selector: 'home-jogador-cadastro',
  templateUrl: './jogador-cadastro.component.html',
  styleUrls: ['./jogador-cadastro.component.css']
})
export class JogadorCadastroComponent implements OnInit {

  constructor(private jogadorService: JogadorService,private messageService: MessageService) { }

  jogador = new JogadorCadastro('','')

  ngOnInit(): void {
  }

  salvarJogador(){
    console.log('aaa')
    this.jogadorService.save(this.jogador).subscribe(
      data => {
      this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Jogador foi cadastrado com sucesso!'});
    }),
    (error) => this.messageService.add({severity:'error', summary: 'Erro', detail: error});

  }


}
