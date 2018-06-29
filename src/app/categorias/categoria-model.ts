import { Inativo } from "../shared/utils/inativo.enum";

export interface CategoriaModel {
    codigo:string;
    nome:string;
    Inativo:Inativo;
}