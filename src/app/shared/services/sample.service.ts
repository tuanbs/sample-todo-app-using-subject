import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  loadSample(): Observable<number> {
    return new Observable((observer) => {
      const sample = 0;
      observer.next(sample);
    });
  }

  saveSample(sample: number): Observable<void> {
    return new Observable((observer) => {
      observer.next();
    });
  }
}
