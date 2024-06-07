import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return ['Data 1', 'Data 2', 'Data 3'];
  }
}
