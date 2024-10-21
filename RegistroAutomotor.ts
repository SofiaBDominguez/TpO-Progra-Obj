import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class RegistroAutomotor{

    private autos: Auto[];
    private motos: Moto[];
    private camion: Camion[];

    constructor() {
        this.autos = []; 
        this.motos = [];
        this.camion = [];
    
    }

    //Autos
    agregarAuto(vehiculo : Auto): void {
        this.autos.push(vehiculo)  
    }

    modificarAuto(indice: number, vehiculo: Auto): void{
        if (indice >= 0 && indice < this.autos.length)
            this.autos[indice] = vehiculo; 
        else 
            console.log ("Error")
    }

    eliminarAuto(indice: number){
        if (indice >= 0 && indice < this.autos.length)
            this.autos.splice(indice, 1 ) 
        else
            console.log("Error");
            
    }

    mostrarAuto(){
        console.log(this.autos);
    }

    //Moto
    agregarMoto(vehiculo : Moto): void {
        this.motos.push(vehiculo)  
    }

    modificarMoto(indice: number, vehiculo: Moto): void{
        if (indice >= 0 && indice < this.motos.length)
            this.motos[indice] = vehiculo; 
        else 
            console.log ("Error")
    }

    eliminarMoto(indice: number){
        if (indice >= 0 && indice < this.motos.length)
            this.motos.splice(indice, 1 ) 
        else
            console.log("Error");
            
    }

    mostrarMotos(){
        console.log(this.motos);
    }

    //Camion
     agregarCamion(vehiculo : Camion): void {
        this.camion.push(vehiculo)  
    }

    modificarCamion(indice: number, vehiculo: Camion): void{
        if (indice >= 0 && indice < this.camion.length)
            this.camion[indice] = vehiculo; 
        else 
            console.log ("Error")
    }

    eliminarCamion(indice: number){
        if (indice >= 0 && indice < this.camion.length)
            this.camion.splice(indice, 1 ) 
        else
            console.log("Error");
            
    }

    mostrarCamion(){
        console.log(this.camion);
    }

}
