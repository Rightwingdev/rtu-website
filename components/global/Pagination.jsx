import React from "react";
import Link from "next/link";
const Pagination = ({ pages,route,current }) => {
  let tab = [];
  let i = 0;
  for (i = 0; i < pages; i++) {
    tab[i] = i + 1;
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <Link href={parseInt(current)>1?`${route}${parseInt(current)-1}`:'#'}>
            <span className="px-5 py-2 ml-0 font-semibold leading-relaxed text-gray-800 cursor-pointer hover:text-gray-700 ">
              Précédent
            </span>
          </Link>
        </li>
        {tab.map((page) => (
          <li key={page}>
            <Link href={`${route}${page}`}>
              <span className="px-5 py-2 ml-0 font-semibold leading-relaxed text-gray-800 cursor-pointer hover:text-gray-700 ">
                {page}
              </span>
            </Link>
          </li>
        ))}

        <li>
          <Link href={parseInt(current)<pages?`${route}${parseInt(current)+1}`:'#'}>
            <span className="px-5 py-2 ml-0 font-semibold leading-relaxed text-gray-800 cursor-pointer hover:text-gray-700">
              Suivant
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
