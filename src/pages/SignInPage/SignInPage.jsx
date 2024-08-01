import { Helmet } from "react-helmet-async"
import Logo from "../../components/Logo/Logo"
import SignInForm from "../../components/SignInForm/SignInForm"

const SignInPage = () => {
  
  return (<>
  <Helmet>
          <title>SignIn Page</title>
  </Helmet>
      <Logo />
      <SignInForm/>
  </>
    
  )
}

export default SignInPage