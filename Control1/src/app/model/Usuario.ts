export class Usuario {
  public nombre = '';
  public password = '';
  public respuesta= '';
  public correo= '';


  constructor(
    correo: string,
    password : string,
    nombre : string,
  )
  {
    this.correo = correo;
    this.password = password;
    this.nombre = nombre;
  }
  public listaUsuariosValidos(): Usuario[] {
    const lista = [];
    lista.push(new Usuario('nstuardo@duocuc.cl', '1234', 'Noah Stuardo'));
    lista.push(new Usuario('frarriagadag@duocuc.cl', 'qwer', 'Francisco Arriagada'));
    lista.push(new Usuario('pipealvarfado@duocuc.cl', 'asdf', 'Felipe Alvarado'));
    lista.push(new Usuario('cristianarm@duocuc.cl', 'zxcv', 'Cristian alvarado'));
    return lista;
  }
  public buscarUsuarioValido(correo: string, password: string): Usuario {
    return this.listaUsuariosValidos().find(
      usu => usu.correo === correo && usu.password === password);
  }

  public buscarCorreoValido(correo: string,): Usuario {
    return this.listaUsuariosValidos().find(
      cor =>  cor.correo === correo
    );
  }
  public validarPassword(): string {
    if (this.password.trim() === '1234')/*Contra del correo nstuardo@duocuc.cl */{
      return'';
    }else if(this.password.trim() === 'qwer')/*Contra del correo frarriagadag@duocuc.cl */{
      return'';
    }else if(this.password.trim() === 'asdf')/*Contra del correo pipealvarado@duocuc.cl */{
    }else if(this.password.trim() === 'zxcv')/*Contra del correo cristianarm@duocuc.cl */{
      return'';
  }else{
    return this.validarUsuario()
      || this.validarPassword();
  }
}

  public validarUsuario(): string {
    if (this.nombre.trim() === 'nstuardo@duocuc.cl'){
      return'';
    }else if(this.nombre.trim() === 'frarriagadag@duocuc.cl'){
      return'';
    }else if(this.nombre.trim() === 'pipealvarado@duocuc.cl'){
      return'';
    }else if(this.nombre.trim() === 'cristianarm@duocuc.cl'){
      return'';
  }else{
    return this.validarUsuario()
      || this.validarPassword();
  }
}
  public valRespuesta(): string{
    if (this.nombre.trim() === 'nstuardo@duocuc.cl'){
      if (this.respuesta.trim() !== 'gato'){
        return 'Respuesta correcta'
      }
    }
    if (this.nombre.trim() === 'frarriagadag@duocuc.cl'){
      if (this.respuesta.trim() !== 'juanito'){
        return 'Respuesta correcta'
      }
    }
    if (this.nombre.trim() === 'pipealvarada@duocuc.cl'){
      if (this.respuesta.trim() !== 'santiago'){
        return 'Respuesta correcta'
      }
    }
    if (this.nombre.trim() === 'cristianarm@duocuc.cl'){
      if (this.respuesta.trim() !== 'duoc'){
        return 'Respuesta correcta'
      }
    }
  }
}
