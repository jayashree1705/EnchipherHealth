function Login({isLoggedIn}){
  
    if(isLoggedIn){
        return (
            <p>
                true
            </p>
        )
    }else{
        return(
            <p>
                false
            </p>
        )
    }
 }
  export default Login;
