import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {ChemicalDetailsSummarySearchForm} from './components/ChemicalDetailsSummarySearchForm';
import {ChemicalDetailsSummaryTable} from './components/ChemicalDetailsSummaryTable';
import {MarvinBox} from './components/MarvinBoxComponent';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chemicalName: null,
      chemicalDetailsSummary : null
    };
  }

 chemicalSummaryDetailsChangeHandler = (summaryData) => {
    this.setState({
      chemicalDetailsSummary: summaryData
    })
  }

  chemicalNameChangeHandler = (changedName) => {
    this.setState({
      chemicalName: changedName
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">Csanyi Tamas - ChemAxon test</header>
        <Container className="searchFormContent">
          <Row>
            <Col xs>
              <h3>Chemical details summary searcher</h3>
            </Col>
          </Row>
          <Row>
            <Col xs><section><ChemicalDetailsSummarySearchForm chemicalSummaryDetails={this.state.chemicalDetailsSummary} onChemicalSummaryDetailsChange={this.chemicalSummaryDetailsChangeHandler} onChemicalNameChange={this.chemicalNameChangeHandler}></ChemicalDetailsSummarySearchForm></section></Col>
            <Col xs><section><section className="resultTable"> { this.state.chemicalDetailsSummary ? <ChemicalDetailsSummaryTable chemicalName={String(this.state.chemicalName).toString()} chemicalSummaryDetails={this.state.chemicalDetailsSummary}></ChemicalDetailsSummaryTable> : null }</section></section></Col>
          </Row>
          <Row>
            <Col xs><section><MarvinBox chemicalName={this.state.chemicalName}></MarvinBox></section></Col>
          </Row>
        </Container>
      </div>
    );
  }

}