import { GoogleLogin } from '@react-oauth/google';
import css from './Google.Button.module.css'; 


const CustomGoogleButton = ({ onSuccess, onError }) => (
  
  <GoogleLogin
    onSuccess={onSuccess}
    onError={onError}
    render={(renderProps) => (
        
      <button
        className={css.customGoogleButton} 
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
      >
        <img 
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zmax.work%2Fgoogles-1-button-vote-as-you-search%2F&psig=AOvVaw2jCWPl3e5k3z-memnT-rTW&ust=1723640616805000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCO1e2D8ocDFQAAAAAdAAAAABAJ" 
          alt="Google" 
          className={css.googleIcon} 
        />
        Sign in with Google
      </button>
    )}
  />
);

export default CustomGoogleButton;
