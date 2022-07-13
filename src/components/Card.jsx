import React from "react";

const Card = ({ movie }) => {
    return (
        <div className="movie">
            <span className="year">{movie.Year}</span>
            <img
                src={
                    movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/400"
                }
                alt={movie.Title}
            />
            <div className="detailes">
                <p>{movie.Type}</p>
                <p>{movie.Title}</p>
            </div>
        </div>
    );
};

export default Card;
