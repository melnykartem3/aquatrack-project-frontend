import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import LogOutModal from "../LogOutModal/LogOutModal";
import { useState } from "react";

const UserBarPopover = ({ onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false)
  };

  return (
    <ul>
      <li>
        <button type="button"
            onClick={() => { console.log('Open setting modal'); onClose() }}>
          <CiSettings /> Settings
        </button>
      </li>
      <li>
        <button type="button"
          onClick={() => { console.log('Open logout modal'); openModal()}}>
          <FiLogOut /> Log out
        </button>
        <LogOutModal modalIsOpen={modalIsOpen} closeModal={closeModal}></LogOutModal>
      </li>
    </ul>
  );
};

export default UserBarPopover;