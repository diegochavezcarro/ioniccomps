import { Component } from '@angular/core';

@Component({
    selector: 'app-touch-event',
    template: `  
        <div class="gestures" 
            (click)="onElementClicked()">Click me</div>
        <div class="gestures" 
            (tap)="onElementTapped()">Tap me</div>
        <div class="gestures" 
            (press)="onElementPressed()"
            (tap)="onElementTapped()"
            (click)="onElementClicked()">Long press me</div>`
})

export class TouchEventComponent {
    constructor() { }
    onElementClicked() {
        console.log('clicked or touched');
    }
    onElementTapped() {
        console.log('i was tapped');
    }
    onElementPressed() {
        console.log('Long pressed');
    }

}