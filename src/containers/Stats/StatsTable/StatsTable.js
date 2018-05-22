import React, {Component} from "react";
import ReactTable from 'react-table';
import Button from '../../../components/Button/Button';
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
  
  const columns = [
    {
      Header: '#',
      accessor: 'number',
      className: 'numberCol',
      width: 40,
      resizable: false,
      headerStyle: { fontWeight: 'bold' }
    }, 
    {
      Header: 'Name',
      accessor: 'name',
    }
  ]

  return (
    <div className={classes.tableContainer}>
        <ReactTable
          data={data}
          columns={columns}
          className={classes.table}
          showPaginationBottom={false}
          minRows={1}
          defaultSortDesc={true}
          expander={true}
        />
        <Button />
      </div>
  )}
}

export default StatsTable;

     
