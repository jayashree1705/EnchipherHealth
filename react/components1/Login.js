function Login({isLoggedIn}){   
    return(
    <h1>
        {isLoggedIn?"welcome":"please login"}
    </h1>
    )
}
export default Login;