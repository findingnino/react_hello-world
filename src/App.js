import React, {Component} from 'react';
import Table from './Table.js';

class App extends Component {
    render() {

        const characters = [
            {
                name: 'Charlie',
                job: 'Bird Lawyer',
            },
            {
                name: 'Mac',
                job: "Sheriff of Paddy's"
            },
            {
                name: 'Dee',
                job: "Bird Actor"
            },
            {
                name: 'Dennis',
                job: 'Resident Psycho'
            }
        ]

        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData = {characters}/>
            </div>
        )
    }
}

export default App;