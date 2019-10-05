import React, {Component} from 'react';
import {connect} from "react-redux";
import MovieItem from '../MovieItem/MovieItem';

class List extends Component {

componentDidMount() {
    this.getMovies();
}

getMovies = () => {
    this.props.dispatch({type: 'GET_MOVIES'});
}


    render() {
        return(
            <>
            <p>List Page</p>
            {this.props.reduxState.movies.map((movieItem) => {
                return (<MovieItem key={movieItem.id} movieItem = {movieItem} />)
            })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putStateOnProps)(List);