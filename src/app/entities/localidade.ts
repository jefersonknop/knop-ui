import { Inquilino } from './inquilino';
import { Cidade } from './cidade';

export class Localidade{
    id: number;  
    nome: string;
    tipo: string;   
    cidade_id: Cidade;
    latitude: string;
    longitude: string;   
    informacoes: string;   
    inquilino_id: number;


  



}