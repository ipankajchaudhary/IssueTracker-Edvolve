import React, { useEffect, useState } from "react";
import { fetchdata } from "./Api";
import "./App.css";


const Table = () => {
  const [alldata, setAlldata] = useState([]);
  const [filtereddata, setFiltereddata] = useState([]);
  useEffect(() => {
    fetchdata()
        .then(function (response) {
        setAlldata(response.data);
        setFiltereddata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = alldata.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFiltereddata(result);
  };

  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex w-100" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => handleSearch(event)}
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-light ">#</th>
              <th scope="col" className="text-light ">Issue Name</th>
              <th scope="col" className="text-light ">Create at</th>
              <th scope="col" className="text-light ">Created by</th>
            </tr>
          </thead>
          <tbody>
            {filtereddata.map((value, index) => {
              return (
                <tr key={value.number}>
                  <th scope="row" className="text-light ">{value.number}</th>
                  <td className="text-light ">{value.title}</td>
                <td className="text-light ">{(value.created_at).toString().split('Z')}</td>
                  <td className="text-light ">{value.user.login}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
