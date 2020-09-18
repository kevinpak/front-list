import React from "react";
import data from "../../api/entity.json";
import CarteItems from "./CarteItems";

const Cartes = (props) => {

    const datas = data.response;
  
    return (
        <React.Fragment>
           { datas.map(cart => <CarteItems key={cart.id} {...cart}/> )}
        </React.Fragment>
    )
}

export default Cartes;