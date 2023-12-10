import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UnivercityContext = createContext(null);

const UnivercityContextprovider = (props) => {
  const [CountryUnivty, setCountryUnivty] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    await axios
      .get(`http://universities.hipolabs.com/search?country=`)
      .then((e) => {
        setCountryUnivty(e.data);
      });
  }
  console.log(CountryUnivty, "alll datas from num of univer");

  // find the count of the country
  const countryCounts = CountryUnivty.reduce((acc, obj) => {
    const country = obj.country;
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  console.log(countryCounts, "countryCounts"); // ex:- {countryname : number,countryname2 : number2, ....}

  console.log(Object.entries(countryCounts));
  // Include all countries with their counts
  const allCountriesWithCounts = Object.entries(countryCounts).map(
    ([country, count]) => ({ country, count })
  );

  console.log("All countries with counts:", allCountriesWithCounts); // ex:-[ { country :countryname,count:number},{ country :countryname2 ,count:number2 }, ....}

  const sortallcountry = allCountriesWithCounts.sort(function (a, b) {
    return a.count - b.count;
  });
  console.log(sortallcountry);

  return (
    <UnivercityContext.Provider value={{ sortallcountry }}>
      {props.children}
    </UnivercityContext.Provider>
  );
};

export default UnivercityContextprovider;
