export class Experiencia {
    id? : number;
    nombreE : string;
    puestoE : string;
    descripcionE : string;
    
    constructor(nombreE: string, puestoE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.puestoE = puestoE;
        this.descripcionE = descripcionE;
    }

}
