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
 ngOnInit() {
  console.log("ngOnInit: home");
}
 ionViewWillEnter(){
  console.log("ionViewWillEnter: home");
}

ionViewDidEnter(){
  console.log("ionViewDidEnter: home");
}

ionViewWillLeave(){
  console.log("ionViewWillLeave: home");
}

ionViewDidLeave(){
  console.log("ionViewDidLeave: home");
}

ngOnDestroy(){
  console.log("ngOnDestroy: home");
}
/* Cuando ejecutamos la aplicación podemos ver en el log los distintos eventos que se van produciendo.
A continuación ponemos un botón back en la página 2. Al ejecutar la aplicación de nuevo y pulsar en este botón vemos
que la página 1 no lanza el evento ngOnInit, puesto que ya está cargada en la pila de páginas. La página 2 lanza el
método ngOnDestroy pues al quitarse de la pila se destruye. Por último cambiamos la llamada de la página home a la
página 2 para que la página home no quede en la pila, sino que se destruya y la página "root" pase a ser la página 2.
Comentamos la linea actual y añadimos la nueva.
//this.navCtrl.navigateForward('/pagina2', navigationExtras);
this.navCtrl.navigateRoot('/pagina2', navigationExtras);

Ahora vemos que cuando pasamos de la página home a la página 2 la página home sí lanza el evento ngOnDestroy,
puesto que se descarga de memoria al no quedar en la pila.

*/
 goToPagina1(){
  this.navCtrl.navigateForward('/pagina1');
}
/* To make your page set to the root page in Ionic 4 you should use navigateRoot instead of setRoot
this.navCtrl.navigateRoot('/pageName'); */
 goToPagina2(){
  this.navCtrl.navigateRoot('/pagina2');
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
