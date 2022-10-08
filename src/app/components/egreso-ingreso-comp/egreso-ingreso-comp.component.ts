import { Component, OnInit } from '@angular/core';
import { EgresoIngresoServService } from 'src/app/services/egreso-ingreso-serv.service';
import { NgForm} from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-egreso-ingreso-comp',
  templateUrl: './egreso-ingreso-comp.component.html',
  styleUrls: ['./egreso-ingreso-comp.component.css']
})
export class EgresoIngresoCompComponent implements OnInit {

  constructor(public EgresoIngresoServ : EgresoIngresoServService, private ruta:Router) {

   }

  ngOnInit(): void {
    this.listadoMovimientos();
  }

  listadoMovimientos(){
    console.log("1")
    this.EgresoIngresoServ.obtenerMov().subscribe({
      next: (res) => {
        console.log('Obteniendo Movimientos');
        this.EgresoIngresoServ.documentos = res
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
