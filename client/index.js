import {Grid} from 'ag-grid-community';
import 'ag-grid-enterprise'; 
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const columnDefs = [
  /*   {headerName: "id", field: "id", width: 150 },
    {headerName: "numero", field: "numero", width: 120, filter: 'agNumberColumnFilter' },
    {headerName: "estado", field: "estado", width: 190, filter: 'agTextColumnFilter'},
    {headerName: "idusuario", field: "idusuario", width: 90 , filter: 'agNumberColumnFilter' },
    {headerName: "fecha", field: "fecha", width: 145, filter:'agNumberColumnFilter' },
    {headerName: "preguntas", field: "preguntas", width: 90, filter: 'agTextColumnFilter', filterParams:{
        defaultOption:'startsWith'
    }} */
    /* { headerName : "id" , field : "id"  }, */
	{ headerName : "numero" , field : "numero", width: 120, filter:'agNumberColumnFilter', sortable: true,  filterParams: {debounceMs: 500}  },
	{ headerName : "estado" , field : "estado", width: 120, filter:'agTextColumnFilter'   },    
  { headerName : "usuario" , field : "usuario", width: 120, filter:'agNumberColumnFilter'    },
  { headerName : "nombre" , field : "nombre_g", width: 120, filter:'agTextColumnFilter'    },
  
/*     { headerName : "nombre" , field : "idgrupo", width: 120, filter:true ,  filterParams: {debounceMs: 0}, valueGetter: function(params) {
        
        let id = params.data.idgrupo;       
  
         if (id == 1){ return 'Durazno';}

        else if (id == 2){return 'Garibaldi';}
        
        else if (id == 5){return 'Minas';}
        
        else if (id == 6){return 'Melo';}
        
        else if (id == 7){return 'Durazno-Nocturno';}
         
        else if (id == 20){return 'Calle salto';}

        else if (id == 900){return 'NO HAY RESULTADOS';}

        else if (id == 21){return 'Garibaldi 3';}else{
          return 'NO HAY RESULTADOS';
        }
           
        
       
  }}, */
    /* { headerName : "fecha" , field : "fecha" }, */ 
     {headerName: "Fecha",field: "fecha", sortable: true,  filter:'agDateColumnFilter',  filterParams: {debounceMs: 500}  ,
    valueGetter: function(params) {

      

          var d = new Date(params.data.fecha);
          let month  = d.getMonth()  + 1;
          let date   = d.getDate();
          let hour   = d.getHours();
          let minute = d.getMinutes();
          let second = d.getSeconds();
          if(month < 10){
            var  months = "0"+month;
          }else{
            var  months = month;
          }
          if(date < 10){
            var  dates = "0"+date;
          }else{
            var  dates = date;
          }
          if(hour < 10){
            var  hours = "0"+hour;
          }else{
            var  hours = hour;
          }
          if(minute < 10){
            var  minutes = "0"+minute;
          }else{
            var  minutes = minute;
          }
          if(second < 10){
            var  seconds = "0"+second;
          }else{
            var  seconds = second;
          }



          let formatted_date = dates + "-" + months + "-" + d.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
          return formatted_date;  
    }
}, 
    { headerName : "preguntas" ,        field : "preguntas", width: 90 , filter:'agTextColumnFilter'  },
	  { headerName : "Int. Fam" ,         field : "integrantes_familia",width: 100  },
    { headerName : "direccion" ,        field : "direccion" , width: 120   },
	  { headerName : "otro_servicio" ,    field : "otro_servicio", width: 100  },
    { headerName : "observaciones" ,    field : "observaciones", filter:'agTextColumnFilter'  ,width: 390},
    { headerName: 'Ver ofrecidos',width: 90, cellRenderer: (params) => {

        $('#lala').click(function(){
          return params.data.preguntas;
        });

        
 
      if(params.data.preguntas == 'nts'){

        return '<button id="lala" class="llamar" >Ver</button>';
      }else{
        return '';
      }
      
    }}
];



$('#exportExcel').on('click',function(){

    var params = {exportMode: document.querySelector('xlsx')};

    gridOptions.api.exportDataAsExcel(params); 

  });

const gridOptions = {
    isExternalFilterPresent: true,
    rowModelType: 'serverSide',
    defaultColDef: {
        resizable: true,
        onColumnVisible: true,
    },
    columnDefs: columnDefs,
    rowData: null,
    floatingFilter:true,  localeText: {
      // for filter panel
      page: 'Pagina',
      more: 'Mas',
      to: 'a',
      of: 'de',
      next: 'Siguente',
      last: 'Último',
      first: 'Primero',
      previous: 'Anteror',
      loadingOoo: 'Cargando...',

      // for set filter
      selectAll: 'Seleccionar Todo',
      searchOoo: 'Buscar...',
      blanks: 'En blanco',

      // for number filter and text filter
      filterOoo: 'Filtrar',
      applyFilter: 'Aplicar Filtro...',
      equals: 'Igual',
      notEqual: 'No Igual',

      // for number filter
      lessThan: 'Menos que',
      greaterThan: 'Mayor que',
      lessThanOrEqual: 'Menos o igual que',
      greaterThanOrEqual: 'Mayor o igual que',
      inRange: 'En rango de',

      // for text filter
      contains: 'Contiene',
      notContains: 'No contiene',
      startsWith: 'Empieza con',
      endsWith: 'Termina con',

      // filter conditions
      andCondition: 'Y',
      orCondition: 'O',

      // the header of the default group column
      group: 'Grupo',

      // tool panel
      columns: 'Columnas',
      filters: 'Filtros',
      valueColumns: 'Valos de las Columnas',
      pivotMode: 'Modo Pivote',
      groups: 'Grupos',
      values: 'Valores',
      pivots: 'Pivotes',
      toolPanelButton: 'BotonDelPanelDeHerramientas',

      // other
      noRowsToShow: 'No hay filas para mostrar',

      // enterprise menu
      pinColumn: 'Columna Pin',
      valueAggregation: 'Agregar valor',
      autosizeThiscolumn: 'Autoajustar esta columna',
      autosizeAllColumns: 'Ajustar todas las columnas',
      groupBy: 'agrupar',
      ungroupBy: 'desagrupar',
      resetColumns: 'Reiniciar Columnas',
      expandAll: 'Expandir todo',
      collapseAll: 'Colapsar todo',
      toolPanel: 'Panel de Herramientas',
      export: 'Exportar',
      csvExport: 'Exportar a CSV',
      excelExport: 'Exportar a Excel (.xlsx)',
      excelXmlExport: 'Exportar a Excel (.xml)',


      // enterprise menu pinning
      pinLeft: 'Pin Izquierdo',
      pinRight: 'Pin Derecho',


      // enterprise menu aggregation and status bar
      sum: 'Suman',
      min: 'Minimo',
      max: 'Maximo',
      none: 'nada',
      count: 'contar',
      average: 'promedio',

      // standard menu
      copy: 'Copiar',
      copyWithHeaders: 'Copiar con cabeceras',
      paste: 'Pegar'   
  }
};


const gridDiv = document.querySelector('#myGrid');
new Grid(gridDiv, gridOptions);
const datasource = {
    getRows(params) {
          console.log(JSON.stringify(params.request, null,1)); 
         
         fetch('http://localhost:8000/olympicWinners/', {
             method: 'post',
              body: JSON.stringify(params.request), 
             headers: {'Accept': 'application/json, text/plain, */*',"Content-Type": "application/json; charset=utf-8"}
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

$('#ordenar').on('click',function(){
  gridOptions.api.setQuickFilter("initial filter value");
  gridOptions.api.setServerSideDatasource(datasource);
/* const garibaldi = {
  getRows(params) {
        console.log(JSON.stringify(params.request, null, 1)); 
              
        fetch('./olympicWinners/', {
          method: 'post',
           body: JSON.stringify({
            "startRow": 0,
            "endRow": 100,
            "rowGroupCols": [],
            "valueCols": [],
            "pivotCols": [],
            "pivotMode": false,
            "groupKeys": [],
            "filterModel": {
             "idgrupo": {
              "filterType": "text",
              "type": "equals",
              "filter": "2"
             }
            },
            "sortModel": []
           }), 
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

gridOptions.api.setServerSideDatasource(garibaldi);


 */
});

/* 

  const garibaldi = {
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
  
  gridOptions.api.setServerSideDatasource(garibaldi);




 */