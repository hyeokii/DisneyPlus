import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "204fb92675c8be4204f53a9d98e0d90d",
    language: "ko-KR",
  },
});

export default instance;
