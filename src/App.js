import React, {Component} from 'react';
import Table from './Table.js';
import Form from './Form.js';

class App extends Component {

    state = {
        characters: []
    }

    removeCharacter = index => {
        const {characters}= this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        })
    }

    render() {

        const {characters} = this.state;

        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData = {characters} removeCharacter={this.removeCharacter}/>
                <Form />
            </div>
        )
    }
}

export default App;