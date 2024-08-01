import { Helmet } from "react-helmet-async"
import Logo from "../../components/Logo/Logo"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

const SignUpPage = () => {
  
  return (<>
  <Helmet>
          <title>SignUp Page</title>
  </Helmet>
      <Logo />
      <SignUpForm/>
  </>
    
  )
}

export default SignUpPage