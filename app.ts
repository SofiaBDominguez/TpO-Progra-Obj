import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

let registro : RegistroAutomotor = new RegistroAutomotor();

let camion : Camion = new Camion("Volkswagen","Suran",2014);
let auto : Auto = new Auto("Ford", "Ka", 2006);
let moto : Moto = new Moto("kawasaki","250", 2015);

registro.agregarAuto(auto); 
registro.agregarMoto(moto); 
registro.agregarCamion(camion);

registro.modificarMoto(1,new Moto("Yamaha","MT-07", 2021));
registro.modificarAuto(1,new Auto("Volkswagen","Fiesta", 2008));
registro.modificarCamion(1,new Camion("Mercedes-Benz","Actros", 2020));

registro.eliminarAuto(1);
registro.eliminarMoto(1);
registro.eliminarCamion(1);

 