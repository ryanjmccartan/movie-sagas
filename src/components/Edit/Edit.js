import React, {Component} from 'react';
import {connect} from 'react-redux';


class Edit extends Component {

state = {
    title: '',
    description: '',
    id: this.props.reduxState.singleMovie
}



handleChange = (event, movieDetails) => {
    this.setState({
        ...this.state,
        [movieDetails]: event.target.value
    })
}

saveEdit = (movie) => {
    this.props.dispatch({type: 'EDIT_MOVIE', payload: movie});
    this.props.history.push(`/details/${this.state.id}`);
}

cancel = (id) => {
    this.props.history.push(`/details/${this.state.id}`);
}


    render() {
        return(
            <div className="edit">
                <p>Edit Page</p>
                <input onChange={(event) => {this.handleChange(event, "title")}} type="text" placeholder="Change title"/>
                <br/>
                <br/>
                <textarea onChange={(event) => {this.handleChange(event, "description")}} placeholder="Change movie description"/>
                <br/>
                <button onClick={() => {this.saveEdit(this.state)}}>Save</button>
                <button onClick={() => {this.cancel()}}>Cancel</button>
                <p>{this.state.title}</p>
                <p>{this.state.description}</p>
                <p>{this.state.id}</p>

            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putStateOnProps)(Edit);