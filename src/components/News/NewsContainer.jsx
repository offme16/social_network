import { connect } from 'react-redux';
import { PostNews, PostNewsText } from '../../redux/news-reducer';
import News from './News'

let mapStateToProps = (state) =>{
    return{
        newsdata: state.NewsPage.NewsData,
        NewNewsText: state.NewsPage.NewNewsText,
    }
};

/*let mapDispatchToProps = (dispatch)=>{
    return{
        PostNews:()=>{
            dispatch(addNewsactionCreator());
        },
        PostNewsText:(Text)=>{
            dispatch(updateNewNewsCreator(Text));
        }
    }
};*/

const NewsContainer = connect(mapStateToProps,{ PostNews, PostNewsText})(News);

export default NewsContainer;