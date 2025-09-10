import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-fistcomponent',
  imports: [],
  standalone: true,
  templateUrl: './fistcomponent.html',
  styleUrl: './fistcomponent.css'
})

export class Fistcomponent {
  texto: string = "primeiro componente";
  contador = signal(0);
  status: boolean = true;
  cont = 0;
  url: string = "";

  teste(): void{
    console.log("teste")
    this.texto = "teste"
    this.contador.update(contador => contador + 1) 

    if(this.cont % 2){
       this.status = false
    }else{
      this.status = true
    }
  }
}

