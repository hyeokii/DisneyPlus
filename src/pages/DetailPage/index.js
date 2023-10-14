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
      console.log(response);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

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
      </Detail>
    );
  }
};

export default DetailPage;

const Detail = styled.section`
  padding: 5rem;
`;
