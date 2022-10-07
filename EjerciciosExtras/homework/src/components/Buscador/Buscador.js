import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions";

import './Buscador.css';

export class Buscador extends Component {
  constructor(props){
    super(props)
    this.state = {
      filtrados: this.props.posts,
      postsSearch: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getAllPosts();
    this.setState(() => ({
      filtrados: this.props.posts.filter(p => p.title.includes(this.state.postsSearch))
    }));
    console.log(this.state.filtrados);
    this.setState({
      postsSearch: ""
    })
  }
  
  viewAllPost(){
    this.props.getAllPosts();
    this.setState({
      filtrados: this.props.posts,
    })
  }

  setSearch(e){
    e.preventDefault();
    this.setState(() => ({
      postsSearch: e.target.value
    }))
  }

  render() {
    const {  postsSearch } = this.state.postsSearch;
    return (
      <div className= "details">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="user">Posts: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={postsSearch}
              onChange={() => this.setSearch}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <button className="btn2" onClick={() => this.viewAllPost()}>VER TODOS</button>
        <div className="details">
             <h4 className="title">Posts </h4>
                <div className= "card">
                {
                  this.state.filtrados && this.state.filtrados.map(post => (
                    <div key={post.id}>
                      {post.title}
                      <h4></h4>
                    </div>
                  ))
                }
                </div>
            </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(getAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
