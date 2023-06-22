import cla from './People.module.css';
import React from 'react';
import userPgoto from '../../asses/images/usersimg.jpg';
import { NavLink } from 'react-router-dom';

let People = (props) => {
    let pageCount = Math.ceil(props.totalusersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <div className={cla.container}>
        {
            props.peoplelist.map(u => <div className={cla.block} key={u.id}>

                <div className={cla.ava__desp}>
                    <NavLink to={'/profile/' + u.id}>
                        <div className={cla.user__photo}>
                            <img src={u.photos.small != null ? u.photos.small : userPgoto} alt='f' />
                        </div>  </NavLink>
                    <div className={cla.name__status}>
                        <div>{u.name}</div>
                    </div>
                </div>
                <div>
                    <div>
                        {u.followed ? <button disabled={props.followingProgress} onClick={() => {
                            props.unfollow(u.id);}}>UNFOLLOW</button>
                            : <button disabled={props.followingProgress} onClick={() => {
                                props.follow(u.id);}}>FOLLOW</button>}</div>
                </div>
            </div>)
            
        }
         <div className={cla.butnum}>
            {pages.map(p => {
                return <span onClick={(e) => props.onPageChanged(p)} className={props.currentPage === p && cla.selectedPage}>{p}</span>

            })}
        </div>
    </div>
}

export default People;