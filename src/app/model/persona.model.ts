export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string
    profesion: string;

    constructor(nombre: string, apellido: string, img: string, profesion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
    }
}