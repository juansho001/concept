import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <input type="text" [(ngModel)]="name" pInputText>
        <button type="button" pButton label="Click" icon="fa fa-check" (click)="onClick($event)"></button>
        
        <div>{{message}}</div>
  `
})
export class AppComponent { 
    
    name: string; 
    
    message: string;
    
    onClick() {
        this.message = 'Hello ' + this.name;
    }
}
