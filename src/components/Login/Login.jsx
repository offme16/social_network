import { Field, reduxForm } from "redux-form"
import cla from "./Login.module.css"
import { requiredField } from "../../utilits/vlidators"
import { Input } from "../common/FormsControls"
import { login } from "../../redux/auth-reducer"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
const LoginForm = (props) =>{
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field placeholder="Password"  name={"password"} component={Input} type={"password"} validate={[requiredField]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"remember"} component={"input"}/> Remember me
        </div>
        <div>
            <button>Login</button>
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
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);