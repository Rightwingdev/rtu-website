import axios from "axios";

export default function handler(req, res) {
  let date = new Date();
  axios.get(`http://localhost:1337/api/programmes?filters[heure_debut][$lte]=${JSON.stringify(date).replace(/['"]+/g, '')}&filters[heure_fin][$gte]=${JSON.stringify(date).replace(/['"]+/g, '')}&populate[0]=thumbnail`).then(response=>{
    if(response.data.data.length>0){
      res.status(200).json(response.data.data)
    }else{
      res.status(200).json("no show")
    }
  })
}
