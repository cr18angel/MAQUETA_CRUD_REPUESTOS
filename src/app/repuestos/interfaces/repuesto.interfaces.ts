import { Maquina } from "src/app/maquinas/interfaces/maquina.interface";

export interface Repuesto {

    id: string;  // Puede ser un número o una cadena dependiendo del contexto.
      Descripcion: string;
      GrupoArticulos: string;
      LineaRepuestos: string;
      StockTotal: number;
      StockActualizado: number;
      StockSantiago: number;
      StockAntofagasta: number;
      PrecioVentaNormal: string;
      Descuento: string;
      PrecioVentaIncluyeDescuento: string;
      Tramo: string;
      Crossover4500L: "SI" | "NO";  // Suponiendo que los valores solo pueden ser "SI" o "NO".
      Imagen?:        string;
    }
    




  
    export interface Relaciones {
      id: string;
      heroesId: number;
      repuestosId: number;
      heroes: Maquina;
      repuestos: Repuesto;
    }