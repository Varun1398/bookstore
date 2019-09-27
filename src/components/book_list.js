import {connect} from 'react-redux'
import React, {Component} from 'react'
import {selectBook}from'../actions/index'
import {bindActionCreators} from 'redux'
class BookList extends Component{
  
  
  renderList(){
      return this.props.bk.map((book) =>{
          return (
              <li
              key={book.title}
              onClick={()=> this.props.sb(book)}
              className="list-group-item">
              {book.title}
              </li>
          )
      })
    }
  
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}

            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        bk: state.books
     }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({sb:selectBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)