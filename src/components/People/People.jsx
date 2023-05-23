import cla from './People.module.css';
import React from 'react';
let People = (props) => {

    return <div className={cla.container}>
        {
 
            props.peoplelist.map(u=><div key={u.id}>
                <div className={cla.block}>
                    <div className={cla.user__photo}>
                    <img src={u.avauser} />
                    </div>
                    <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                   <div>{u.followed ?  <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                   : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}</div> 
               
                </div>
                </div>
                
            </div>)
        }
    </div>
};

export default People;