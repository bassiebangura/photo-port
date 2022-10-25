import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import comPhoto from "../../assets/small/commercial/0.jpg";

function Gallery({ currentCategory }) {
    return (
        <section>
            <h1>{capitalizeFirstLetter("gallery")}</h1>
            <p>Description</p>
            <div className="flex-row">
                <img
                    src={comPhoto}
                    alt="Commercial Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;