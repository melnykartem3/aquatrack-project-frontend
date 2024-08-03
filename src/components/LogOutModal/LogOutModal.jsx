import Modal from "../Modal/Modal";
import css from "./LogOutModal.module.css"
import clsx from "clsx";
import { useState } from "react";

const LogOutModal = ({modalIsOpen,closeModal}) => {
  // const modalClass  = clsx

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={()=>{closeModal()}}>
        <div>
                <h3>Log out</h3>
                <p >Do you really want to leave?</p>
            <div>
                <button>Log out</button>
                <button>Cancel</button>
            </div>
        </div>
    </Modal>
  )
};

export default LogOutModal;