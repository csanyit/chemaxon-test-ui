import React from 'react';

export class MarvinBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marvin: null,
            currentChemical: null
        };
    }

    setupMarvin = () => {
        global.ChemicalizeMarvinJs.createEditor("#marvin-display-div").then( (marvinResult) => {
            marvinResult.setDisplaySettings({
                toolbars: "view3d",
                displayMode: "BALLSTICK",
                defaultTool: "rotate3d",
                implicitHydrogen: "OFF",
                chiralFlagVisible: false,
                valenceErrorVisible: false,
                disableContextMenu: true,
            });
            this.setState({marvin: marvinResult});
        });
    }

    componentDidMount = () => {
        this.setupMarvin();
    }

    render() {
        if ( this.state.marvin && this.props.chemicalName && this.props.chemicalName != this.state.currentChemical ) {
            this.setState({currentChemical: this.props.chemicalName});
            this.state.marvin.importStructure3d();
            this.state.marvin.importStructure3d("name", this.props.chemicalName);
        }
        return (
            <div id="marvin-display-div" className="marvinBox"></div>
        );
      }

}