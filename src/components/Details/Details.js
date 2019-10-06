import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Details extends Component {
    render() {
        return(
            <div>
                <p>Details Page</p>
                {this.props.reduxState.movies.map(movie => {
                    if(movie.id == this.props.match.params.id){
                        return <div>
                            <p>{movie.description}</p>
                        </div>
                    }}
                )}
                <h3>Genres:</h3>
                {this.props.reduxState.genres.map(genre => {
                    if(genre.id = this.props.match.params.id){
                        return <div>
                        
                        <p>{genre.name}</p>
                        </div>
                    }}
                )}
                  
                <Link to="/"><button>Back to List</button></Link>
                <button>Edit</button>
            </div>
            
        )
    }
}

const putStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putStateOnProps)(Details);