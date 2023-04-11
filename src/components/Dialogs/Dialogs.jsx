import cla from './Dialogs.module.css';
const Dialogs =(props) =>{
    return(
        <div className={cla.dialogs}>
            <div className='dialogs-item'>
                <div className='dialog'>Овечка</div>
                <div className='dialog'>Избранное</div>
                <div className='dialog'>Пес</div>
                <div className='dialog'>Кот</div>
                <div className='messages'>
                    <div className='message'>Hi</div>
                    <div className='message'>w a u&</div>
                    <div className='message'>fun</div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;