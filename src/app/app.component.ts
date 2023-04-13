import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page-contrato';
  nombre: string = "";
  documentoIdentidad: string = "";
  estadoCivil: string = "";
  direccion: string = "";
  lugar: string = "";
  fecha: string = "";
  firma: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("YA ESTAMOS ADENTRO");
    this.nombre = this.route.snapshot.paramMap.get('nombre')!;
    this.documentoIdentidad = this.route.snapshot.paramMap.get('documentoIdentidad')!;
    this.estadoCivil = this.route.snapshot.paramMap.get('estadoCivil')!;
    this.direccion = this.route.snapshot.paramMap.get('direccion')!;
    this.lugar = this.route.snapshot.paramMap.get('lugar')!;
    this.fecha = fechaModificada(this.route.snapshot.paramMap.get('fecha'))!;
    this.firma = this.route.snapshot.paramMap.get('firma')!;
  }

fechaModificada(fecha: String){
const fechaStr = fecha;

// Convertir la fecha en un objeto Date
const fecha = new Date(fechaStr);

// Obtener el nombre del mes en función del número del mes
const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
const nombreMes = meses[fecha.getMonth()];

// Formatear la fecha como "12 de DICIEMBRE de 2023"
const fechaFormateada = `${fecha.getDate()} de ${nombreMes} de ${fecha.getFullYear()}`;

return fechaFormateada;

}
}
