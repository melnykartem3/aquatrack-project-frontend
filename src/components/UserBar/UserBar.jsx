import { useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useClickAway } from 'react-use';
import UserBarPopover from "../UserBarPopover/UserBarPopover";

const UserBar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const itemRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  useClickAway(itemRef, () => {
    setIsPopoverOpen(false);
  });

  return (
    <div ref={itemRef}>
      <button onClick={togglePopover}>
        <span>User</span>
        <div>
          <img
            alt="User Photo"
            src="#"
          />
        </div>
        {isPopoverOpen ? (<FaAngleUp/>) : (<FaAngleDown />)}
      </button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </div>
  );
};

export default UserBar;