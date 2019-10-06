import React, {Component} from 'react';
import {connect} from "react-redux";
import {HashRouter as Router, Link} from 'react-router-dom';


class List extends Component {
    
componentDidMount() {
    this.getMovies();
}

getMovies = () => {
    this.props.dispatch({type: 'GET_MOVIES'});
}


    render() {
        return(
            <Router>
                <p>{this.props.movieItem.title}</p>
                <Link to="/details"><button><img src={this.props.movieItem.poster}/></button></Link>
                <p>{this.props.movieItem.description}</p>
            </Router>
        )
    }
}

export default connect()(List);