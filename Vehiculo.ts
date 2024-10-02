export class Vehiculo {
    private marca: string;
    private modelo: string;
    private anio: number;
    

    constructor(marca: string, modelo: string,anio: number ) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio; 

    }

    getMarca():string {
        return this.marca 
    }

    setMarca(marca: string) {
        this.marca = marca;
    }

    getModelo() : string{
        return this.modelo
    }

    setModelo(modelo: string){
        this.modelo = modelo;
    }

    getAnio() : number{
        return this.anio
    }

    setAnio (anio: number){
        this.anio = anio
    }
}