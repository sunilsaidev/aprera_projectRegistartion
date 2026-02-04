import React from "react";
import "../styles/GoapNotifications.css";

const data = [
  {
    sno: 1,
    goNo: "MS115",
    date: "27.03.2017",
    subject:
      "Andhra Pradesh Real Estate (Regulation and Development) Rules, 2017",
    file: "/assets/pdfs/goap1.pdf",
  },
  {
    sno: 2,
    goNo: "RT642",
    date: "12.09.2017",
    subject:
      "Real Estate Regulatory Authority - Rates of fees to be collected for registration of Real Estate projects and Real Estate Agents",
    file: "/assets/pdfs/goap2.pdf",
  },
  {
    sno: 3,
    goNo: "RT648",
    date: "14.09.2017",
    subject:
      "Real Estate Regulatory Authority - Rates of fees to be collected for registration of Real Estate projects and Real Estate Agents",
    file: "/assets/pdfs/goap3.pdf",
  },
  {
    sno: 4,
    goNo: "RT183",
    date: "30.03.2017",
    subject:
      "Real Estate Regulatory Authority - Constitution of search committee to suggest a panel of names for appointment as Chairperson or Member of the Authority",
    file: "/assets/pdfs/goap4.pdf",
  },
  {
    sno: 5,
    goNo: "MS169",
    date: "01.05.2017",
    subject:
      "Real Estate Regulatory Authority - Designate the Principal Secretary to Government, MA & UD Department as Regulatory Authority",
    file: "/assets/pdfs/goap5.pdf",
  },
  {
    sno: 6,
    goNo: "RT361",
    date: "17.05.2017",
    subject:
      "Real Estate Regulatory Authority - Constitution of selection committee to select a panel of eligible for appointment as Chairperson and Members of the Authority",
    file: "/assets/pdfs/goap6.pdf",
  },
  {
    sno: 7,
    goNo: "RT1653",
    date: "25.07.2017",
    subject:
      "Real Estate Regulatory Authority - Budget release for AP RERA",
    file: "/assets/pdfs/goap7.pdf",
  },
  {
    sno: 8,
    goNo: "RT579",
    date: "21.08.2017",
    subject:
      "Real Estate Regulatory Authority - Constitution of search committee to suggest a panel of names for appointment as Chairperson or Member of the Authority",
    file: "/assets/pdfs/goap8.pdf",
  },
  {
    sno: 9,
    goNo: "RT54",
    date: "17.01.2018",
    subject:
      "Real Estate Regulatory Authority - Re-constitution of search committee to suggest a panel of names for appointment as Chairperson and Members of the Authority",
    file: "/assets/pdfs/goap9.pdf",
  },
  {
    sno: 10,
    goNo: "MS270",
    date: "10.08.2018",
    subject:
      "Establishment of Real Estate Regulatory Authority - Appointment of Chairperson",
    file: "/assets/pdfs/goap10.pdf",
  },
  {
    sno: 11,
    goNo: "MS271",
    date: "10.08.2018",
    subject:
      "Establishment of Real Estate Regulatory Authority - Appointment of Members",
    file: "/assets/pdfs/goap11.pdf",
  },
  {
    sno: 12,
    goNo: "MS35",
    date: "28.01.2019",
    subject:
      "Municipal Administration & Urban Development Department – Amendment to Rule 18(2)",
    file: "/assets/pdfs/goap12.pdf",
  },
  {
    sno: 13,
    goNo: "RT104",
    date: "12.02.2019",
    subject:
      "Real Estate Regulatory Authority - Protocol for Chairperson and Members",
    file: "/assets/pdfs/goap13.pdf",
  },
  {
    sno: 14,
    goNo: "RT503",
    date: "13.08.2019",
    subject:
      "Re-constitution of Search Committee",
    file: "/assets/pdfs/goap14.pdf",
  },
  {
    sno: 15,
    goNo: "RT631",
    date: "25.09.2019",
    subject:
      "Extend the purview of the Selection Committee",
    file: "/assets/pdfs/goap15.pdf",
  },
  {
    sno: 16,
    goNo: "MS258",
    date: "19.09.2019",
    subject:
      "Establishment of Real Estate Appellate Tribunal – Appointment of Chairperson",
    file: "/assets/pdfs/goap16.pdf",
  },
  {
    sno: 17,
    goNo: "MS152",
    date: "20.07.2020",
    subject:
      "Appointment of Adjudicating Officer for holding Inquiries",
    file: "/assets/pdfs/goap17.pdf",
  },
  {
    sno: 18,
    goNo: "RT31",
    date: "09.02.2021",
    subject:
      "Full Additional Charge to the Post of Chairperson",
    file: "/assets/pdfs/goap18.pdf",
  },
  {
    sno: 19,
    goNo: "MS42",
    date: "17.03.2022",
    subject:
      "Appointment of Members – Notifications",
    file: "/assets/pdfs/goap19.pdf",
  },
  {
    sno: 20,
    goNo: "MS43",
    date: "17.03.2022",
    subject:
      "Appointment of Judicial Member in Appellate Tribunal",
    file: "/assets/pdfs/goap20.pdf",
  },
  {
    sno: 21,
    goNo: "RT124",
    date: "19.02.2023",
    subject:
      "Re-constitution of Search Committee",
    file: "/assets/pdfs/goap21.pdf",
  },
  {
    sno: 22,
    goNo: "MS94",
    date: "28.06.2023",
    subject:
      "Amendment of Andhra Pradesh RERA Rules",
    file: "/assets/pdfs/goap22.pdf",
  },
  {
    sno: 23,
    goNo: "RT506",
    date: "11.08.2023",
    subject:
      "Extension of tenure of Adjudicating Officer",
    file: "/assets/pdfs/goap15.pdf",
  },
  {
    sno: 24,
    goNo: "Rc.No.1 / 299317",
    date: "12.09.2023",
    subject:
      "Applications invited for filling posts in AP RERA",
    file: "/assets/pdfs/goap15.pdf",
  },
  {
    sno: 25,
    goNo: "RT702",
    date: "22.10.2023",
    subject:
      "Appointment of Chairperson – Appellate Tribunal",
    file: "/assets/pdfs/goap15.pdf",
  },
];

function ApreraGos() {
  return (
    <div className="goap-wrapper">
      {/* Breadcrumb */}
      <div className="goap-breadcrumb">
        You are here :
        <a href="/" className="goap-home"> Home</a> / <a>Notifications</a> / GOAP Notifications
      </div>

      {/* Title */}
      <h2 className="goap-title">APRERA GO's</h2>
      <div className="goap-underline"></div>

      {/* Table */}
      <div className="goap-table-box">
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>GO.No.</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Download</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.sno}>
                <td>{item.sno}</td>
                <td>{item.goNo}</td>
                <td>{item.date}</td>
                <td>{item.subject}</td>
                <td className="goap-download">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApreraGos;
