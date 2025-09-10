// comando para criar componentes multiplos
//  ng generate component components/fistcomponent

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Fistcomponent } from './components/fistcomponent/fistcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Fistcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('meu-projeto');
}


