import React from "react";
const ListPhoto = (props) => {
    const photo = props.img;
    return (
        <figure>
            <img className="img-fluid" src={photo} alt="photos"/>
        </figure>
    )
}
export default ListPhoto;