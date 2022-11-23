import React, {createContext, useState} from "react";
import {listaProdutos} from "../../Services/api"


export const ProvedorCarrinho = ({children: React.ReactNode}) => {
    const [listaDeEquipamentos, setListaDeEquipamentos] = useState<listaProdutos>([])
}