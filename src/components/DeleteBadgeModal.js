import React from 'react';
import Modal from './Modal';

const DeleteBadgeModal = (props) => {
    return ( 
        <Modal 
            isOpen={props.isOpen}
            onClose={props.onClose}
        > 
            <div className="DeleteBadgeModal">
                <h1>¿Estas seguro?</h1>
                <p>Estas apunto de borrar este badge</p>

                <div>
                    <button
                        className="btn btn-danger mr-4"
                        onClick={props.onDeleteBadge}
                    >
                        Borrar
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={props.onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </Modal>
     );
}
 
export default DeleteBadgeModal;