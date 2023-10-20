import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import filter from "./Fliter";
// import Mock_Data from './MockData.json';
import { useMemo } from 'react';
import { IconButton } from '@mui/material';

const badgeComponent = p => {
    return(
        <>
        {p.value ? <span className="text-xs inline-block py-2 px-3 capitalize leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-200 text-slate-500 rounded-full">{p.value}</span> : null}
        </>
    );
};
const showStatus = () => {
    return(
        <>
            <p className='flex justify-start items-center gap-3'>
            <span>
            <CircleIcon fontSize='xtra-small' className='text-green-300'/> Active(1)
            </span>
            <span>
            <CircleIcon fontSize='xtra-small' className='text-blue-300'/> Draft(0) 
            </span>
            <span>
            <CircleIcon fontSize='xtra-small' className='text-lime-400'/> Upcomimg(0)
            </span>
            </p>
        </>
    );
};

const deleteRow = (p) => {
    return(
            <>
                <IconButton onClick={() =>{
                    p.api.updateRowData({remove: [p.data]})
                }}>
                    <DeleteOutlineOutlinedIcon fontSize='small' className='text-slate-400'/>
                </IconButton>
            </>
    );
}
const BasicTable = () => {
    const rowData = [
        {"id":1,"Query_Name": "Aubree","keys": "aub, aubre","Campaign Name": "",
        "Campaign" : ""
        },
    
        {"id":2,"Query_Name": "Aubrey","keys": "aub, aubre","Campaign Name": "Merchandising","Campaign" : "Active(1) Draft(0) Upcomimg(0)"},
    
        {"id":3,"Query_Name": "Aubri","keys": "aub, aubre","Campaign Name": "redirects",},
    
        {"id":4,"Query_Name": "zubriana","keys": "aub, aubre","Campaign Name": "banner","Campaign" : "Active(1) Draft(0) Upcomimg(0)"},

        {"id":5,"Query_Name": "zubrianna","keys": "","Campaign Name": "landing page","Campaign" : "Active(1) Draft(0) Upcomimg(0)"},
    
        {"id":6,"Query_Name": "Nubrianne","keys": "aub, aubre","Campaign Name": "",},
    
        {"id":7,"Query_Name": "Aubrie","keys": "","Campaign Name": "","Campaign" : "Active(1) Draft(0) Upcomimg(0)"},
    
        {"id":8,"Query_Name": "Tubriella","keys": "aub, aubre","Campaign Name": "landing page",},
    
        {"id":9,"Query_Name": "Rubrielle","keys": "","Campaign Name": "redirects","Campaign" : "Active(1) Draft(0) Upcomimg(0)"},
    
        {"id":10,"Query_Name": "Zubrii","keys": "aub, aubre","Campaign Name": "","Campaign" : "Active(1) Draft(0) Upcomimg(0)"},
    
        {"id":11,"Query_Name": "Pubriana","keys": "aub, aubre","Campaign Name": "Merchandising", "Campaign": ""},

        {"id":12,"Query_Name": "Pubriana","keys": "","Campaign Name": "", "Campaign": ""},

        {"id":13,"Query_Name": "Pubriana","keys": "aub, aubre","Campaign Name": "loading page", "Campaign": ""},

        {"id":14,"Query_Name": "Pubriana","keys": "aub, aubre","Campaign Name": "redirects", "Campaign": ""},

        {"id":15,"Query_Name": "Pubriana","keys": "","Campaign Name": "", "Campaign": ""},
    ];

    const QueryNameCol = (p) => {
        return(
            <>
                <p className={p.data.keys === '' ? "mt-0 font-semibold text-slate-700" : "mt-1 flex flex-col font-semibold  text-slate-700"}>{p.data.Query_Name}
                <span className='mt-1 font-normal lowercase text-slate-600'>{p.data.keys}</span>
                </p>
                {/* <p>{p.data.keys}</p> */}
            </>
        );
    };
    const columnDef =[
        {headerName: 'Query_Name', field: 'Query_Name', sortable: true,filter: "agTextColumnFilter", flex:1,
        cellRenderer: QueryNameCol,
        // cellStyle: { padding: '0px', margin: '0px' , lineHeight: '1rem', paddingLeft: '1.5rem'},
        cellStyle: params => {
            if(params.data.keys !==""){
                return {
                padding: '0px', margin: '0px' , lineHeight: '1rem', paddingLeft: '1.5rem'
                }
            }
            else{
                return null;
            }
        }
        },
        {headerName: 'Campaign Name',
        field: 'Campaign Name',
        flex:1,
        cellRenderer: badgeComponent,
        cellStyle: { 'textAlign': "left" },
        filter: "agTextColumnFilter",
        // filterParams: {
        //     title: 'Campaign Name',
        //     filterOptions: ['merchandise', 'redirects', 'banner', 'landing page'],
            // button: ['Apply', 'Close'],
            // closeOnApply: true
        // }
        },
        {headerName: 'Campaign', field: 'Campaign', cellRenderer: showStatus, filter: "agTextColumnFilter", flex:1},
        {headerName: 'Action', field: 'id', cellRenderer: deleteRow, width: 200, 
        cellStyle: { 'textAlign': "center" }}
    ];

    // useEffect(() => {
    //     fetch("./Mock_Data.json")
    //     .then((data) => data.json())
    //     .then((data) => setRowData(data));
    // });

    const defaultColDef = useMemo(() => ({
        // flex:1,
        sortable: true,
        floatingFilter: true,
        filterParams: {
            buttons: ['reset', 'apply'],
            filterOptions: ['contains', 'notContains'],
            closeOnApply: true
        }
    }), [])

  return (
    <div className='ag-theme-material' style={{height: 900, width: '100%'}}>
        <AgGridReact
            animateRows={true}
            rowData={rowData}
            columnDefs={columnDef}
            defaultColDef={defaultColDef}
        />
    </div>
  )
}

export default BasicTable