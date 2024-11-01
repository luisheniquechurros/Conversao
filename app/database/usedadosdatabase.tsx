import { useSQLiteContext } from "expo-sqlite";


export type Historico = {
    id: number;
    tipo:string;
    unidade_entrada:string;
    unidade_saida:string;
    valor_entrada: number;
    valor_saida: number;
   
};

export function usedadosdatabase(){
    const database = useSQLiteContext();

    

  
   
}