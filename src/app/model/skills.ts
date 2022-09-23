export class Skills {
    id?: number;
    nombre: string;
    tipo: string;
    porcentaje: number;
    icono: string;

    constructor(nombre: string, tipo: string, porcentaje: number, icono: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.porcentaje = porcentaje;
        this.icono = icono;
    }
}
