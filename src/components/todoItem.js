import React, { Component } from 'react'

const itemStyles = {
    backgroundColor: "gray",
    border: "solid, black"
}

export class todoItem extends Component {

    render() {
        return (
            <div style = {itemStyles}>
                <br/>
                <input type="checkbox"/> {' '}
                {this.props.todo.title}
            </div>
        )
    }

}

export default todoItem
