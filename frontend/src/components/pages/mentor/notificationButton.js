import React, {useState} from 'react';
import Badge from '@material-ui/core/Badge';
import {Modal} from "react-bootstrap";

function FloatingActionButtons() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
           <button onClick={handleShow} className="-translate-y-40 absolute bg-green-900 focus:outline-none h-12 m-4 outline-none right-0 rounded-full transform w-32">
                <Badge badgeContent={4} color="secondary">
                    <div className={'text-white'}>Notifications</div>
                </Badge>

            </button>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose} animation={false}>
                <div className="p-8">
                    <div className="bg-green-200 p-4 shadow-md text-lg w-full">
                        Notifications 1
                    </div>
                    <div className="flex justify-content-end py-2">
                        <button className="bg-green-700 hover:bg-green-900 hover:shadow-md px-3 py-2 rounded text-white"
                            onClick={handleClose}>Close</button>
                    </div>
                </div>


            </Modal>
        </>
    )
}

export default FloatingActionButtons;
