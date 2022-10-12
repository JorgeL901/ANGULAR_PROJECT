import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movimiento_modelo } from '../models/movimientos';

@Injectable({
  providedIn: 'root'
})
export class EgresoIngresoServService {

  constructor(private http:HttpClient) { }

  URL_API ='http://localhost:3000';
  documentos: Movimiento_modelo[] =  [];
  datosInput: Movimiento_modelo = {
      fecha:'',
      concepto:'',
      monto: 0,
      categoria:''
    };

  obtenerMov(){
    //Crear peticion al servidor (http) --> GET http://localhost:3000/obtener_movimiento
    let peticion = this.http.get<Movimiento_modelo[]>(this.URL_API + '/obtener_movimiento');
    return peticion;

  }

  crearMov( datos : Movimiento_modelo){
    ////petición HTTP al servidor de NODE --> POST http://localhost:3000/crear_video
    let peticion = this.http.post(this.URL_API + '/crear_movimiento', datos);
    return peticion;
  }

  delete( id: string){
    let peticion = this.http.delete(this.URL_API + '/eliminar_movimiento/'+id);
    return peticion;
  }
}
