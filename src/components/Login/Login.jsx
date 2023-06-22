import { Field, reduxForm } from "redux-form"
import cla from "./Login.module.css"
import { requiredField } from "../../utilits/vlidators"
import { Input } from "../common/FormsControls"
import { login } from "../../redux/auth-reducer"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
const LoginForm = (props) =>{
    return  <form onSubmit={props.handleSubmit}>
        <div className={cla.auth}>
            <div className={cla.auth__box}>
        <div >
            <Field  name={"email"} component={Input} validate={[requiredField]} />
        </div>
        <div>
            <Field  name={"password"} component={Input} type={"password"} validate={[requiredField]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"remember"} component={"input"}/> Remember me
        </div>
        </div>
        {props.error && <div className={cla.sumerror}>{props.error}</div>
        }
        <div>
            <button>Login</button>
        </div>
        </div>
        </form>
  }


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)



const Login = (props) =>{
    const onSubmit = (formData) => {
      props.login(formData.email , formData.password, formData.remember)
    }
    if (props.isAuth){
        return <Navigate to={"/profile"} />
    }
    return <div className={cla.container}>
        <h1>Login</h1>
        <div><p>Используйте, чтобы войти!<br/>Email: free@samuraijs.com <br/>
                Password: free</p></div> 
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);