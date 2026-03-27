import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const TrendingAppCard = ({ data }) => {
  const { id, image, title, downloads, ratingAvg } = data;
  return (
    <div className="card bg-base-100 w-full p-4">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="size-full object-cover object-top h-64 rounded-lg hover:scale-105 transition-all hover:-rotate-2 duration-300"
        />
      </figure>
      <Link to={`/appdetails/${id}`} className="">
        <h2 className="card-title py-4">{title}</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 p-2 rounded bg-[#F1F5E8] text-[#00D390] border-none shadow-none">
            <Download size={16} /> {new Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(downloads).toLowerCase() }

          
          </div>
          <button className="flex items-center gap-2 p-2 rounded bg-[#FFF0E1] text-[#FF8811] border-none shadow-none ">
            <Star size={16} /> {ratingAvg}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TrendingAppCard;
