import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  loadCounter(): Observable<number> {
    return new Observable((observer) => {
      const counterString = localStorage.getItem(AppConstants.localCounterDbName);
      const counter: number = counterString == null ? 0 : JSON.parse(counterString);
      // observer.error(`Cannot load the local counter.`);
      observer.next(counter);
    });
  }

  saveCounter(counter: number): Observable<void> {
    return new Observable((observer) => {
      localStorage?.setItem(AppConstants.localCounterDbName, JSON.stringify(counter));
      observer.next();
    });
  }
}
