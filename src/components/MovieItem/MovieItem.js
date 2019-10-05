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
            <>
            <p>{this.props.movieItem.title}</p>
            <img src={this.props.movieItem.poster}/>
            <p>{this.props.movieItem.description}</p>
            </>
        )
    }
}

export default connect()(List);