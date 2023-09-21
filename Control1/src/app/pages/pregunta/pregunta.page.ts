import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController} from '@ionic/angular';
import { Respuesta } from 'src/app/model/Respuesta';
import { Correo } from 'src/app/model/Correo';


@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {


  public correo: Correo;
  public respuesta: Respuesta;

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute) {
    this.respuesta = new Respuesta('');
    this.respuesta.respuesta= '';
    this.correo = new Correo();
    this.correo.CorreoUsuario = '';

    this.activeroute.queryParams.subscribe(params => {       
      if (this.router.getCurrentNavigation().extras.state) { 

        this.correo= this.router.getCurrentNavigation().extras.state.usuario;

      } else {
        this.router.navigate(['/correo']);
      }
    })
  }
 

  public ngOnInit(): void {

  }

  public ingresar(): void{
    if(!this.validarUsuario(this.respuesta)){
      return;
    }

}

public validarUsuario(respuesta:Respuesta): boolean {

  const navigationExtras: NavigationExtras = {
    state: {
    respuesta: this.respuesta

    }
  }
  this.router.navigate(['/pregunta'], navigationExtras); 

    if (this.correo.CorreoUsuario.trim() === 'nstuardo@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'gato')
      {
        this.router.navigate(['/correcto'], navigationExtras);

        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'frarriagadag@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'juanito')
      {
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'pipealvarado@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'Valparaiso')
      {
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'cristianarm@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'duoc')
      {
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.respuesta.respuesta.trim() !== ''){
      this.router.navigate(['/incorrecto']);
      return false;}
    else{
      this.mostrarMensaje('Ingrese informacion porfavor');
      return true;
    }
  }
  
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  public nombres(): string {
    if (this.correo.CorreoUsuario.trim() === 'nstuardo@duocuc.cl'){
      return 'Noah Stuardo'
    }
    if (this.correo.CorreoUsuario.trim() === 'frarriagadag@duocuc.cl'){
      return 'Francisco Arriagada'   
    }
    if (this.correo.CorreoUsuario.trim() === 'pipealvarado@duocuc.cl'){
      return 'Felipe Alvarado'
    }
    if (this.correo.CorreoUsuario.trim() === 'cristianarm@duocuc.cl'){
      return 'Cristian Armando'
    }
  }

  public obtenerPregunta(): string {
    return this.correo.obtenerPreguntaSecreta();
  }

}
