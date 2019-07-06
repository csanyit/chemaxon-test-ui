import React from 'react';
import { Table } from 'react-bootstrap';

export class ChemicalDetailsSummaryTable extends React.Component  {

    renderRows = function() {
      if ( this.props.chemicalSummaryDetails == null  ) {
          return (<tr></tr>);
      }
      return this.props.chemicalSummaryDetails.map(element => {
        return <tr><td>{element.label}</td><td>{element.value.toString()}</td></tr>
      });
    }

    render() {
      return (
        <Table xs>
            <thead>
              <tr>
                <td>Chemical name</td>
                <td>{this.props.chemicalName}</td>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
        </Table>
      );
    }
    
}