import React from "react";
import Link from "next/link";
const Pagination = ({ pages,setPage,page }) => {
  let tab = [];
  let i = 0;
  for (i = 0; i < pages; i++) {
    tab[i] = i + 1;
  }
  return (
    <nav aria-label="Page navigation" className="">
      <ul className="inline-flex -space-x-px">
        <li>
          <button onClick={()=>page>1?setPage((latest)=>latest-1):null} disabled={page==1}>
            <span className={`font-semibold px-5 py-2 ml-0 leading-relaxed text-gray-800 cursor-pointer ${page==1?'text-gray-400':' '}  hover:text-gray-700 `}>
              Précédent
            </span>
          </button>
        </li>
        {tab.map((page) => (
          <li key={page}>
            <button onClick={()=>setPage(page)} >
              <span className="px-5 py-2 ml-0 font-semibold leading-relaxed text-gray-800 cursor-pointer hover:text-gray-600">
                {page}
              </span>
            </button>
          </li>
        ))}

        <li>
          <button onClick={()=>page<pages?setPage((latest)=>latest+1):null}>
            <span className={`font-semibold px-5 py-2 ml-0 leading-relaxed text-gray-800 cursor-pointer ${page==pages?'text-gray-400':' '}  hover:text-gray-700 `}>
              Suivant
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
