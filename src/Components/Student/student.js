import React,{useState,useEffect} from "react";
import Stdtable from "./table";
import Cards from "./card";
import axios from "axios";
import { ContextData } from "../../Context";

function Student(){
  const [state,setState]= useState(true);

  const [stuStrength,setStuStrength]= useState([]);
  const [menStrength,setMenStrength]= useState([]);
  const [ment,setMent]= useState([]);
const [user, setUser] = useState([]);
const [id,setId] = useState();
useEffect(() => {
async function crud() {
  const getData = await axios.get("https://632138b082f8687273ae2989.mockapi.io/guvi/crud/student")
  setUser(getData.data);
  await axios.get(`https://632138b082f8687273ae2989.mockapi.io/guvi/crud/mentor`).then((response)=>{
    setMent(response.data);})

}
crud();

}, [])

useEffect(() => {
setMenStrength(ment.length);
setStuStrength(user.length);
},[ment,user])

  return(
    <><div className="container">
        <div className="row">
          <div className="col-sm-7">
      {state?<Stdtable state={state} setState={setState} user={user} setId={setId}/> :
      <ContextData.Provider value={{studentStren: stuStrength, mentorStren: menStrength, mentorData: ment}}>
        <Cards id={id}/>
        </ContextData.Provider>}
      </div>
      </div>
      </div>
    </>
  )
}

export default Student;