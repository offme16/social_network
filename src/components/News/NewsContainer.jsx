import { connect } from 'react-redux';
import { PostNews, PostNewsText } from '../../redux/news-reducer';
import News from './News'

let mapStateToProps = (state) =>{
    return{
        newsdata: state.NewsPage.NewsData,
        NewNewsText: state.NewsPage.NewNewsText,
        isAuth: state.auth.isAuth,
    }
};


const NewsContainer = connect(mapStateToProps,{ PostNews, PostNewsText})(News);

export default NewsContainer;