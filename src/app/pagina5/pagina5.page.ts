import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("ngOnInit: pagina5");
  }
   ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina5");
  }
  
  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina5");
  }
  
  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina5");
  }
  
  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina5");
  }
  
  ngOnDestroy(){
    console.log("ngOnDestroy: pagina5");
  }
  goToPagina1(){
    this.navCtrl.navigateForward('/home');
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
