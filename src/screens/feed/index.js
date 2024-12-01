import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./feed.css";
import { useNavigate } from "react-router-dom";

export default function Trending() {
  const [trendingItems, setTrendingItems] = useState(null);

  useEffect(() => {
    // Make a request to the Spotify API to get trending data
    APIKit.get("/browse/featured-playlists").then(function (response) {
      // console.log(response.data); // Log the received data
      setTrendingItems(response.data.playlists.items);
    });
  }, []);

  const navigate = useNavigate();

  const playItem = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="trending-body">
        {trendingItems?.map((item) => (
          <div
            className="trending-card"
            key={item.id}
            onClick={() => playItem(item.id)}
          >

            <img
              src={item.images[0].url}
              className="trending-image"
              alt="Trending-Art"
            />
            <p className="trending-title">{item.name}</p>
            <p className="trending-subtitle">{item.tracks.total} Songs</p>
            <div className="trending-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


