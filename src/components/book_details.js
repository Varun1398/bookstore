import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetails extends Component {
    render() {
        if (!this.props.bk) {
            return <div>Select a Book to get started</div>
        }
        return (
            <div>
                <h3>Book Details are </h3>
                <div>Title: {this.props.pk.title}</div>
                <div>Pages: {this.props.pk.pages}</div>
                <div>Author: {this.props.pk.author}</div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bk: state.activeBook
    }

}

export default connect(mapStateToProps)(BookDetails)