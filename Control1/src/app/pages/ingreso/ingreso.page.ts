import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  @ViewChild('titulo', { read: ElementRef, static: true }) titulo: ElementRef;
  
  public usuario: Usuario;

  constructor(private router: Router, private toastController: ToastController, private animationController: AnimationController) {
    this.usuario = new Usuario('','','');
    this.usuario.correo = '';
    this.usuario.password = '';
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    const animation = this.animationController
      .create()
      .addElement(this.titulo.nativeElement)
      .iterations(Infinity)
      .duration(5000)
      .fromTo('transform', 'translate(0px)', 'translate(100px)')
      .fromTo('opacity', 1, 1);

    animation.play();
  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }
    this.mostrarMensaje('¡Bienvenido!');
    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/inicio'], navigationExtras);
  }

  public validarUsuario(usuario: Usuario): boolean {
    const usu = this.usuario.buscarUsuarioValido(
      this.usuario.correo, this.usuario.password);

    if (usu) {
      this.usuario = usu;
      return true;
    }
    else {
      this.mostrarMensaje('Las credenciales no son correctas!');
      return false;
    }
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }

}

