import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {

    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        //const movie = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        //console.log(movies.data.data.movies);
        // ES6 문법을 쓰자
        const {
            data: {
                data: { movies }
                }
            } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        //this.setState({movies:movies})    
        this.setState({ movies , isLoading: false}); // ES6


    
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span> 
                    </div>
                    ) : (
                        movies.map(movie => {
                            return (
                                <Movie 
                                    key={movie.id}
                                    id={movie.id} 
                                    year={movie.year} 
                                    title={movie.title}
                                    summary={movie.summary} 
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres} 
                                    />
                                );
                            }
                        )
                    )
                }
            </section>
        );
    }
}

export default Home;