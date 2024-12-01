import React, { useState, useEffect } from "react";
import "./widgets.css";
import apiClient from "../../spotify";
import WidgetCard from "./widgetCard";

export default function Widgets({ artistID }) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    if (artistID) {

      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 9);
          setFeatured(a);
        })
        .catch((err) => console.error(err));
    }
  }, [artistID]);

  return (
    <div>
      <p className="widget-title">Made For You</p>
      <div className="widgets-body flex">
        <WidgetCard title="Made For You" featured={featured} />
      </div>
    </div>
  );
}
