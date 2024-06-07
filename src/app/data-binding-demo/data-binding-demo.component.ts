import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent {
  // Example data
  title = 'Data Binding Demo';
  imageUrl = 'https://picsum.photos/200/300';
  buttonText = 'Click Me';
  inputValue = '';

  // Example event binding method
  handleClick() {
    alert('Button clicked!');
  }
}
