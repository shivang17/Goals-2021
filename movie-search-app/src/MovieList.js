import React from 'react';
function MovieList(props) {
    return (
        <>
        <h1>Check</h1>
        {props.movies && props.movies.map((movie)=>{
            return (
                <>
                <img src={movie.Poster} 
                alt={movie.title} 
                key = {movie.imdbID} />
                </>
            )
        })}
        </>
    )
}

export default MovieList;