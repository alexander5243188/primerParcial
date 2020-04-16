import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AlertController} from '@ionic/angular';

//import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public nombre;
  public apellido;
  public telefono;
  public email;
  public fechaN;
  public genero;
  public edad;

  public lista:any;
  
  //public nombrel;
  //public apellidol;
  //public telefonol;
  //public emaill;
  //public fechaNl;
  //public generol;
  //public edadl;

  constructor(private activatedRoute: ActivatedRoute,
    public alertCtrl: AlertController,
    private storage: Storage
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async edadCalculator(){
    if(this.fechaN){
      const convertAge = new Date(this.fechaN);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

  async mensaje(nombre, apellido){
    const alert= await this.alertCtrl.create({
      header: nombre,      
      message: apellido,
      
      buttons: [
        {
          text: 'OK',        
          handler: () => {            console.log('ok');          }
        }
        ]
    })
    alert.present();
  };

  

  agregar_usuario(){
    console.log(this.nombre);

    this.storage.set('nombre',this.nombre).then(()=>{
      this.storage.set('apellido',this.apellido).then(()=>{
        this.storage.set('telefono',this.telefono).then(()=>{
          this.storage.set('email',this.email).then(()=>{
            this.storage.set('fechaN',this.fechaN).then(()=>{
              this.storage.set('genero',this.genero).then(()=>{
                this.storage.set('edad',this.edad).finally(()=>{
                  console.log("OK");
                });
              });
            });
          });
        });
      });
    });
    
   
    
    this.lista=[{      
      
    nombrel:"alex",
      apellidol:this.apellido,
      telefonol:this.telefono,
      emaill:this.email,
      fechaNl:this.fechaN,
      generol:this.genero,
      edadl:this.edad
    
    }];
    
    
  }

}

