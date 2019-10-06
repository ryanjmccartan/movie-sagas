import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

class Details extends Component {
    render() {
        return(
            <Router>
                <p>Details Page</p>
                <Link to="/"><button>Back to List</button></Link>
                <button>Edit</button>
            </Router>
        )
    }
}

export default Details;