import { Component, IterableDiffers, OnInit } from '@angular/core';
import { EgresoIngresoServService } from 'src/app/services/egreso-ingreso-serv.service';
import { NgForm} from '@angular/forms'
import { Router } from '@angular/router'
import { Movimiento_modelo } from 'src/app/models/movimientos';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-egreso-ingreso-comp',
  templateUrl: './egreso-ingreso-comp.component.html',
  styleUrls: ['./egreso-ingreso-comp.component.css']
})
export class EgresoIngresoCompComponent implements OnInit {
  total = 0;
  egresos = [];
  ingresos = 0;
  constructor(public EgresoIngresoServ : EgresoIngresoServService, private ruta:Router) {

   }

  ngOnInit(): void {
    this.listadoMovimientos();
  }
  ejemplo_total=0;
  porceg = 0;


  listadoMovimientos(){
    this.EgresoIngresoServ.obtenerMov().subscribe({
      next: (res) => {
        console.log('Obteniendo Movimientos');
        this.EgresoIngresoServ.documentos = res;
        //Para obtener valores de egresos e ingresos
        const filtroEgreso = res.filter(x => x.categoria == 'egreso');
        const filtroIngreso = res.filter(x => x.categoria == 'ingreso');
        console.log({filtroEgreso});
        //Para sumar todo los Egresos
        const egresos = filtroEgreso.reduce((sum,item) => sum + item.monto,0)
        console.log({filtroIngreso});
        //Para sumar todos los Ingresos
        const ingresos = filtroIngreso.reduce((sum,item) => sum + item.monto,0)
        this.total = ingresos - egresos;
        this.porceg = ingresos*0.2;
        //Ya obtuvimos el total y calculamos el 20%
        this.ejemplo_total = 152000 ;

        },
      error: (err) => console.log(err),
    })
  }
  agregarMovimiento(form : NgForm){
    console.log(form.value);
    this.EgresoIngresoServ.crearMov(form.value).subscribe({
      next: (res) => {
          console.log('Agregando un nuevo Movimiento');
          this.listadoMovimientos();
          form.reset();
    },
      error: (err) => console.log(err),

    })
  }
  eliminarMovimiento(id: any){
    let respuesta = confirm('Desea eliminar el el Movimiento');
    console.log(respuesta);
    if(respuesta==true){
      this.EgresoIngresoServ.delete(id).subscribe({
      next: (res) => {
            console.log('Eliminando Movimiento');
            this.listadoMovimientos();
      } ,
      error: (err) => console.log(err),
      })
    }
  }
}
