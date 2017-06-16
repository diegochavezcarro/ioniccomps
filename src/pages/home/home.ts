import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  items = ['Apples', 'Bananas', 'Oranges' ,'Berries'];

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }
  onElementClicked(){
    console.log('clicked or touched');   
  }
  onElementTapped(){
    console.log('i was tapped');  
  }
  onElementPressed(){
    console.log('Long pressed');
  }

  onClick() {
    console.log('Clicked!');

  }
}
