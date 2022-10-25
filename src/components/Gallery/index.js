import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import comPhoto from "../../assets/small/commercial/0.jpg";
import PhotoList from "../photolist"

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            {/* <img
                src={comPhoto}
                alt="Commercial Example"
                className="img-thumbnail mx-1"
            /> */}
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList currentCategory={currentCategory} />
        </section>
    );
}

export default Gallery;