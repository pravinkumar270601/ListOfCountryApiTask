import "./App.css";
import { useState } from "react";
import SearchCountry from "./Components/SearchCountry/SearchCountry";
// import NumOfUcty from "./Components/NumOfUcty/NumOfUcty";
import ButtonClickHigh from "./Components/ButtonClick/ButtonClickHigh";
import ButtonClickLow from "./Components/ButtonClickLow/ButtonClickLow";
import Header from "./Components/Header/Header";

function App() {
  const [search, setsearch] = useState("?");
  const [ishighVisible, sethighVisible] = useState(false);
  const [islowVisible, setlowVisible] = useState(false);


  const toggleDivhigh = () => {
    sethighVisible(!ishighVisible);
    setlowVisible(false);
  };
  const toggleDivlow = () => {
    setlowVisible(!islowVisible);
    sethighVisible(false);
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-around my-nav-body" >
        <div onClick={()=>{setlowVisible(false); sethighVisible(false);}}>
          <Header setsearch={setsearch} />
        </div>
        <div className="d-flex flex-column">
          <button
            onClick={toggleDivhigh}
            className="btn btn-warning mt-1 fw-medium"
          >
             Least No of Universities
          </button>
          <button
            onClick={toggleDivlow}
            className="btn btn-warning mt-1 mb-1 fw-medium"
          >
            Most No of Universities
          </button>
        </div>
      </div>
      <div className="data-view pt-5">
        <div>
        {ishighVisible && <ButtonClickLow />}
        {islowVisible && <ButtonClickHigh />}

        <SearchCountry search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
