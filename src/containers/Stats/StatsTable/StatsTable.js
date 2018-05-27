import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import classes from './StatsTable.module.css';
import Modal from '../../../components/UI/Modal/Modal';
import Aux from '../../../hoc/Auxiliary';
import DetailedStats from '../DetailedStats/DetailedStats';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-instance';
import { Button } from 'reactstrap';

class StatsTable extends Component {
  state = {
    data: [],
    loading: false,
    viewingStats: false,
    selectedPlayerId: null
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const fetchedData = response.data.map(player => {
          return {
            name: <button
              onClick={() => this.viewStatsHandler(player.id)}
              className={classes.moreStatsButton}>{player.name}</button>,
            number: player.id,
            image: <img
              src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
              alt="player"
              className={classes.thumbnail} />,
            apps: player.address.zipcode.slice(0, 1),
            goals: player.address.zipcode.slice(1, 2),
            assists: player.address.zipcode.slice(2, 3),
            motm: player.address.zipcode.slice(3, 4),
            key: player.id,
            edit: <button>?</button>,
            delete: <button>x</button>
          }
        });
        this.setState({ data: fetchedData })
      })
      .catch(error => alert('unable to fetch data', error));
  }

  // click handlers for clicking on name buttons
  viewStatsHandler = (id) => {
    this.setState({ viewingStats: true, selectedPlayerId: id })
  }

  closeStatsHandler = () => {
    this.setState({ viewingStats: false })
  }
  render() {

    // data for rows in table
    const data = this.state.data;
    // data for columns in table
    const columns = [
      {
        Header: '',
        accessor: 'number',
        className: 'numberCol',
        width: 40,
        resizable: false,
        headerStyle: { fontWeight: 'bold' }
      },
      {
        Header: '',
        accessor: 'image',
        width: 40,
        sortable: false,
        resizable: false
      },
      {
        Header: 'Name',
        accessor: 'name',
        headerStyle: { textAlign: 'left', fontWeight: 'bold' },
        style: { textAlign: 'left' }
      },
      {
        Header: <i className="fas fa-check"></i>,
        accessor: 'apps',
        width: 40,
        resizable: false
      },
      {
        Header: <i className="i fas fa-futbol" />,
        accessor: 'goals',
        width: 40,
        resizable: false
      },
      {
        Header: <i className="far fa-handshake"></i>,
        accessor: 'assists',
        width: 40,
        resizable: false
      },
      {
        Header: <i className="far fa-star"></i>,
        accessor: 'motm',
        width: 40,
        resizable: false
      }
    ]

    // components to render in each loading state
    let dataTable = <ReactTable
      data={data}
      columns={columns}
      className={classes.table}
      showPaginationBottom={false}
      minRows={1}
      defaultSortDesc={true}
      expander={true}
    />;

    let detailedStats = <Spinner />;
    if (this.state.data.length !== 0) {
      detailedStats = <DetailedStats id={this.state.selectedPlayerId} data={this.state.data} />
    }

    return (
      <Aux>
        <div className={classes.tableContainer}>
          {dataTable}
            <div>
              <Button className={classes.AddPlayerButton} color='success'>
                <i className="fas fa-user-plus"></i>
              </Button>
            </div>
        </div>
          <Modal show={this.state.viewingStats} modalClosed={this.closeStatsHandler}>
            {detailedStats}
          </Modal>
        <Spinner />
      </Aux>
    )
  }
}

export default StatsTable;


