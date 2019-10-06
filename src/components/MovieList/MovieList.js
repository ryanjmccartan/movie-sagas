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

seeMovie = (id) => {
    this.props.history.push('/details/' + id);
    this.props.dispatch({type: 'FETCH_GENRE', payload: id});
    this.props.dispatch({type: 'SINGLE_MOVIE', payload: id})
  }


    render() {
        return(
            <>
            <p>List Page</p>
            {this.props.reduxState.movies.map((movieItem) => {
                return (<MovieItem key={movieItem.id} movieItem = {movieItem} seeMovie={this.seeMovie} />)
            })}
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putStateOnProps)(List);