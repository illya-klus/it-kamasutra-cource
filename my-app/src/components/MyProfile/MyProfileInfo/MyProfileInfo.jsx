import baseImg from '../../../assets/image/download.png';
import classes from '../../Profile/ProfileData/ProfileInfo.module.css';

import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { updateStatusThunkCreator } from '../../../redux/myProfile-reducer';


const MyProfileInfoWithHooks = (props) => {
    
    let [isChanged, setIsChanged] = useState(false);
    let [status, setStatus] = useState(props.userProfilePage.status);

    useEffect( () => setStatus(props.userProfilePage.status), [props.status] );

    
    let onChange = () => {
        setIsChanged(true);
    }

    let onDisableChange = () => {
        setIsChanged(false);
        updateStatusThunkCreator(status);
    }

    let onInputChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    let el = 
        props.userProfilePage.lookingForAJob ? 
            props.userProfilePage.lookingForAJobDescription :
            "No description yet.";

    let contactsObj = props.userProfilePage.contacts;

    return (
        <div className = {classes.profileInfoWrapper}>
            <img 
                className = {classes.profilePhoto} 
                src={props.userProfilePage.photos.large ? props.userProfilePage.photos.large : baseImg} 
                alt=""
            />
            <div className={classes.userName}>
                {props.userProfilePage.fullName}
            </div>
            
            <div className={classes.description}>
                {
                    isChanged ? 
                        <div onBlur={onDisableChange}>
                            <input
                                onChange={onInputChange}
                                autoFocus = {true} 
                                type="text"
                                value={status}
                                className={classes.InputDescription}
                            />
                        </div>
                        :
                        <div onDoubleClick={onChange} >
                            {props.userProfilePage.status}
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


let mapStateToProps = (state) =>{
    return {
        userProfilePage : state.user,
    }
}


let MyProfileConteiner = connect(mapStateToProps, {updateStatusThunkCreator})(MyProfileInfoWithHooks);

export default MyProfileConteiner;





