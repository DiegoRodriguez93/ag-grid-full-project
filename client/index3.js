import {Grid} from 'ag-grid-community';
import 'ag-grid-enterprise';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

 const gridOptions = {

    rowModelType: 'serverSide',

    columnDefs: [
        {field: 'id'},
        {field: 'numero'},
        {field: 'estado'},
        {field: 'idusuario', filter: 'number', filterParams: {newRowsAction: 'keep'}},
        {field: 'fecha',filter:'agTextColumnFilter', aggFunc: 'sum'},
        {field: 'preguntas', aggFunc: 'sum'}
    ],

    defaultColDef: {
        sortable: true,
        editable: true,
        filter: 'true'
    }

    // debug: true,
    // cacheBlockSize: 20,
    // maxBlocksInCache: 3,
    // purgeClosedRowNodes: true,
    // maxConcurrentDatasourceRequests: 2,
    // blockLoadDebounceMillis: 1000
}; 

const gridDiv = document.querySelector('#myGrid');
new Grid(gridDiv, gridOptions);

const datasource = {
    getRows(params) {
         console.log(JSON.stringify(params.request, null, 1));

         fetch('./olympicWinners/', {
             method: 'post',
             body: JSON.stringify(params.request),
             headers: {"Content-Type": "application/json; charset=utf-8"}
         })
         .then(httpResponse => httpResponse.json())
         .then(response => {
             params.successCallback(response.rows, response.lastRow);
         })
         .catch(error => {
             console.error(error);
             params.failCallback();
         })
    }
};

gridOptions.api.setServerSideDatasource(datasource);
