type school = 
  'Medicina' | 
  'Enfermería' | 
  'Psicología' | 
  'Kinesiología' | 
  'Obstetricia y Neonatología' | 
  'Odontología' | 
  'Tecnología Médica';

type type = 'Vídeo' | 'Documento' | 'Normativa';

export interface I_ACCIDENTE {
  id: string,
  name: string,
  file: string,
  schools?: Array<school> | school
}

export interface I_CONTACTO {
  id: string,
  name: string,
  number: string,
  schools?: Array<school> | school
}

interface I_COORDINATES {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number
}

export interface I_DIRECCION {
  id: string,
  name: string,
  coordinates: I_COORDINATES,
  address: string,
  schools?: Array<school> | school
}

export interface I_EMERGENCIA {
  id: string,
  number: string,
  schools?: Array<school> | school
}

export interface I_INSTRUCTIVO {
  id: string,
  name: string,
  type: type,
  file: string,
  schools?: Array<school> | school
}

export interface I_DATA {
  accidentes: Array<I_ACCIDENTE>,
  contactos: Array<I_CONTACTO>,
  direcciones: Array<I_DIRECCION>,
  emergencias: Array<I_EMERGENCIA>,
  instructivos: Array<I_INSTRUCTIVO>
}