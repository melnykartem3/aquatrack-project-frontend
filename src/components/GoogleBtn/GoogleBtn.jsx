import { FcGoogle } from 'react-icons/fc';
import  Button  from './Button.jsx';
import { getGooglOAuthUrl } from './getGooglOAuthUrl.js';

import css from './GoogleBtn.module.css';

const GoogleBtn = ({ children }) => {
  return (
    <Button className={css.googleBtn} onClick={getGooglOAuthUrl}>
      <FcGoogle className={css.iconGoogle} />
      {children}
    </Button>
  );
};

export default GoogleBtn;