import { Inquilino } from './inquilino';
import { Linha } from './linha';
import { Localidade } from './localidade';


export class Secao{
    id: number;     
    linha_id: Linha;
    localidade1_id: Localidade;
    localidade2_id: Localidade;
    descricao: string;
    tipo: string;   
    principal: boolean;  
    tarifa: number;
    outros_valores: number;   
    informacoes: string;     
    inquilino_id: number;




}