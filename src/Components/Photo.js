import React from "react"

function Photo (props) {
    return (
        <div>
            <img src={props.img} alt ={props.alt} />
            <div>
                <label>Date</label>
                <span>{props.date}</span>
            </div>
            
            <div>
                <label>Author</label>
                <span>{props.author}</span>
            </div>

            <div>
                <label>Description</label>
                <span>{props.description}</span>
            </div>
            
        </div>
    )
}

export default Photo;