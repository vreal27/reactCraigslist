import React, { Component } from 'react' 
import { createPost } from '../actions/categories'


class Create extends Component {
    state = {
        name: '',
        id: this.props.match.params.id,
        cover_photo: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        createPost({
            name: this.state.name,
            cover_photo: this.state.cover_photo,
            id: this.props.match.params.id
        }).then(()=> {
            this.props.history.goBack()
        })

    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input type="text" name="name" onChange={this.handleChange} placeholder="Name of Post" value={this.state.name}/>
                    </p>
                    <p>
                        <input type="text" name="cover_photo" onChange={this.handleChange} placeholder="Add an Image" value={this.state.cover_photo}/>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default Create 