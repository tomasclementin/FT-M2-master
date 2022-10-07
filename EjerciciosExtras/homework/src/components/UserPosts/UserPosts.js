import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';

export class UserPosts extends React.Component {

  componentDidMount() {
    getAllUserPosts(this.props.match.params.id);
  }

  render() {
    const userid = this.props.match.params.id;
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {userid}</h4>
        <h5>{this.props.userPosts.title}</h5>
        <h5>{this.props.userPosts.body}</h5>
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (userId) => dispatch(getAllUserPosts(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);