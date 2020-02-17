import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().pipe(
      retry(2)
    ).subscribe(
      numero => { console.log('subs', numero); },
      error => { console.error('subs error', error); },
      () => { console.log('terminó'); }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('page is closing');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('sos');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if ((valor % 2) === 1) { return true; } else { return false; }

        // console.log('FILTER', valor, index);
      })
    );
  }
}
