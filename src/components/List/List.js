import React, {Component} from 'react';

class List extends Component {

componentDidMount() {
    this.getMovies();
}

getMovies = () => {
    console.log('in getMovies');
}


    render() {
        return(
            <p>List Page</p>
        )
    }
}

export default List;