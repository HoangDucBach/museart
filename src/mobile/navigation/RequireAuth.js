import SignIn from "../screens/auth/SignIn";

const RequireAuthentication = (protectedScreen, userToken) => {

    // This is a HOC()Higher Order Component).
    // It will be used to make sure protected screens are not accessible to anyone accept authenticated user.


    return (
        userToken == null ? SignIn : protectedScreen

    )
}

export default RequireAuthentication;