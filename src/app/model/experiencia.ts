export class Experiencia {
    id?: number;
    nombreE : string;
    puestoE : string;
    descripcionE : string;
    fechaInicioE: string;
    fechaFinE: string;
    
    constructor(nombreE: string, puestoE: string, descripcionE: string, fechaInicioE: string, fechaFinE: string){
        this.nombreE = nombreE;
        this.puestoE = puestoE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
    }

}
