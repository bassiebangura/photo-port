import React from "react";

function Modal({ currentPhoto, onClose }) {
    return (
        <div>
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <h3 className="modalTitle">Photo Name</h3>
                    <img src={require(`../../assets/small/${currentPhoto.image}/${currentPhoto.index}.jpg`)} alt="current category" />
                    <p>
                        Photo Description
                    </p>
                    <button onClick={onClose}>Close Modal</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;