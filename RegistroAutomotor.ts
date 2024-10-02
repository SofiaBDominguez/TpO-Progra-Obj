import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor{

    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = []; 
    }


    agregarVehiculo(vehiculo : Vehiculo): void {
        this.vehiculos.push(vehiculo)  
    }

    modificarVehiculo(indice: number, vehiculo: Vehiculo): void{
        if (indice >= 0 && indice < this.vehiculos.length)
            this.vehiculos[indice] = vehiculo; 
        else 
            console.log ("Error")
    }

    eliminarVehiculo(indice: number){
        if (indice >= 0 && indice < this.vehiculos.length)
            this.vehiculos.splice(indice, 1 ) 
        else
            console.log("Error");
            
    }

    mostrarVehiculos(){
        console.log(this.vehiculos);
    }
}