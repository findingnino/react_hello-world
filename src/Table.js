import React, {Component} from 'react';

class Table extends Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Bird Lawyer</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Sheriff of Paddy's</td>                        
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Resident Psycho</td>                        
                    </tr>
                    <tr>
                        <td>Dee</td>
                        <td>Bird</td>                        
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;