import { I_INSTRUCTIVO } from "../ts";

const INSTRUCTIVOS: Array<I_INSTRUCTIVO> = [
  {
    "id": "0",
    "name": "Centro de Simulación Clínica UDP",
    "type": "Vídeo",
    "file": "centroUDP",
    "schools": "Kinesiología"
  },
  {
    "id": "1",
    "name": "Documento 1",
    "type": "Documento" ,
    "file": "first",
    "schools": ["Medicina","Psicología"] 
  },
  {
    "id": "2",
    "name": "Documento 2",
    "type": "Documento",
    "file": "second",
    "schools": ["Obstetricia y Neonatología"]
  },
  {
    "id": "3",
    "name": "Documento 3",
    "file": "third",
    "type": "Documento"
  }
]

export default INSTRUCTIVOS;