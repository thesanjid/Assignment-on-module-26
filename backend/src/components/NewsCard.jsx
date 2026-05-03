import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow">
      <img src={news.image} className="h-40 w-full object-cover" />

      <div className="p-3">
        <h2 className="font-bold">{news.title}</h2>
        <Link to={`/news/${news._id}`} className="text-blue-500">
          Read More
        </Link>
      </div>
    </div>
  );
}