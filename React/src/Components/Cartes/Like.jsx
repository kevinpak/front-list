import React, {useState} from "react"


const Like = ()=> {

    let [like, setLike] = useState(null)

    const handleClick = (event) => {
        event.preventDefault();
        setLike(like+1)
    }
    return (
        <div className="btn-group">             
            <button type="button" 
                    className="btn text-center btn-sm btn-outline-secondary"
                    onClick={handleClick}>
                {like}
            <i className={`fa fa-heart ${like && "text-primary"}`} aria-hidden="true"></i> 
            </button>
        </div>
    )
}

export default Like;