import { useRef, useState } from 'react';
import { FaAngleDown, FaAngleUp, FaUserCircle } from 'react-icons/fa';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import css from './UserBar.module.css';

const UserBar = ({ setOpenSetting, shortDisplayName, avatarURL }) => {
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
          <p className={css.nameParagraph}>{shortDisplayName}</p>
          {avatarURL ? (
            <img src={avatarURL} alt="User avatar" className={css.iconAvatar} />
          ) : (
            <FaUserCircle className={css.iconUser} />
          )}
          {isPopoverOpen ? (
            <FaAngleUp className={css.iconArrow} />
          ) : (
            <FaAngleDown className={css.iconArrow} />
          )}
        </div>
      </button>
      {isPopoverOpen && <UserBarPopover onClose={togglePopover} />}
    </div>
  );
};

export default UserBar;
