import React, { useEffect, useState } from 'react';

export const ProfileStatusHook = (props)=> {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);
    const activateEditMode = () => {
      setEditMode(true);
    }

    const deactivateEditMode = () => {
       setEditMode(false);
       props.updateUserStatus(status);
    }

    const onChangeText = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return(
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }

             {editMode &&
                 <div>
                    <input onChange={onChangeText} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
                </div>
             }
        </div>
    )
}
export default ProfileStatusHook;