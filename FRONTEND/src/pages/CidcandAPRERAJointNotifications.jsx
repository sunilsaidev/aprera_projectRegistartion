import React from "react";
import "../styles/CidcandAPRERAJointNotification.css";

// ✅ Use public assets as URLs (DO NOT import them)
const Agencies_APRERApdf = "/assets/pdfs/Enlistment_Agencies_APRERA.pdf";
const INSTRUCTIONSpdf = "/assets/pdfs/INSTRUCTIONS_TO_APPLICANTS.pdf";
const INDIVIDUALpdf = "/assets/pdfs/INDIVIDUAL_APPLICATION_FORM.pdf";
const COMMONpdf = "/assets/pdfs/COMMON_APPLICATION_FORM.pdf";
const VENDORjpg = "/assets/images/Vendor_Registration_advertisement.jpeg";

export default function CidcandAPRERAJointNotifications() {
  const documents = [
    { id: 1, name: "Enlistment of Agencies APRERA", file: Agencies_APRERApdf },
    { id: 2, name: "Instructions to Applicants", file: INSTRUCTIONSpdf },
    { id: 3, name: "Individual Application Form", file: INDIVIDUALpdf },
    { id: 4, name: "Common Application Form", file: COMMONpdf },
    { id: 5, name: "Vendor Registration Advertisement", file: VENDORjpg },
  ];

  return (
    <div className="cidc-aprera-page-container">
      <div className="cidc-border">
        <div className="cidc-aprera-breadcrumb">
          You are here :
          <span> Home</span> / <span> Notifications</span> /{" "}
          <span> CIDC and APRERA Joint Notifications</span>
        </div>

        <div className="cidc-container">
          <h1 className="cidc-aprera-main-title">
            Notice No. 001/2018 Enlistment/Registration of Agencies of Agencies,
            Companies, Professionals etc to Render the Services to Real Estate,
            Construction and Infrastructure projects in the state of Andhra Pradesh
          </h1>

          <h2 className="cidc-aprera-section-title">Objective Of Advertisement</h2>

          <div className="cidc-aprera-vendor-db">
            <a href="/vendordatabase" className="cidc-aprera-vendor-blink">
              Vendor Database
            </a>
          </div>

          <p>
            <strong>Andhra Pradesh Real Estate Regulatory Authority (APRERA), </strong>
            an Authority set up under the Real Estate (Regulation & Development) Act,
            2016 has the prime responsibility of regulating the Real Estate business in
            the State of Andhra Pradesh.
          </p>

          <h2 className="cidc-aprera-section-title">Notification Documents</h2>

          <table className="cidc-aprera-doc-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Document</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.id}</td>
                  <td>{doc.name}</td>
                  <td>
                    <a href={doc.file} target="_blank" rel="noopener noreferrer">
                      ⬇️
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="cidc-aprera-section-title">Contact Us</h2>

          <div className="cidc-aprera-contact-box">
            <p className="cidc-aprera-contact-title">
              Enlistment Division (APRERA CELL)
            </p>
            <p>
              <strong>Email:</strong> enlistment@cidc.in, enlistmentcidc@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
