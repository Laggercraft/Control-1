export class Pregunta {
    public PreguntaUsuario = '';

    public validarPreguntaUsuario(): string {
    if (this.PreguntaUsuario.trim() === '') {
        return 'Para ingresar al sistema debe ingresar su correo.';
    }
    return '';
    }
    public validarPregunta(): string {
    return this.validarPreguntaUsuario();
    }

    public pregunta: Pregunta = new Pregunta();

}