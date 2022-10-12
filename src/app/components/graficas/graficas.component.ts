import { Component, OnInit } from '@angular/core';
import { GraficasServService } from 'src/app/services/graficas-serv.service';
import { NgForm} from '@angular/forms'
import { Router } from '@angular/router'
import { datosGrafica } from 'src/app/models/datos-grafica';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {


  constructor( public GraficasServ: GraficasServService, private ruta:Router) {
    Object.assign(this.single);
  }

  ngOnInit(): void {
    this.datos_grafica()
  }

  datos_grafica(){
    this.GraficasServ.obtenerMov().subscribe({
      next: (res) => {
        console.log('Obteniendo Datos');
        this.GraficasServ.documentos = res;





        console.log(res)
        },
      error: (err) => console.log(err),
    })
  }

  view: [number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  onSelect(data :any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
