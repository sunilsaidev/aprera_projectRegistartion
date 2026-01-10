import React from "react";
import "../styles/formsdownload.css";

import application from "../../public/assets/pdfs/application.pdf";
import application1 from "../../public/assets/pdfs/application1.pdf";
import Withdraw from "../../public/assets/pdfs/Withdraw.pdf";
import ChangeForm from "../../public/assets/pdfs/ChangeForm.pdf";

const formsData = [
  { category: "Project", code: "P1", subject: "Web Application Format for Project Individual Registration", file: application },
  { category: "Project", code: "P2", subject: "Web Application for Project Other-than Individual Registration", file: application1 },
  { category: "Project", code: "P3", subject: "Withdrawal Form - Web Application format for Withdrawal", file: Withdraw },
  { category: "Project", code: "P4", subject: "CR Form - Web Application format for Change Requests", file: ChangeForm },
  { category: "Project", code: "P5", subject: "Area Details of Apartments", file: "../../public/assets/excel/FlatDetails.xlsx" },
  { category: "Project", code: "P6", subject: "Area Details of Villas", file: "../../public/assets/excel/VillaDetailsTemplate.xlsx" },
  { category: "Project", code: "P7", subject: "Area Details of Plots", file: "../../public/assets/excel/PlotDetails.xlsx" },
  { category: "Project", code: "P8", subject: "Area Details of Commercial", file: "../../public/assets/excel/Commercial.xlsx" },
  { category: "Project", code: "P9", subject: "Statement of Source of Funds", file: "../../public/assets/excel/Source.docx" },
  { category: "Project", code: "P10", subject: "No Litigations Affidavit", file: "../../public/assets/excel/Casepending.pdf" },
  { category: "Project", code: "P11", subject: "FORM-B", file: "../../public/assets/excel/FormB.docx" },
  { category: "Project", code: "P12", subject: "Sample Affidavit (Promoter)", file: "../../public/assets/excel/Promoter.pdf" },
  { category: "Project", code: "P13", subject: "Documents Checklist", file: "../../public/assets/excel/Checklist.pdf" },
  { category: "Project", code: "P14", subject: "Allotment Letter", file: "../../public/assets/excel/Allotment.docx" },

  { category: "Agent", code: "A1", subject: "Web Application for Agent Individual", file: "../../public/assets/excel/ApplicationA.pdf" },
  { category: "Agent", code: "A2", subject: "Web Application for Agent Other-than Individual", file: "../../public/assets/excel/ApplicationB.pdf" },
  { category: "Agent", code: "A3", subject: "Sample Affidavit (Agent)", file: "../../public/assets/excel/AgentSample.pdf" },
  { category: "Agent", code: "A4", subject: "No Litigations Affidavit", file: "../../public/assets/excel/Litigation.pdf" },
  { category: "Agent", code: "A5", subject: "Documents Checklist", file: "../../public/assets/excel/ChecklistA.pdf" },
  { category: "Complaint", code: "C1", subject: "Web Application for Complaint Registration", file: "../../public/assets/excel/ApplicationC.pdf" },

  { category: "Architect Certificate", code: "F1B", subject: "Buildings – Ongoing Project", file: "../../public/assets/excel/Form1.docx" },
  { category: "Architect Certificate", code: "F1L", subject: "Layouts – Ongoing Project", file: "../../public/assets/excel/FormL.docx" },

  { category: "Engineer Certificate", code: "F2B", subject: "Buildings – Withdrawal", file: "../../public/assets/excel/Form2.docx" },
  { category: "Engineer Certificate", code: "F2L", subject: "Layouts – Withdrawal", file: "../../public/assets/excel/Form2L.docx" },
  { category: "Engineer Certificate", code: "F2L", subject: "Layouts – Withdrawal", file: "../../public/assets/excel/Form2L.docx" },
  { category: "Form 5", code: "F5", subject: "Annual Report by CA/Auditor", file: "../../public/assets/excel/Form5.pdf" },
  { category: "Form 6", code: "F6", subject: "Affidavit on Structural Defects", file: "../../public/assets/excel/Form6.pdf" },
  { category: "Form 7", code: "F7", subject: "Affidavit – Unsold Flats", file: "../../public/assets/excel/Form7.pdf" },
  { category: "Form E", code: "FE", subject: "Extension of Registration", file: "../../public/assets/excel/FormE.pdf" },

  { category: "Form 8 - Bank A/c's Forms", code: "8A", subject: "Change in RERA Bank Account", file: "../../public/assets/excel/8A.pdf" },
  { category: "Form 8 - Bank A/c's Forms", code: "8B", subject: "Bank Balance Certificate", file: "../../public/assets/excel/8B.pdf" },
  { category: "Form 8 - Bank A/c's Forms", code: "8C", subject: "Confirmation Letter", file: "../../public/assets/excel/8C.pdf" },
  { category: "Form 8 - Bank A/c's Forms", code: "8D", subject: "Fund Transfer Certificate", file: "../../public/assets/excel/8D.pdf" },
];

const categoryCounts = formsData.reduce((acc, cur) => {
  acc[cur.category] = (acc[cur.category] || 0) + 1;
  return acc;
}, {});

const FormsDownload = () => {
  return (
    <div className="forms-wrapper">
      <div className="forms-breadcrumb">
        You are here : <span>Home</span> / <span>Registration</span> / <b>Forms Download</b>
      </div>

      <h2 className="formdownload">Forms Download</h2>

      <table className="forms-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Form Code</th>
            <th>Subject</th>
            <th>Download</th>
            <th>Sample</th>
          </tr>
        </thead>

        <tbody>
          {formsData.map((item, index) => {
            const isFirst =
              index === 0 || formsData[index - 1].category !== item.category;

            return (
              <tr key={index}>
                {isFirst && (
                  <td className="forms-category" rowSpan={categoryCounts[item.category]}>
                    {item.category}
                  </td>
                )}

                <td className="forms-code">{item.code}</td>
                <td>{item.subject}</td>

                {/* DIRECT OPEN */}
                <td className="forms-icon">
                  {item.file && (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ⬇️
                    </a>
                  )}
                </td>

                <td className="forms-icon"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormsDownload;