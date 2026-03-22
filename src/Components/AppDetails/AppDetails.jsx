import { Download, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();

  const singleApp = apps.find((app) => app.id === appId);
  console.log(singleApp);

  const { image, title, companyName, downloads, ratingAvg } = singleApp;

  return (
    <div className="">
      <div className="lg:container w-full mx-auto">
        <div className="flex lg:gap-10 gap-5">
          <div className="max-w-sm">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-bold">{title}</h2>
            <p className="">
              Developed By{" "}
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </p>
            <div className="divider"></div>

            <div className="stats">
              <div className="stat">
                <Download size={30} className="text-green-600" />

                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="stat">
                <Star className="text-[#FF8811]" size={30} />
                <div className="stat-title">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat">
                <ThumbsUp size={30} className="text-[#632EE3]" />

                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">1,200</div>
              </div>
            </div>

            <div className="">
              <button class="btn btn-success">Install Now (291 MB)</button>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AppDetails;
