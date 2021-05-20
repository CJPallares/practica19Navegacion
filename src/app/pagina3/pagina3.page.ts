import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("ngOnInit: pagina3");
  }
   ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina3");
  }
  
  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina3");
  }
  
  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina3");
  }
  
  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina3");
  }
  
  ngOnDestroy(){
    console.log("ngOnDestroy: pagina3");
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
