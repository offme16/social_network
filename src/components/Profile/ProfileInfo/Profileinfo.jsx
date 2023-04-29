import cla from './Profileinfo.module.css';

const Profileinfo = () => {
    return(
        <div className={cla.ANB}>
         <img className={cla.profimg} src="https://zastavok.net/main/raznoe/168070560590.jpg" alt='f'/>
         <div className={cla.avatar}> <img src="https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png" alt='d'/></div>
         <div className={cla.discr}>Name:Denny<br/> Age: 17 <br/> City: Kazan</div>
        </div>
    );
}
export default Profileinfo;