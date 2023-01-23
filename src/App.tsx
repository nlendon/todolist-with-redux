import React from 'react';
import './styles/Main.scss';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";

function App() {

    return (
        <>
            <Header/>
            <CreateTodo/>
            <TodoList/>
            <Footer/>
        </>
    );
}

export default App;