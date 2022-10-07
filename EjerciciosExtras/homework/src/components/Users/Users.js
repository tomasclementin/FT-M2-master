// import StateBlock from "markdown-it/lib/rules_block/state_block";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {
          this.props.users && this.props.users.map(user => {
            <td>{user.name}</td>,
            <td>{user.username}</td>,
            <td>
              <Link path={`/users/${user.id}/posts`} className='button'>Posts del Usuario</Link>
            </td>
          })
        }
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

