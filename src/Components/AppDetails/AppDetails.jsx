import { CircleCheckBig, Download, Star, ThumbsUp } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { addToStoredDB } from "../ulilities/addToDB";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();

  const singleApp = apps.find((app) => app.id === appId);
  console.log(singleApp);

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    ratings,
    description,
  } = singleApp;

  const handleInstall = (id) => {
    addToStoredDB(id);
    if (!installed) {
      setInstalled(true);
      toast.success("Successfully Install Now!");
    }
  };

  return (
    <div className="lg:py-20 md:py-10 py-8  lg:p-0 md:px-10 px-5">
      <div className="lg:container w-full mx-auto ">
        <div className="flex lg:gap-10 gap-5 md:flex-nowrap flex-wrap">
          <div className="max-w-sm">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl pb-2">{title}</h2>
            <p className="">
              Developed By{" "}
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </p>
            <div className="divider"></div>

            <div className=" flex justify-between  md:gap-8 gap-4 md:flex-nowrap flex-wrap">
              <div className="">
                <Download size={30} className="text-green-600" />

                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="">
                <Star className="text-[#FF8811]" size={30} />
                <div className="stat-title">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="">
                <ThumbsUp size={30} className="text-[#632EE3]" />

                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">1,200</div>
              </div>
            </div>

            <div className="pt-4">
              <button
                class="btn btn-success"
                onClick={() => handleInstall(id)}
                disabled={installed}
              >
                {installed ? (
                  <span className=" flex gap-1 items-center justify-center ">
                    <CircleCheckBig size={16} />
                    Install
                  </span>
                ) : (
                  "Install Now (291MB)"
                )}
              </button>
              {/* <ToastContainer /> */}
            </div>
          </div>
        </div>

        <div className="divider"></div>
        {/* BAR CHART  */}
        <div className="space-y-6">
          <h5 className="text-2xl text-black font-semibold">Ratings</h5>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={[...ratings].reverse()}
                margin={{ left: 0, right: 30 }}
              >
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#627382", fontSize: 14 }}
                />
                <Bar
                  dataKey="count"
                  fill="#FF8811"
                  barSize={24}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="divider py-6"></div>

        <div className="space-y-4">
          <h5 className="text-2xl text-black font-semibold">Description</h5>

          <p className="text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
