import React, { Component } from "react";
import ReactTable from 'react-table';
// import {ReactTableDefaults} from 'react-table';
import 'react-table/react-table.css';
import './StatsTable.css';

class StatsTable extends Component {
  state = {
    data: {}
  };

  render() {
    const data = [{
      name: 'J W',
      number: 2,
      stats: {
        apps: 10,
        goals: 100,
        assists: 23,
        motm: 2
      }
    }, {
      name: 'Nick',
      number: 5,
      stats: {
        apps: 2,
        goals: 2,
        assists: 6,
        motm: 9
      }
    }]
  
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Number',
      accessor: 'number',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, 
    {
      id: 'apps', // Required because our accessor is not a string
      Header: 'Apps',
      accessor: d => d.stats.apps // Custom value accessors!
    }, 
    {
      id: 'goals', // Required because our accessor is not a string
      Header: 'Goals',
      accessor: d => d.stats.goals // Custom value accessors!
    }, {
      Header: props => <span>Assists</span>, // Custom header components!
      accessor: 'stats.assists'
    }, {
      id: 'motm',
      Header: 'MotM',
      accessor: d => d.stats.motm
    }]
  return (
    <ReactTable
      data={data}
      columns={columns}
      className={'table'}
      showPaginationBottom={false}
      minRows={1}
    />
  )
    
  }
}

export default StatsTable;
