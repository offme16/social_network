import { Field, reduxForm } from "redux-form"
import cla from "./Login.module.css"
import { requiredField } from "../../utilits/vlidators"
import { Input } from "../common/FormsControls"

const LoginForm = (props) =>{
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Login" name="login" component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field placeholder="Password"  name="password" component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field type={"checkbox"} name="remember" component={"input"}/> Remember me
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
        console.log(formData)
    }
    return <div className={cla.container}>
        <h1>Login</h1> 
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;