import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from '../models/sample.model';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  loadSampleList(): Observable<Sample[]> {
    return new Observable<Sample[]>((observer) => {
      let sampleList: Sample[] = [];
      observer.next(sampleList);
    });
  }

  saveSampleList(sampleList: Sample[]): Observable<void> {
    return new Observable((observer) => {
      observer.next();
    });
  }
}
