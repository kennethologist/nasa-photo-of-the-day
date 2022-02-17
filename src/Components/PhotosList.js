import React from "react";
import Photo from "./Photo"

function PhotosList(props) {
    return (
        <Photo key = {props.id}/>
    )
}

export default PhotosList;