import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("ngOnInit: pagina2");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina2");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina2");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina2");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina2");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy: pagina2");
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
