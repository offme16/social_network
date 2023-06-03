import cla from './Profileinfo.module.css';
import Preloader from '../../common/Preloader'
import React from 'react';

class ProfileStatus extends React.Component {

    
    state = {
        editMode: false,
        status: this.props.status,
    } 

    activateEditMode= ()=> {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode =()=> {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    onChangeText = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render(){
        return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }

             {this.state.editMode &&
                 <div>
                    <input onChange={this.onChangeText} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
             }
        </div>
    )}
   
}
export default ProfileStatus;