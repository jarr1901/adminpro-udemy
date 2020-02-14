import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajuste: Ajuste = {
    temaUrl: 'assets/css/colorsdefaults.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document: any, ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajuste', JSON.stringify(this.ajuste));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajuste')) {
      this.ajuste = JSON.parse(localStorage.getItem('ajuste'));
    }
    this.aplicarTema(this.ajuste.tema);
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajuste.tema = tema;
    this.ajuste.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajuste {
  temaUrl: string;
  tema: string;
}
