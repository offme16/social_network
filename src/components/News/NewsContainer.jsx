import { connect } from 'react-redux';
import { PostNews, PostNewsText } from '../../redux/news-reducer';
import News from './News'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) =>{
    return{
        newsdata: state.NewsPage.NewsData,
        NewNewsText: state.NewsPage.NewNewsText,
    }
};

export default compose(
    connect(mapStateToProps,{ PostNews, PostNewsText}),
    withAuthRedirect
)((News))