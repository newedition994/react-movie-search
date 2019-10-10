import React, { Component } from "react";
import MovieRow from "./components/MovieRow";
import "./App.css";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log("This is my initializer");
    // const movies = [
    //   {
    //     id: 1,
    //     poster_src:
    //       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt7286456%2F&docid=C4LXs0Zk0shJnM&tbnid=MySBpZXiLAUKZM%3A&vet=10ahUKEwj26Y2bupDlAhWnmOAKHWMQDLQQMwivASgAMAA..i&w=2764&h=4096&bih=700&biw=644&q=joker%20poster%202019&ved=0ahUKEwj26Y2bupDlAhWnmOAKHWMQDLQQMwivASgAMAA&iact=mrc&uact=8",
    //     title: "Joker",
    //     overview: "Meet Batman's Joker before the riots"
    //   },
    //   {
    //     id: 2,
    //     poster_src:
    //       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi1.wp.com%2Fbatman-news.com%2Fwp-content%2Fuploads%2F2017%2F11%2FJustice-League-Superman-Banner.jpg&imgrefurl=https%3A%2F%2Fbatman-news.com%2F2017%2F11%2F21%2Fsuperman-finally-gets-included-in-justice-league-promotional-image%2F&docid=v5ffTY5h3D4zhM&tbnid=BSj714p-H89qTM%3A&vet=10ahUKEwiCv_TnupDlAhXtUt8KHVbOAEsQMwihASgNMA0..i&w=1700&h=1062&bih=700&biw=644&q=justice%20league%20poster&ved=0ahUKEwiCv_TnupDlAhXtUt8KHVbOAEsQMwihASgNMA0&iact=mrc&uact=8",
    //     title: "Justice League",
    //     overview: "Batman gets all the superheroes together"
    //   }
    // ];

    // var movieRows = [];

    // movies.forEach(movie => {
    //   console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />;
    //   movieRows.push(movieRow);
    // });

    // this.state = { rows: movieRows };
    this.performSearch();
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Fetched data successfully");
        // console.log(searchResults)
        const results = searchResults.results;
        // console.log(results[0])

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  searchChangeHandler(e) {
    //e.preventDefault();
    const boundObject = this;
    const searchTerm = e.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg" />
              </td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter seach term"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
