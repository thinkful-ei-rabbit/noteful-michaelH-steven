import React from 'react';
import Notes from './Notes';

class Folders extends React.Component {
   

    render() {
        console.log(this.props.match.params.folderId)
        return (
            <div>
                <header>
                    <h1>hello</h1>
                </header>
                <main>
                    <ol>
                        {/* {Notes} */}
                    </ol>
                </main>
                <sidebar>
                    <ul>
                        
                    </ul>
                </sidebar>
            </div>
        );
    };
};
//this.props.match.params.folderId

export default Folders;