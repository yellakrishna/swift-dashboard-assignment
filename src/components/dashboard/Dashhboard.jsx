import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../seachbar/SearchBar";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // 🔍 Apply Search
  const filtered = comments.filter((item) =>
    [item.name, item.email, item.body].some((field) =>
      field.toLowerCase().includes(search)
    )
  );

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key !== key) {
        return { key, direction: "asc" };
      } else if (prev.direction === "asc") {
        return { key, direction: "desc" };
      } else if (prev.direction === "desc") {
        return { key: null, direction: null }; 
      } else {
        return { key, direction: "asc" };
      }
    });
  };

  const total = filtered.length;

  return (
    <>
      <div className="container">
        {/* Navbar */}
        <div className="navbar">
          <div className="nav-logo">SWIFT</div>
          <div className="nav-user">EH</div>
        </div>

        {/* Main Container */}
        <div className="dashboard-container">
          <div className="controls">
            <div className="sort-controls">
              <button onClick={() => handleSort("postId")}>Sort Post ID</button>
              <button onClick={() => handleSort("name")}>Sort Name</button>
              <button onClick={() => handleSort("email")}>Sort Email</button>
            </div>

            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <Table
            data={filtered}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
            pageSize={pageSize}
            currentPage={currentPage}
          />

          <Pagination
            total={total}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
