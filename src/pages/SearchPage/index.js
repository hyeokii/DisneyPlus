import axios from "../../api/axios";
import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchSearchMovie = useCallback(async () => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResult(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, fetchSearchMovie]);

  if (searchResult.length > 0) {
    return (
      <section className="search-container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
