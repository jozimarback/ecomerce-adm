import { Inativo } from "../shared/utils/inativo.enum";

export class CategoriaModel {
    id:number;
    codigo:string;
    nome:string;
    status:Inativo;
}