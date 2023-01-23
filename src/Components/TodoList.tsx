import React from 'react';

const TodoList = ({props}: any) => {

    if(props) {
        return (
            <>
                <div></div>
            </>
        );
    } else {
        return (
            <div>No TODOS evenly</div>
        )
    }
}

export default TodoList;