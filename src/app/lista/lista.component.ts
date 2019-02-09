
import { Component, OnInit } from '@angular/core';
import { Anel } from './anel';
import { ANEIS } from './mock-anel';


@Component({
  selector: 'as-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  ANEIS = Anel;
  constructor() { }
  ngOnInit() {
  }

}
