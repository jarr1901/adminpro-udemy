import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje = 50;
  @Input() leyenda = 'Leyenda';
  @Output() emiteValor: EventEmitter<number> = new EventEmitter();
  @ViewChild('percentageInput') txtPercentage: ElementRef;

  constructor() { }

  ngOnInit() { }

  onChanges(newValue: number) {
    if (newValue >= 100) {
      newValue = 100;
    } else if (newValue <= 0) {
      newValue = 0;
    } else {
      this.porcentaje = newValue;
    }

    this.txtPercentage.nativeElement.value = this.porcentaje;
    this.emiteValor.emit(this.porcentaje);
  }

  cambiaValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.emiteValor.emit(this.porcentaje);
    this.txtPercentage.nativeElement.focus();
  }
}
