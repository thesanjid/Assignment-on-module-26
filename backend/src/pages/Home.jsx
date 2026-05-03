import { useEffect, useState } from "react";
import API from "../api/axios";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get("/news").then((res) => {
      setNews(res.data.slice(0, 6));
    });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Top News</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {news.map((item) => (
          <NewsCard key={item._id} news={item} />
        ))}
      </div>
    </div>
  );
}