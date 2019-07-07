import React from 'react';
import { Alert, Table } from 'react-bootstrap';

export class ChemicalDetailsSummaryTable extends React.Component  {

    renderRows = function() {
      if ( this.props.chemicalSummaryDetails == null  ) {
          return (<tr></tr>);
      } else if ( this.props.chemicalSummaryDetails instanceof Array ) {
        return this.props.chemicalSummaryDetails.map(element => {
          return <tr><td>{element.label}</td><td>{element.value.toString()}</td></tr>
        });
      } else {
        return (
          <tr><td><Alert variant="danger">Error during querying Chemicalize Pro (status {this.props.chemicalSummaryDetails.status}): {JSON.parse(this.props.chemicalSummaryDetails.message).message}</Alert></td></tr>
        )
      }
    }

    render() {
      return (
        <Table>
            { this.props.chemicalSummaryDetails instanceof Array ? <thead>
              <tr>
                <td>Chemical name</td>
                <td>{this.props.chemicalName}</td>
              </tr>
            </thead> : null }
            <tbody>
              {this.renderRows()}
            </tbody>
        </Table>
      );
    }
    
}