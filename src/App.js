import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./components/Card";

const apiKey = process.env.React_App_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}`;

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const apiData = async (title) => {
        let response = await fetch(`${API_URL}&s=${title}`);
        let data = await response.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        apiData("Spider man");
    }, []);
    return (
        <div className="App">
            <div className="container">
                <h1 className="title">Movie Space 🌖</h1>
                <div className="search">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Spider-Man"
                    />
                    <button className="btn" onClick={() => apiData(search)}>
                        <AiOutlineSearch />
                    </button>
                </div>
                <h2>Results</h2>
                <hr />
                {movies?.length > 0 ? (
                    <div className="results">
                        {movies.map((movie) => (
                            <Card movie={movie} key={movie.imdbID} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">No Movie Found</div>
                )}
            </div>
        </div>
    );
}

export default App;
