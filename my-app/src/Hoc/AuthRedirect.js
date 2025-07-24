import {Navigate} from "react-router-dom";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth,};
}



export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) =>{
        if(props.isAuth == false) return <Navigate to="/login" />;
        return <Component {...props}/>
    }
    
    return connect(mapStateToProps)(RedirectComponent) ;
}





