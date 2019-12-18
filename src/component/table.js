import React, { Component } from 'react'
class table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tablevalues: [
                { fename: 'daarun shaikh', del: "34", undel: "27", na: 0, deliverin: "97%" },
                { fename: "Daha Mosin", del: "34", undel: "27", na: 0, deliverin: "86%" },
                { fename: "Dahana gaitonde", del: "34", undel: "27", na: 0, deliverin: "78%" },
                { fename: "Ganesh Gaitonde", del: "34", undel: "27", na: 0, deliverin: "74%" },
                { fename: "Johny Smith", del: "34", undel: "27", na: 0, deliverin: "72%" },
                { fename: "Falcon Mouli", del: "34", undel: "27", na: 0, deliverin: "70%" }]
        }
    }
    renderTableData() {
        return this.state.tablevalues.map((tablevalue, index) => {
            const { id,fename, del, undel, na, deliverin } = tablevalue //destructuring
            return (
                <tr key={id}>
                    <td>{fename}</td>
                    <td>{del}</td>
                    <td>{undel}</td>
                    <td>{na}</td>
                    <td><span>{deliverin}</span>
                        <div className="progressBarBackground">
                            <div className="progressBarStatus" style={{ width: deliverin }}></div>
                        </div>
                    </td>
                </tr>

            )
        })
    }
    render() {
        return (
            <div>
                <h4 className="menuHeader">FE Perfomance</h4>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "30rem" }}>FE NAME</th>
                            <th>DEL</th>
                            <th>UNDEL</th>
                            <th>NA</th>
                            <th>DELIVERY IN %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default table
