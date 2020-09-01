import React from 'react';
import './index.css';

class Folders extends React.Component {
    renderFolder = () => {
        let folders = this.props.folders.filter((folder) => {
            return folder.id !== this.props.match.params.folderId
        });
        return folders.map((folder) => <li key={folder.id}><a href={`/Folders/${folder.id}`}>{folder.name}</a></li>)
    };

    renderPrimeFolder = () => {
        let prime = this.props.folders.filter((folder) => {
            return folder.id === this.props.match.params.folderId
        });
        return prime.map((folder) => <li key={folder.id}><a href={`/Folders/${folder.id}`}>{folder.name}</a></li>)
    };

    renderNotes = () => {
        let currentNotes = this.props.notes.filter((note) => {
            return note.folderId === this.props.match.params.folderId
        });
        return currentNotes.map((note) => <li key={note.id}>{note.name}{note.modified}</li>);
    };

    render() {
        console.log(this.props.match.params.folderId)
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
                <div className='sidebar'>
                    <ul>
                        {this.renderFolder()}
                        <p>{this.renderPrimeFolder()}</p>
                    </ul>
                </div>
            </div>
        );
    };
};
//this.props.match.params.folderId

export default Folders;