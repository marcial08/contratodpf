import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  title = 'page-contrato';
  nombre: string = "";
  documentoIdentidad: string = "";
  estadoCivil: string = "";
  direccion: string = "";
  fecha: string = "";
  constructor(private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    this.nombre = this.route.snapshot.paramMap.get('nombre')!;
    this.documentoIdentidad = this.route.snapshot.paramMap.get('documentoIdentidad')!;
    this.estadoCivil = this.route.snapshot.paramMap.get('estadoCivil')!;
    this.direccion = this.route.snapshot.paramMap.get('direccion')!;
    this.fecha = this.route.snapshot.paramMap.get('fecha')!;

    const fechaMod = await this.fechaModificada(this.fecha);
    this.fecha = String(fechaMod);
  }

  async fechaModificada(fechain: string) {
    // Dividir la cadena de fecha en día, mes y año
    const partesFecha = fechain.split('-');
    const dia = parseInt(partesFecha[2]);
    const mes = parseInt(partesFecha[1]) - 1; // Restar 1 al mes, ya que en JavaScript los meses comienzan desde 0
    const año = parseInt(partesFecha[0]);
  
    // Crear el objeto Date con los valores correctos
    const fechaStr = new Date(año, mes, dia);
  
    // Obtener el nombre del mes en función del número del mes
    const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    const nombreMes = meses[fechaStr.getMonth()];
  
    // Formatear la fecha como "12 de DICIEMBRE de 2023"
    const fechaFormateada = `${fechaStr.getDate()} de ${nombreMes} de ${fechaStr.getFullYear()}`;
    return fechaFormateada;
  }
  
}
