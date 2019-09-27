import React, {Component} from 'react'
import BookList from './book_list'
import BookDetails from './book_details'
export default class App extends Component{
    render(){
        return(
            <div>
                <p>React application begins</p>
                <BookList/>
                <BookDetails/>
                </div>
        )
    }
}