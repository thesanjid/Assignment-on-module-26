import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

export default function SingleNews() {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    API.get(`/news/${id}`).then((res) => setNews(res.data));
  }, [id]);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <img src={news.image} className="my-4" />
      <p>{news.content}</p>
    </div>
  );
}