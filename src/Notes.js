import React from 'react';
import Folders from './Folders';

class Notes extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>hello</h1>
                </header>
                <main>
                    <ol>
                        {this.props.note}
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
//this.props.match.params.noteId

export default Notes;