import Head from "next/head";
import { useEffect, useState } from "react";
import MiniVideo from "../../components/homePage/MiniVideo";
import Pagination from "../../components/global/PaginationCategorie";
import axios from "axios";
const index = () => {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/videos?populate=*&sort=updatedAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=30`
      )
      .then((response) => {
        setVideos(response.data);
        setloading(true);
      });
  }, [page]);

  return (
    <div className="flex flex-col items-center overflow-auto bg-white max-w-screen scroll-smooth">
      <Head>
        <title>RTU - La 1ère Radio & Télévision Universitaire de Paris</title>
      </Head>
      <div
        id="wide screen container"
        className="w-full h-full 3xl:max-w-wide 3xl:w-wide"
      >
        <div
          id="main content"
          className="w-screen h-full p-3 3xl:w-full lg:p-10"
        >
          <h2 className="w-full mt-6 mb-4 text-xl font-bold text-black">
            Videos
          </h2>
          <div id="videos" className="grid grid-cols-5 gap-5">
            {loading &&
              videos.data.map((video) => (
                <MiniVideo video={video} key={video.id} />
              ))}
          </div>
          <div className="flex justify-center w-full mt-8">
            {loading && (
              <Pagination
                key={videos.meta.pagination.page}
                setPage={setPage}
                page={page}
                pages={videos.meta.pagination.pageCount}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
