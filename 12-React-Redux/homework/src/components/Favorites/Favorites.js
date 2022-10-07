import React, { Component } from "react";
import { connect } from "react-redux";
// import { addMovieFavorite } from "../../actions";
// import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovieDetail, removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

//   componentDidMount() {

// }

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesFav && this.props.moviesFav.map((movie) => 
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <span>{movie.title}</span>
              </Link>
              <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesFav: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // getMovieDetail: movieID => dispatch(getMovieDetail(movieID)),
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
