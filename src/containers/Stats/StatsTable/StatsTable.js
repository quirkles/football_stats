import React, {Component} from "react";
import ReactTable from 'react-table';
// import {ReactTableDefaults} from 'react-table';
import 'react-table/react-table.css';
import classes from './StatsTable.module.css';
import axios from 'axios';

class StatsTable extends Component {
  state = {
    data: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ data: response.data })
        console.log(response)
        .then(player => {
          const name = player.name;
        })
      })
      .catch(error => {
        console.log(error);
      })
    }
render () {

  const data = this.state.data.map(player => {
    return {
      name: player.name,
      number: player.id, 
      address: player.address.street,
      key: player.id
    }     
  });

  // const data = [{
  //   name: playerData.name,
  //   number: 2,
  //   thumbnail: <img width='20px'src='https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png' />,
  //   stats: {
  //     apps: 20,
  //     goals: 25,
  //     assists: 25,
  //     motm: 2
  //   }
  // }]
  
  const columns = [
    {
      Header: '#',
      accessor: 'number',
      // Cell: props => <span>{this.number}</span>,
      className: 'numberCol',
      width: 40,
      resizable: false,
      headerStyle: { fontWeight: 'bold' }
    }, 
    // {
    //   Header: 'image',
    //   accessor: 'thumbnail',
    //   id: 1
    //   // Cell: props=> <img src={this.thumbnail} alt='thumbnail'/>  // String-based value accessors!
    // }, 
    {
      Header: 'Name',
      accessor: 'name',
      // String-based value accessors!
    }, 
    // {
    //   id: 'apps', // Required because our accessor is not a string
    //   Header: 'Apps',
    //   accessor: d => d.stats.apps,
    //   headerClassName: 'headerStyle' // Custom value accessors!
    // },
    // {
    //   id: 'goals', // Required because our accessor is not a string
    //   Header: props => <span>Goals</span>,
    //   // accessor: d => d.stats.goals // Custom value accessors!
    // }, {
    //   Header: props => <span>Assists</span>, // Custom header components!
    //   accessor: 'stats.assists'
    // }, {
    //   id: 'motm',
    //   Header: 'MotM',
    //   accessor: d => d.stats.motm
    // }
  ]

  return (
    <div>
        <ReactTable
          data={data}
          columns={columns}
          className={classes.table}
          showPaginationBottom={false}
          minRows={1}
          defaultSortDesc={true}
          expander={true}
        />
      </div>
  )}
}

export default StatsTable;

     
