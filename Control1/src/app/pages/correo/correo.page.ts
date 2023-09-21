import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';
import { Correo } from 'src/app/model/Correo';


@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: Correo;

  constructor(private router: Router, private toastController: ToastController) {
    this.correo = new Correo();
    this.correo.CorreoUsuario = '';
  }

  public ngOnInit(): void {

  }

  public ingresar(): void {

    if(!this.validarCorreo(this.correo)) {
      return;
    }

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.correo
      }
    };
    this.router.navigate(['/pregunta'], navigationExtras);
  }

  public validarCorreo(usuario: Correo): boolean {

    const mensajeError = usuario.validarCorreo();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  /**
   * 
   *
   * @param mensaje
   * @param duracion 
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}

