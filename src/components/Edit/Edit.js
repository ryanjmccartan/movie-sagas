import React, {Component} from 'react';
import {connect} from 'react-redux';


class Edit extends Component {

state = {
    title: null,
    description: null
}

handleChange = (event, movieDetails) => {
    this.setState({
        ...this.state,
        [movieDetails]: event.target.value
    })
}


    render() {
        return(
            <div className="edit">
                <p>Edit Page</p>
                <input onChange={(event) => {this.handleChange(event, "title")}} type="text" placeholder="Change title"/>
                <textarea onChange={(event) => {this.handleChange(event, "description")}} placeholder="Change movie description"/>
                <p>{this.state.title}</p>
                <p>{this.state.description}</p>

            </div>
        )
    }
}

export default connect()(Edit);