import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  ModalController,
  LoadingController,
  ToastController
} from "ionic-angular";
import { TareasServiceProvider } from '../../providers/tareas-service/tareas-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  laTareas : any;

  constructor(public navCtrl: NavController,
    public tareasprovider: TareasServiceProvider,
    private modalCtrl: ModalController,
     private loadingCtrl: LoadingController,
      public toastCtrl: ToastController,) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
    this.consultaTareas();
    
  }

  consultaTareas() {
    let loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
    loader.present();
      this.tareasprovider
        .consultatareas(
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            if (!data.ERROR) {
              this.laTareas = data;
              console.log('xxxxxxxxxxxxxx');
              console.log(this.laTareas);
              loader.dismiss();
            } else {
              loader.dismiss();
            }
          },
          (err: any) => {
            loader.dismiss();
            this.presentToast("Hubo un error en la conexion");
          }
        );
   

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position : 'middle'
    });
    toast.present();
  }


}
