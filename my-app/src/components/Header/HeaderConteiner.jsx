import React from "react";
import Header from "./Header";

import { authThunk } from "../../redux/auth-reducer";
import {connect} from "react-redux";
import { setUserData } from "../../redux/auth-reducer";


class HeaderConteiner extends React.Component{
    componentDidMount(){
        this.props.auth();
    }


    render(){
        return <Header isAuth = {this.props.isAuth} login = {this.props.login}/>;
    }
}

 
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
}); 


export default connect(mapStateToProps, {setUserData, auth: authThunk,})(HeaderConteiner);