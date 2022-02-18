import React from "react";
import Photo from "./Photo"

function PhotosList(props) {

    props.photos.map(photo => {
        return (
            <Photo key = {photo.id} photo = {photo}/>
        )
    })
    
}

export default PhotosList;