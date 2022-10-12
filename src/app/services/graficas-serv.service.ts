import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { datosGrafica } from '../models/datos-grafica';

@Injectable({
  providedIn: 'root'
})
export class GraficasServService {

  constructor(private http:HttpClient) { }
  URL_API ='http://localhost:3000';
  documentos: datosGrafica[] =  [];
  datosInput: datosGrafica = {
      concepto:'',
      monto: 0
    };

  obtenerMov(){
    //Crear peticion al servidor (http) --> GET http://localhost:3000/obtener_movimiento
    let peticion = this.http.get<datosGrafica[]>(this.URL_API + '/obtener_grafica');
    return peticion;
  }
}
