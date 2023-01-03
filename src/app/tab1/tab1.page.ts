import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {
    let numero = 10;
    // sirve para hacer una depuracion del codigo en donde lo estas colocando , simular como esta funcion se comporta.
    // debugger;
    numero = 20;
    numero = numero + 10;

    numero =0;

    console.log(numero);

  }

}
