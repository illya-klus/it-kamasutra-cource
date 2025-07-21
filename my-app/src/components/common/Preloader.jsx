import classes from './Preloader.module.css';
import loadSrc from '../../assets/image/Spinner@1x-1.0s-199px-199px.svg';



let Preloader = (props) => {
    return (
        <img className={classes.loadImg} src={loadSrc}/>
    );
}


export default Preloader;