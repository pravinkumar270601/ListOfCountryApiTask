import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchCountry = ({ search }) => {
  const [CountrySearch, setCountrySearch] = useState([]);
  console.log(search);
  useEffect(() => {
    getCountry();
  }, [search]);

  async function getCountry() {
    // const API_URL = `http://universities.hipolabs.com/search?name=`;
    // const response = await fetch(API_URL);
    // const responseJson = await response.json();
    // setCountrySearch(responseJson.results);

    await axios
      .get(`http://universities.hipolabs.com/search?country=${search}`)
      .then((e) => {
        setCountrySearch(e.data);
      });

    console.log(CountrySearch);
  }

  return (
    <div>
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Total University in <span className="county-name">{search}</span> </th>
              <td><span className="county-count">{CountrySearch.length}</span></td>
            </tr>
          </thead>
        </table>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name of the University</th>
            </tr>
          </thead>

          {CountrySearch.map((cont) => (
            <>
              <tbody>
                <tr>
                  <td>{cont.name}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SearchCountry;
