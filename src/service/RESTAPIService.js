import config from '../config/config';

export class RESTAPIService {
    
    getChemicalSummaryDetails(chemicalSummaaryName) {
        const restEndpoint = config.backendURL+"/api/v1/description/summary?name="+chemicalSummaaryName;
        return fetch(restEndpoint)
            .then( res => { return res.json(); } )
    }

}