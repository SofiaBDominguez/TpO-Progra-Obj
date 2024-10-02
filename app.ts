import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";
import { Vehiculo } from "./Vehiculo";


let registro : RegistroAutomotor = new RegistroAutomotor();

let camion : Vehiculo = new Camion("Volksvagen","Suran",2014);
let auto : Vehiculo = new Auto("Ford", "Ka", 2006);
let moto : Vehiculo = new Moto("kawasaki","250", 2015);

registro.agregarVehiculo(auto); 
registro.agregarVehiculo(moto); 
registro.agregarVehiculo(camion);

registro.eliminarVehiculo(2);

registro.modificarVehiculo(1,new Moto("Ford","Fiesta", 2008));

 