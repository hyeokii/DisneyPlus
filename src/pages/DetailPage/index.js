import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import styled from "styled-components";

const DetailPage = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);
  console.log(movie);
  if (!movie) {
    return null;
  } else {
    return (
      <Detail>
        <img
          className="modal__poster-img"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="img"
        />
        <div className="modal__content">
          <p className="modal__details">
            <span className="modal__user_perc">100% for you</span>{" "}
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </p>
          <h2 className="modal__title">
            {movie.title ? movie.title : movie.name}
          </h2>
          <p className="modal__overview">평점: {movie.vote_average}</p>
          <p className="modal__overview">{movie.overview}</p>
        </div>
      </Detail>
    );
  }
};

export default DetailPage;

const Detail = styled.section`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 800px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
