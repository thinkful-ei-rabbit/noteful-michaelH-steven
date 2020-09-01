import React from 'react';

class Main extends React.Component {
    renderNotes = () => {
        return this.props.notes.map((note) => <li key={note.id}>{note.name}{note.modified}</li>)
    }

    render() {
        console.log(this.props.notes)
        return (
            <div>
                <header>
                    <h1>Noteful</h1>
                </header>
                <main>
                    <ol>
                        {this.props.folders.map((folder) => <li key={folder.id}><a href={`/Folders/${folder.id}`}>{folder.name}</a></li>)}
                    </ol>
                </main>
                <div className ='sidebar'>
                    <ul>
                        {this.renderNotes()}
                    </ul>
                </div>
            </div>
        );
    };
};


export default Main;