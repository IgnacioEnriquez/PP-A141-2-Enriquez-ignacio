import { inject, Injectable } from '@angular/core';
import { collection, doc, Firestore, getDocs, query, setDoc } from '@angular/fire/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  private _firestore = inject(Firestore);

  async traerProductos() {
    const chatsRef = collection(this._firestore, 'productos');
  
      const q = query(chatsRef);
  
      //const querySnapshot = await getDocs(q);   
  
      return q;    
  }

  async crearProducto(producto: Producto) {
    const prod = {
      codigo: producto.codigo,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      paisOrigen: producto.paisOrigen,
   
    };
    
    const querySnapshot = await getDocs(
      collection(this._firestore, 'productos')
    );

    const newResultRef = doc(collection(this._firestore, 'productos'));

    await setDoc(newResultRef, prod);
  }
}
