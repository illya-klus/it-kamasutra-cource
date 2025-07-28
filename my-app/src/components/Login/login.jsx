import classes from './Login.module.css';


const Login = (props) => {
    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.loginHeader}>Login</h1>
            <LoginForm/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form >
            <div>
                <input placeholder='Login'/>
            </div>
            <div>
                <input placeholder='Password'/>
            </div>
            <div>
                <input type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login;