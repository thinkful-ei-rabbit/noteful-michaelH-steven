import React from 'react';

class Notes extends React.Component {
    renderNotes = () => {
        return this.props.notes.map((note)=> <li key={note.id}>{note.name}</li>)
    } 

    render() {
        return (
            <div>
                <header>
                    <h1>hello</h1>
                </header>
                <main>
                    <ol>
                        {this.renderNotes()}
                    </ol>
                </main>
                <sidebar>
                    <ul>
                        {'these are notes'}
                    </ul>
                </sidebar>
            </div>
        );
    };
};
//this.props.match.params.noteId

export default Notes;