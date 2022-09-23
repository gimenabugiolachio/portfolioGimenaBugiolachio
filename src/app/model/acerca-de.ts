export class AcercaDe {
    id?: number;
    nombreA: string;
    descripcionA: string;
    edadA: string;
    mailA: string;
    telefonoA: string;
    imgA: string;

    constructor(nombreA: string, descripcionA: string, edadA: string, mailA: string, telefonoA: string, imgA: string){
        this.nombreA = nombreA;
        this.descripcionA = descripcionA;
        this.edadA = edadA;
        this.mailA = mailA;
        this.telefonoA = telefonoA;
        this.imgA = imgA;
    }
}
