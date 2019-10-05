import React, {Component} from 'react';
import axios from 'axios';

class List extends Component {

state = {
    movies: []
}

componentDidMount() {
    this.getMovies();
}

getMovies = () => {
    console.log('in getMovies');
    axios.get('/movies').then((response) => {
        this.setState({movies: response.data})
        console.log(this.state.movies);
    }).catch((error) => {
        console.log("Error with GET", error);
    })
}


    render() {
        return(
            <>
            <p>List Page</p>
            <p>{JSON.stringify(this.state.movies)}</p>
            </>
        )
    }
}

export default List;