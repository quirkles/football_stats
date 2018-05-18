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
      name: 'Joe',
      number: 2,
      thumbnail: 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png',
      stats: {
        apps: 20,
        goals: 25,
        assists: 25,
        motm: 2
      }
    }]
  
    const columns = [{
      Header: '',
      accessor: 'number',
      // Cell: props => <span>{this.number}</span>,
      className: 'numberCol', // Custom cell components!
      width: 40,
      resizable: false,
      headerStyle: {fontWeight: 'bold'}
    }, {
      Header: 'image',
      // accessor: props => <img src={this.thumbnail} alt='tn' />,
      // Cell: props=> <img src={this.thumbnail} alt='thumbnail'/>  // String-based value accessors!
    },{
      Header: 'Name',
      accessor: 'name',
      // String-based value accessors!
    }, {
      id: 'apps', // Required because our accessor is not a string
      Header: 'Apps',
      accessor: d => d.stats.apps,
      headerClassName: 'headerStyle' // Custom value accessors!
    }, 
    {
      id: 'goals', // Required because our accessor is not a string
      Header: props => <span>Goals</span>,
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
    <div>
      <ReactTable
      data={data}
      columns={columns}
      className={'table'}
      showPaginationBottom={false}
      minRows={1}  
      defaultSortDesc={true} 
    />
    </div>
    
  )
    
  }
}

export default StatsTable;
