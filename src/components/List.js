import React, { useEffect } from 'react';
import { API } from '../service/service'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const List = (props) => {
    const [listData, setListData] = React.useState([]);

    useEffect(() => {
        API.GetData().then((res) => {
            if (!res.is_error) {
                res.data.map((item, i) => {
                    item.id = i + 1
                    return 0;
                })
                setListData([...res.data])
            }
        })
    }, [])

    const forTemplate = (rowData) => {
        return rowData.totalRunGive + '/' + rowData.totalOversBowled
    }

    const againstTemplate = (rowData) => {
        return rowData.totalRunMade + '/' + rowData.totalOversPlayed
    }

    const nrrTemplate = (rowData) => {
        return parseFloat(rowData.nrr).toFixed(3)
    }

    return (
        <>
            <div>
                <div className="card">
                    <h1>Table List</h1>
                    <DataTable value={listData}>
                        <Column field="id" header="#"></Column>
                        <Column field="teamName" header='teamName'></Column>
                        <Column field="matchCount" header='Matches'></Column>
                        <Column field="won" header='Won'></Column>
                        <Column field="lost" header='Lost'></Column>
                        <Column body={nrrTemplate} header='NRR'></Column>
                        <Column body={forTemplate} header='For'></Column>
                        <Column body={againstTemplate} header='Against'></Column>
                        <Column field="points" header='Pts'></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}

export default List