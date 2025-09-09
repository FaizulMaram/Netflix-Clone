import "./player.css";
import Back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTE0YTRlOWVlN2M4NDQzYzJjYTJmZjY4N2E0NDc4YSIsIm5iZiI6MTc1NzQxNTcxMy44MzMsInN1YiI6IjY4YzAwOTIxMTIyYzgzNmZjNzRlNjhiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JETsOASqDtUp3c7OQrIcQwQrl8_if-InLf1ebrSby8",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={Back_arrow_icon} onClick={() => {navigate(-2)}} />
      <iframe
        width={"90%"}
        height={"90%"}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder={0}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
