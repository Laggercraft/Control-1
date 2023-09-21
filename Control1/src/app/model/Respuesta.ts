export class Respuesta {

    public respuesta ='';


constructor(
    respuesta: string,
)
{
    this.respuesta = respuesta

}

public contra(): string {
    if (this.respuesta.trim() === 'gato'){
        return '1234'
    }
    if (this.respuesta.trim() === 'juanito'){
        return 'qwer'   
    }
    if (this.respuesta.trim() === 'Viejas'){
        return 'asdf'
    }
    if (this.respuesta.trim() === 'Viejas'){
        return 'zxcv'
    }
}

}