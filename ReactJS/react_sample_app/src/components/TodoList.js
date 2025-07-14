import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TodoList = () => {
    return (
        <React.Fragment>
            <Header />
            <section className='content'>
                <h1>Todo List</h1>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default TodoList