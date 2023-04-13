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
  fecha: string = "";
  constructor(private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

  //  const fechaMod = await this.fechaModificada('2023-12-12');
    console.log("YA ESTAMOS ADENTRO");
    this.nombre = this.route.snapshot.paramMap.get('nombre')!;
    this.documentoIdentidad = this.route.snapshot.paramMap.get('documentoIdentidad')!;
    this.estadoCivil = this.route.snapshot.paramMap.get('estadoCivil')!;
    this.direccion = this.route.snapshot.paramMap.get('direccion')!;
   // const fechaMod = await this.fechaModificada(String(this.route.snapshot.paramMap.get('fecha')));
    const fechaMod = await this.fechaModificada('2023-12-12');
    this.fecha = String(fechaMod);
  }

  async fechaModificada(fechain: string) {

  
    // Convertir la fecha en un objeto Date
    const fechaStr = new Date(fechain);
  
    // Obtener el nombre del mes en función del número del mes
    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    const nombreMes = meses[fechaStr.getMonth()];
  
    // Formatear la fecha como "12 de DICIEMBRE de 2023"
    const fechaFormateada = `${fechaStr.getDate()} de ${nombreMes} de ${fechaStr.getFullYear()}`;
  console.log('fchaaaaaaa:', fechaFormateada);
    return fechaFormateada;
  }
}
