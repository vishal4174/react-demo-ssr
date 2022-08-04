import { Suspense, useEffect, useState, useTransition } from "react";
import axios from "axios";
import "../App.css";
import React from "react";

const Home = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3060/posts").then((res) => {
      startTransition(() => {
        setData(res.data);
      });
    });
  }, []);

  const changeData = (e) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  const loader = {
    border: "16px solid #f3f3f3",
    borderTop: "16px solid #3498db",
    borderRadius: "50%",
    width: "12px",
    height: "12px",
    animation: "spin 2s linear infinite",
  };

  return (
    <div className="container">
      <div className="table">
        <div className="table-header">
          <div className="header__item">User ID</div>
          <div className="header__item">Address</div>
          <div className="header__item">Email</div>
          <div className="header__item">Name</div>
          <input type="text" placeholder="Search..." onChange={changeData} />
        </div>
        {isPending && (
          <Suspense>
            <h3 style={loader}>Fetching List</h3>
          </Suspense>
        )}
        <div className="table-content">
          {data
            .filter((user) => {
              if (query == "") {
                return user;
              } else if (
                user.name.toLowerCase().includes(query.toLocaleLowerCase())
              ) {
                return user;
              }
            })
            .map((res, index) => {
              return (
                <div className="table-row" key={index}>
                  <div className="table-data">{index + 1}</div>
                  <div className="table-data">{res.adderss}</div>
                  <div className="table-data">{res.email}</div>
                  <div className="table-data">{res.name}</div>
                  <div></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Home;
