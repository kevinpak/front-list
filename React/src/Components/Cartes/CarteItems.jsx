import React from "react"
import { useEffect } from "react"
import Agent from "./Agent";
import Details from "./Details";
import Like from "./Like";
import "./carts.css";


const CartItem = (props) => {
    
   
    return  (<div className="col-md-4" >
                <div className="card mb-4 shadow-sm">
                    <img src={props.attributes.img} style={{maxHeight:"200px"}}/>
                    <div className="card-body">
                        <Details {...props.attributes}/>
                        <div className="d-flex justify-content-between mt-3 align-items-center">
                        <Like/>
                        <Agent {...props.relationships}/>
                        </div>
                    </div>
                </div>
            </div>)
}

export default CartItem