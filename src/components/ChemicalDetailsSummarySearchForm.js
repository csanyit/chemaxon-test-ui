import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import {RESTAPIService} from '../service/RESTAPIService';

export class ChemicalDetailsSummarySearchForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formControls: {
          chemicalname: null
        },
        requestPending: false,
        currentElement: null
      };
      this.RESTAPIService = new RESTAPIService();
    }
  
    changeHandler = event => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
      this.setState({
          formControls: {
            [fieldName]: fieldValue
          }
      }); 
    }
  
    searchChemicalDetaildHandler = () => {
      
      if ( this.state.formControls.chemicalname != this.state.currentElement ) {
        this.setState({
          currentElement : this.state.formControls.chemicalname,
          requestPending : true
        });
        this.props.onChemicalSummaryDetailsChange(null);
        this.RESTAPIService.getChemicalSummaryDetails(this.state.formControls.chemicalname)
        .then( result => {
          this.setState({
            requestPending : false
          });
          this.props.onChemicalSummaryDetailsChange(result);
          this.props.onChemicalNameChange(this.state.formControls.chemicalname);
        })
        .catch( err => {
          this.setState({
            requestPending : false
          });
          this.props.onChemicalSummaryDetailsChange({ message: JSON.stringify({message: "Could not connect to backend"}), status: "FETCH_ERR" });
          console.error(err);
        });
      }
    }
  
    render() {
      return (
            <Form>
                <Row>
                    <Col className="mb-1">
                        <Form.Control  name="chemicalname"
                              placeholder="Chemical name"
                              aria-label="Chemical"
                              aria-describedby="basic-addon1"
                              onChange={ (e) => {
                                this.changeHandler(e);
                              }}></Form.Control>
                    </Col>
                    <Col>
                        <Button 
                              variant="outline-primary"
                              onClick={this.searchChemicalDetaildHandler}
                              disabled={!this.state.formControls.chemicalname || this.state.requestPending}>Search</Button>
                    </Col>
                </Row>
            </Form>
      );
    }
  
  }