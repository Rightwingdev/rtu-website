import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Member from "./member";
const Team = () => {
  const [team, setteam] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/equipes?populate=*")
      .then((response) => {
        setteam(response.data.data);
        setloading(true);
      });
  }, []);

  return (
    <div className="w-full p-5 mt-16 xl:h-96 bg-red">
      <h2 className="text-2xl font-semibold text-white capitalize">L’équipe</h2>
      {loading && (
        <div
          id="team membres"
          className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        >
          {team.map((membre) => (
            <Member key={membre.id} info={membre.attributes} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
