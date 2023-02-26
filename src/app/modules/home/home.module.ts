import { CommonModule } from '@angular/common';
import { JogadorCadastroComponent } from '../jogador-cadastro/jogador-cadastro.component';
import { HomeComponent } from './home.component';import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InputTextModule}  from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    HomeComponent,
    JogadorCadastroComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [HomeComponent]
  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule { }
