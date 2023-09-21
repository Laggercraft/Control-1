export class Correo {
  public CorreoUsuario = '';
  public respuesta = '';

  public validarNombreUsuario(): string {
    if (this.CorreoUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar su correo.';
    }
    return '';
  }

  public validarCorreoVacio(): string {
    if (this.CorreoUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar su correo.';
    }
    return '';
  }

  public validarCorreo(): string {
    const correosValidos = [
        'nstuardo@duocuc.cl',
        'frarriagadag@duocuc.cl',
        'pipealvarado@duocuc.cl',
        'cristianarm@duocuc.cl'
    ];

    if (!correosValidos.includes(this.CorreoUsuario.trim())) {
        return 'Correo no válido o no reconocido.';
    }
    return '';
  }

  public valRespuesta(): string{
    if (this.CorreoUsuario.trim() === 'nstuardo@duocuc.cl'){
      if (this.respuesta.trim() !== 'gato'){
        return 'Respuesta correcta'
      }
    }

    if (this.CorreoUsuario.trim() === 'frarriagadag@duocuc.cl'){
      if (this.respuesta.trim() !== 'juanito'){
        return 'Respuesta correcta'
      }
    }

    if (this.CorreoUsuario.trim() === 'pipealvarado@duocuc.cl'){
      if (this.respuesta.trim() !== 'santiago'){
        return 'Respuesta correcta'
      }
      
    }

    if (this.CorreoUsuario.trim() === 'cristianarm@duocuc.cl'){
      if (this.respuesta.trim() !== 'duoc'){
        return 'Respuesta correcta'
      }
      
    }
  }

  public obtenerPreguntaSecreta(): string {
    switch (this.CorreoUsuario.trim()) {
        case 'nstuardo@duocuc.cl':
            return '¿Que animal tienes de mascota?';
        case 'frarriagadag@duocuc.cl':
            return '¿Nombre de su mejor amigo/a?';
        case 'pipealvarado@duocuc.cl':
            return '¿Lugar de nacimiento de su madre?';
        case 'cristianarm@duocuc.cl':
            return '¿Donde imparte las clases?';
        default:
            return 'Seguramente ingresaste un correo invalido';
    }
}

}