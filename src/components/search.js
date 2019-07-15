import React from 'react'

class Search extends React.Component {
    state = {
        value: ''
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.history.push(`/${this.state.value}`)
    }
    render() {
        return (
            <div className="container input-group mb-3 center home " style={{ width: '360px', left: '100px', top: '200px' }}>
                <input type="text" className="form-control" placeholder="Enter car model" onChange={(e) => { this.setState({ value: e.target.value }) }} aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.handleClick} type="button">Button</button>
                </div>
            </div>
        )
    }
}
export default Search