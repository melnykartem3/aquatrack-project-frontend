import { useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp, FaUserCircle } from 'react-icons/fa';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import css from './UserBar.module.css';

const UserBar = ({ setOpenSetting }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const itemRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
    setOpenSetting(!isPopoverOpen);
  };

  return (
    <div className={css.userBarWrapper} ref={itemRef}>
      <button className={css.userBarButton} onClick={togglePopover}>
        <div className={css.btnWrapper}>
          <p className={css.nameParagraph}>User</p>
          <FaUserCircle className={css.iconUser} />
          {isPopoverOpen ? (
            <FaAngleDown className={css.iconArrow} />
          ) : (
            <FaAngleUp className={css.iconArrow} />
          )}
        </div>
      </button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </div>
  );
};

export default UserBar;
