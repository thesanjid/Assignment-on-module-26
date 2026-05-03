import { useEffect, useState } from "react";
import API from "../api/axios";
import NewsCard from "../components/NewsCard";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get("/news").then((res) => setNews(res.data));
  }, []);

  return (
    <div className="p-5 grid md:grid-cols-3 gap-4">
      {news.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </div>
  );
}