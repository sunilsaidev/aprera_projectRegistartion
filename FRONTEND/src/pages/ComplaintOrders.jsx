import React from "react";
import { useState } from "react";
import "../styles/ComplaintOrders.css";

/* ✅ Use public files as URLs (DO NOT import them) */
const complaint2 = "/assets/pdfs/Complaint No 2 of 2024.pdf";
const complaint3 = "/assets/pdfs/Complaint No 3 of 2024.pdf";
const complaint12 = "/assets/pdfs/Complaint No 12 of 2024.pdf";
const complaint36 = "/assets/pdfs/Complaint No 36 of 2021.pdf";
const complaint38 = "/assets/pdfs/Complaint No 38 of 2024.pdf";
const complaint90 = "/assets/pdfs/Complaint No 90 of 2025.pdf";
const complaint176 = "/assets/pdfs/Complaint No 176 of 2025.pdf";
const complaint242 = "/assets/pdfs/Complaint No 242 of 2025.pdf";
const IAcomplaint36 = "/assets/pdfs/I A No 10 of 2025 in Complaint No 36 of 2021.pdf";
const complaint201 = "/assets/pdfs/Complaint No 201 of 2025.pdf";
const complaint20 = "/assets/pdfs/Complaint No 20 of 2024.pdf";
const complaint106 = "/assets/pdfs/Complaint No 106 of 2025.pdf";
const complaint115 = "/assets/pdfs/Complaint No 115 of 2025.pdf";

/* complaintData */
const complaintData = [
  { id: 1, no: "Complaint No 2 of 2024", date: "04-08-2025", file: complaint2 },
  { id: 2, no: "Complaint No 3 of 2024", date: "04-08-2025", file: complaint3 },
  { id: 3, no: "Complaint No 12 of 2024", date: "04-08-2025", file: complaint12 },
  { id: 4, no: "Complaint No 36 of 2021", date: "06-11-2025", file: complaint36 },
  { id: 5, no: "Complaint No 38 of 2024", date: "04-08-2025", file: complaint38 },
  { id: 6, no: "Complaint No 90 of 2025", date: "12-12-2025", file: complaint90 },
  { id: 7, no: "Complaint No 176 of 2025", date: "11-12-2025", file: complaint176 },
  { id: 8, no: "Complaint No 242 of 2025", date: "28-11-2025", file: complaint242 },
  { id: 9, no: "I A No 10 of 2025 in Complaint No 36 of 2021", date: "06-11-2025", file: IAcomplaint36 },
  { id: 10, no: "Complaint No 201 of 2025", date: "06-10-2025", file: complaint201 },
  { id: 11, no: "Complaint No 20 of 2024", date: "22-09-2025", file: complaint20 },
  { id: 12, no: "Complaint No 106 of 2025", date: "01-09-2025", file: complaint106 },
  { id: 13, no: "Complaint No 115 of 2025", date: "01-09-2025", file: complaint115 },
  // Remaining rows already point to complaint115 → OK
];

const ComplaintOrders = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = complaintData.filter((item) =>
    item.no.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * entries;
  const pageData = filteredData.slice(startIndex, startIndex + entries);
  const totalPages = Math.ceil(filteredData.length / entries);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="complaint-container">
      <div className="complaint-breadcrumb">
        You are here : <span>Home</span> / <span>Notifications</span> /{" "}
        <b>Complaint Orders</b>
      </div>

      <h2 className="complaint-title">Complaint Orders</h2>
      <div className="complaint-title-line"></div>

      <div className="complaint-controls">
        <div>
          Show{" "}
          <select
            value={entries}
            onChange={(e) => {
              setEntries(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>{" "}
          entries
        </div>

        <div>
          Search:{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <table className="complaint-table-main">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Complaint No</th>
            <th>Date</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody>
          {pageData.map((item, index) => (
            <tr key={item.id}>
              <td>{startIndex + index + 1}</td>
              <td>
                {item.no}
                {item.id <= 9 && (
                  <span className="complaint-new-badge">NEW</span>
                )}
              </td>
              <td>{item.date}</td>
              <td>
                {item.file ? (
                  <a href={item.file} target="_blank" rel="noreferrer">
                    ⬇️
                  </a>
                ) : (
                  <span className="complaint-no-file">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="complaint-pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>

        <button
          className={currentPage === 1 ? "complaint-active" : ""}
          onClick={() => goToPage(1)}
        >
          1
        </button>

        <button
          className={currentPage === totalPages ? "complaint-active" : ""}
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplaintOrders;
