import Header from './Header';
import React from 'react';
import { setUserData } from '../../redux/auth-reducer';
import axios from 'axios';
import { connect } from 'react-redux';
class HeaderContainer extends React.Component{
    componentDidMount(){

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
             .then(response =>{
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email);
                
                
    });

    
}
    render(){
        return <Header {...this.props}/>
    }
}
   
let mapStateToProps= (state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login, 
});


export default connect(mapStateToProps,{setUserData})(HeaderContainer);