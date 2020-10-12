import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage {

 constructor(private navCtrl: NavController){

 }
 goToPagina1(){
  this.navCtrl.navigateForward('/pagina1');
}
 goToPagina2(){
  this.navCtrl.navigateForward('/pagina2');
 }
 goToPagina3(){
  this.navCtrl.navigateForward('/pagina3');
}
goToPagina4(){
  this.navCtrl.navigateForward('/pagina4');
}
goToPagina5(){
  this.navCtrl.navigateForward('/pagina5');
}
}
