import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../ulilities/addToDB";
import TrendingAppCard from "../TrendingAppCard/TrendingAppCard";
import { toast } from "react-toastify";
// import { getStoredApp, removeFromStoredDB } from "../ulilities/addToDB";

const InstallList = () => {
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState(" ");
  const appData = useLoaderData();
  console.log(appData);

  useEffect(() => {
    const storedAppData = getStoredApp(); // [1,2,3]

    const ConvertedStoredApps = storedAppData.map((id) => parseInt(id));
    console.log("Converted : ", ConvertedStoredApps);

    const myReadList = appData.filter((app) =>
      ConvertedStoredApps.includes(app.id),
    );
    // console.log("ReadList : ",myReadList);
    setAppList(myReadList);
    // setAppList(myReadList);
    // const myAppList = appData.filter((app) =>
    //   storedAppData.includes(Number(app.appId))
    // );
    // setAppList(myAppList);
  }, []);

  const handleRemove = (id) => {
    const updated = appList.filter((app) => app.id !== id);
    setAppList(updated);
    toast.error("Uninstallion apps!");
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "download") {
      const sortedByDownload = [...appList].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setAppList(sortedByDownload)
    }
    if(type === "ratings"){
 const sortedByRattings = [...appList].sort(
        (a, b) => a.ratingAvg - b.ratingAvg,
      );
      setAppList(sortedByRattings)
    }
  };
  return (
    <div className="lg:container w-full mx-auto lg:py-20 md:py-10 py-8  lg:p-0 md:px-10 px-5">
      <div className="text-center pb-10">
        <h2 className="text-4xl md:text-5xl font-bold">Your Installed Apps</h2>
        <p className="text-gray-500 mt-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center py-6 md:flex-nowrap flex-wrap gap-5">
        <h4 className="text-black text-2xl font-semibold">
          ({appList.length}) Apps Found
        </h4>

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size : {sort ? sort : ""}⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("download")}>download</a>
            </li>
            <li>
              <a onClick={() => handleSort("rating")}>rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {appList.length === 0 ? (
          <p className="text-center text-gray-500">No installed apps found</p>
        ) : (
          appList.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4"
            >
              <div className="flex items-center gap-4">
                {/* <div className="text-2xl text-gray-400 font-light w-8">
                  {index + 1}
                </div> */}

                <img
                  className="w-14 h-14 rounded-lg object-cover"
                  src={app.image}
                  alt={app.name}
                />

                <div>
                  <h3 className="font-semibold text-lg">{app.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span>⬇ {app.downloads}</span>
                    <span>⭐ {app.ratingAvg}</span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(app.id)}
                className="btn btn-sm bg-green-500 hover:bg-green-600 text-white border-none"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InstallList;
