import { useRouter } from "next/router";
import Head from "next/head";
import Maincat from "../../../components/global/articles/maincat";
import CategoryLatest from "../../../components/global/articles/categoryLatest";
const Index = () => {
  const router = useRouter();
  const {
    query: { categorie },
  } = router;

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
          <h2 className="mt-2 mb-4 text-2xl font-bold text-black capitalize sm:text-3xl sm:mt-6 ">
            {categorie && categorie}
          </h2>
          {categorie && <Maincat categorie={categorie} />}
          {categorie && <CategoryLatest categorie={categorie} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
