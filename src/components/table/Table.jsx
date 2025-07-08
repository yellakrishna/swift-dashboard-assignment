import React from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";

const Table = ({ data, sortConfig, pageSize, currentPage }) => {
  let sortedData = [...data];

  const navigate = useNavigate();

  if (sortConfig.key && sortConfig.direction) {
    sortedData.sort((a, b) => {
      let fieldA = a[sortConfig.key].toLowerCase?.() || a[sortConfig.key];
      let fieldB = b[sortConfig.key].toLowerCase?.() || b[sortConfig.key];

      if (fieldA < fieldB) return sortConfig.direction === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const start = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(start, start + pageSize);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr
              key={item.id}
              onClick={() => navigate(`/profile/${item.id}`)}
              className="clickable-row"
            >
              <td>{item.postId}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td className="truncate-comment" title={item.body}>{item.body}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
