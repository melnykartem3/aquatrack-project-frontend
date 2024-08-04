import { Helmet } from "react-helmet-async"
import { Link } from 'react-router-dom';
import Logo from "../../components/Logo/Logo"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

import css from "./SignUpPage.module.css"

const SignUpPage = () => {
  
  return (<>
  <Helmet>
          <title>SignUp Page</title>
    </Helmet>
    <div className={css.container}><div className={css.leftWrapper}>
      <Logo />
      <h2 className={css.title}>Sign Up</h2>
      <SignUpForm />
     <div className={css.textWrapper}>
            <span className={css.alreadyHaveAccount}>Already have an account? </span>
            <Link to="/signin" className={css.signInLink}>Sign In</Link>
          </div>
    </div>
      <div className={css.rightWrapper}></div>
    </div>
     
  </>
    
  )
}

export default SignUpPage


