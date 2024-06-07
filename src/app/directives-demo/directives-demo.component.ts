import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent {
  isVisible: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  value: string = 'A';
}
