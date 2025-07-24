import baseImg from '../../../assets/image/download.png';
import classes from '../../Profile/ProfileData/ProfileInfo.module.css';

import { connect } from 'react-redux';
import React from 'react';
import { updateStatus, updateStatusThunkCreator } from '../../../redux/myProfile-reducer';


class MyProfileInfo extends React.Component  {
    
    state = {
        isChange : false,
        status : this.props.userProfilePage.status,
    }
    
    onChange () {
        this.setState({
            isChange: true,
        })
    }

    onDisableChange () {
        this.setState({
            isChange: false,
        });
        this.props.updateStatusThunkCreator(this.state.status)

    }

    onInputChange (e) {
        this.setState({status : e.currentTarget.value});
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.status){
            this.setState({state : this.status });
        }
    }

    render(){
        let el = 
        this.props.userProfilePage.lookingForAJob ? 
            this.props.userProfilePage.lookingForAJobDescription :
            "No description yet.";

        let contactsObj = this.props.userProfilePage.contacts;
    
        return (
            <div className = {classes.profileInfoWrapper}>
                <img 
                    className = {classes.profilePhoto} 
                    src={this.props.userProfilePage.photos.large ? this.props.userProfilePage.photos.large : baseImg} 
                    alt=""
                />
                <div className={classes.userName}>
                    {this.props.userProfilePage.fullName}
                </div>
                

                <div className={classes.description}>
                    {
                        this.state.isChange ? 
                            <div onBlur={this.onDisableChange.bind(this)}>
                                <input
                                    onChange={this.onInputChange.bind(this)}
                                    autoFocus = {true} 
                                    type="text"
                                    value={this.state.status}
                                    className={classes.InputDescription}
                                />
                            </div>
                            :
                            <div onDoubleClick={this.onChange.bind(this)} >
                                {this.props.userProfilePage.status}
                            </div>
                    }
                    
                    <h4>About Work</h4>
                    <div className={classes.descriptionText}>
                        {el}
                    </div>
                </div>
    
                <div className={classes.contactList}>
                    {Object.keys(contactsObj).map( key => {
                        if(contactsObj[key] != null){
                            return <a 
                                href = {`https://${contactsObj[key]}`} 
                                className={classes.contact}
                                target="_blank"
                            > 
                            {key}
                            </a>
                        }
                    } )}
                </div>
    
            </div>
        );
    }
    
}


let mapStateToProps = (state) =>{
    return {
        userProfilePage : state.user,
    }
}


let MyProfileConteiner = connect(mapStateToProps, {updateStatus, updateStatusThunkCreator})(MyProfileInfo);

export default MyProfileConteiner;





