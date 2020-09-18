import React from 'react'

const Details = (props) => {
    return (
        <>
            <a href="/" className="boottom-border">
                <p>{ props.title }</p>
            </a>
            <hr/>
            <span className="text-primary">Очки форты</span>

            <p className="card-text m-0">
                <i class="fa fa-home" aria-hidden="true"></i>
               <span className="ml-2">
               {`${props.rooms} комнаты`}
               </span>
            </p>

            <p className="card-text m-0">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
               <span className="ml-2">
               {` ${props.address.city} ${props.address.street}  ${props.address.house} ${props.address.room}`}
               </span>
            </p>

            <p className="card-text m-0">
                <i class="fa fa-area-chart" aria-hidden="true"></i> 
                <span className="ml-2">{ props.area}</span>
            </p>
            <div className="d-flex justify-content-between align-items-center"></div>
        </>
    )
}

export default Details;