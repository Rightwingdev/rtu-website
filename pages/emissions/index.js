import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "../../components/emissions/show";
import MobileHeader from "../../components/global/header/MobileHeader";
import Header from "../../components/global/header/Header";
import Pagination from "../../components/global/Pagination";
const emmisions = () => {
  const [shows, setshows] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/emissions?populate=*&pagination[pageSize]=9&pagination[page]=1`
      )
      .then((response) => {
        setshows(response.data);
        setloading(true);
      });
  }, []);
  return (
    <div className="flex flex-col items-center w-screen m-0 overflow-hidden ">
      <MobileHeader />
      <Header />
      <div
        id="wide screen"
        className="flex flex-col w-full h-full px-2 py-10 sm:px-10 3xl:max-w-wide 3xl:w-wide"
      >
        <h2 className="mt-6 mb-4 text-xl font-bold text-black">
          Nos Programmes
        </h2>

        {loading && (
          <div className="flex flex-col items-center w-full gap-10">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3 ">
              {shows.data.map((show) => (
                <Show info={show} key={show.id} />
              ))}
            </div>
            <Pagination route='/emissions/' current={1} pages={shows.meta.pagination.pageCount} />
          </div>
        )}
      </div>
    </div>
  );
};

export default emmisions;
