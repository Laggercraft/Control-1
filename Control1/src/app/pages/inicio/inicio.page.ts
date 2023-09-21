import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild('titulo', { read: ElementRef, static: true }) titulo: ElementRef;
  
  public usuario: Usuario;

   constructor(
        private activeroute: ActivatedRoute
      , private router: Router
      , private alertController: AlertController
      , private animationController: AnimationController) {
        this.usuario = new Usuario('','','');
        this.usuario.nombre = ''

    this.activeroute.queryParams.subscribe(params => {       
      if (this.router.getCurrentNavigation().extras.state) { 
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        //this.router.navigate(['/ingreso']);
      }
  });
}

public nombre(): string {
  if (this.usuario.nombre.trim() === 'atorres@duocuc.cl'){
    return 'Ana Torres Leiva'
  }
  if (this.usuario.nombre.trim() === 'avalenzuela@duocuc.cl'){
    return 'Alberto Valenzuela Nuñez'   
  }
  if (this.usuario.nombre.trim() === 'cfuentes@duocuc.cl'){
    return 'Carla Fuentes Gonzalez'
  }
}

public ngAfterViewInit(): void {
  const animation = this.animationController
    .create()
    .addElement(this.titulo.nativeElement)
    .iterations(Infinity)
    .duration(5000)
    .iterations(Infinity)
    .fromTo('transform', 'translate(0px)', 'translate(100px)')
    .fromTo('opacity', 1, 1);

  animation.play();
}

public ngOnInit() {
}

}
