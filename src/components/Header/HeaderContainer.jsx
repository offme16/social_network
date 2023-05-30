import Headers from './Header';
import React from 'react';
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
             .then(response =>{
                if(this.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login);
                }
                this.props.SetUserProfile(response.data);
    });
}
    render(){
        return <Headers {...this.props}/>
    }
}
   
const mapStateToProps= (state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login, 
});


export default connect(mapStateToProps,{setUserData})(HeaderContainer);