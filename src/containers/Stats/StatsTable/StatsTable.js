import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import classes from './StatsTable.module.css';
import Modal from '../../../components/UI/Modal/Modal';
import Aux from '../../../hoc/Auxiliary';
import DetailedStats from '../../../components/DetailedStats/DetailedStats';
import axios from '../../../axios-instance';

class StatsTable extends Component {
  state = {
    data: [],
    viewingStats: false
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      // axios.get('.json')
      .then(response => {
        this.setState({ data: response.data })
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })
  }

// click handlers for buttons in table

viewStatsHandler = () => {
  this.setState({viewingStats: true})
}

closeStatsHandler = () => {
  this.setState({viewingStats: false})
}

  // onAddPlayerClick = () => {
  //   const playerDetails = {
  //     data: this.state.data,
  //     newPlayer: {
  //       name: 'joe',
  //       number: '2',
  //       stats: {
  //         apps: '10',
  //         goals: '21',
  //         assists: '23',
  //         motm: '1'
  //       }
  //     }
  //   }
  //   axios.post('/player.json', playerDetails)
  //   .then(response => {
  //     console.log (response)
  //   })
  //   .catch(error => console.log(error));
  // }

  render() {

    const data = this.state.data.map(player => {
      return {
        name: player.name,
        number: player.id,
        image: <img
          src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png"
          alt="player"
          className={classes.thumbnail} />,
        // apps: player.stats.apps,
        // goals: player.stats.goals,
        // assists: player.stats.assists,
        // motm: player.stats.motm,
        key: player.id,
        more: 
          <button 
            className={classes.moreStatsButton}
            onClick={this.viewStatsHandler}>
            <i className="fas fa-chart-line"></i>
          </button>,
        edit: <button>?</button>,
        delete: <button>x</button>

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
        Header: '',
        accessor: 'image',
        width: 40,
        sortable: false,
        resizable: false
      },
      {
        Header: 'Name',
        accessor: 'name',
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
      },
      {
        Header: '',
        accessor: 'more',
        width: 60,
        sortable: false
      },
    ]

    return (
      <Aux>
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
          {/* <Button onClick={this.onAddPlayerClick()}/> */}
        </div>
        <button>Add player</button>
        <Modal show={this.state.viewingStats} modalClosed={this.closeStatsHandler}>
          <DetailedStats stats={this.state.data} />
        </Modal>
      </Aux>
    )
  }
}

export default StatsTable;


