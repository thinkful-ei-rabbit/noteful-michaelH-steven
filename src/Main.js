import React from 'react';
import Notes from './Notes';
import Folders from './Folders';

class Main extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>hello</h1>
                </header>
                <main>
                    <ol>
                        {Notes}
                    </ol>
                </main>
                <sidebar>
                    <ul>
                        {Folders}
                    </ul>
                </sidebar>
            </div>
        );
    };
};

export default Main;