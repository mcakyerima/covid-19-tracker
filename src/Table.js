import React from 'react'
import './Table.css';
import {Card, CardContent} from "@material-ui/core"

function Table({ countries }) {
    return (
        <div className="table">
            {countries.map(({country , cases}) => (
                <tr>
                    <td>{country}</td>
                    <td><strong>{cases}</strong></td>
                </tr>
            ))}

            
        </div>
    )
}

export default Table
