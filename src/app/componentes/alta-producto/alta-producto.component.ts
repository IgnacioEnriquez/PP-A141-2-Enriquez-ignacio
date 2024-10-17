import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormAltaProductoComponent } from '../form-alta-producto/form-alta-producto.component';
import { ListadoPaisesComponent } from '../listado-paises/listado-paises.component';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [NavbarComponent,FormAltaProductoComponent,ListadoPaisesComponent],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {

  paisSeleccionado:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  tomarPaisSeleccionado(event: any) {
    this.paisSeleccionado = event;
  }

}
