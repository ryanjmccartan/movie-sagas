import React, {Component} from 'react';
import {connect} from "react-redux";


class List extends Component {
    
componentDidMount() {
    this.getMovies();
}

getMovies = () => {
    this.props.dispatch({type: 'GET_MOVIES'});
}


    render() {
        return(
            <div>
                <p>{this.props.movieItem.title}</p>
                <button onClick= {() => this.props.seeMovie(this.props.movieItem.id)}><img src={this.props.movieItem.poster} alt="movie poster"/></button>
            </div>
        )
    }
}

export default connect()(List);