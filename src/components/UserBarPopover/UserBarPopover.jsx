import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";

const UserBarPopover = ({ onClose }) => {
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
          onClick={() => { console.log('Open logout modal'); onClose()}}>
          <FiLogOut /> Log out
        </button>
      </li>
    </ul>
  );
};

export default UserBarPopover;