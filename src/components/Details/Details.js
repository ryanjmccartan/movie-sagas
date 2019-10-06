import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {


buttonFunction = (button) => {
    if (button === 'back'){
        this.props.history.push('/');
    }
    else if(button === 'edit'){
        this.props.history.push('/edit');
    }
}

    render() {
        return(
            <div>
                <p>Details</p>
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
                  
                <button onClick={() => this.buttonFunction('back')}>Back to List</button>
                <button onClick={() => this.buttonFunction('edit')}>Edit</button>
            </div>
            
        )
    }
}

const putStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putStateOnProps)(Details);