import React from 'react';

const Header = ({props}: any) => {
    return (
        <>
            <header>
                <a href={'https://github.com/nlendon'}>My GitHub</a>
                <a href={'https://instagram.com/vahhe._'}>My Instagram</a>
                <div>My First Todo List with React TS & Redux</div>
                <a href={'https://github.com/nlendon?tab=repositories'}>My Projects</a>
                <a href={'/'} download={true}>My CV</a>
            </header>
        </>
    );
}

export default Header;