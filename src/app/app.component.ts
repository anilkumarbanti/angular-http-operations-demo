import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data: string[];
  title = 'hello-world';

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }
}
