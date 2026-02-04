import React from "react";
import "../styles/projectWizard.css";

const ProjectWizard = ({ currentStep }) => {
  const steps = [
    "Promoter Profile",
    "Project Details",
    "Development Details",
    "Associate Details",
    "Upload Documents",
    "Preview",
    "Payment",
    "Acknowledgment"
  ];

  return (
    <div className="projwizard-stepper">
      {steps.map((label, index) => {
        const num = index + 1;
        return (
          <div key={index} className="projwizard-step-item">
            <div className={`projwizard-step-circle ${currentStep === num ? "projwizard-active" : ""}`}>
              {num}
            </div>
            <div className="projwizard-step-label">
              {label.split(" ").map((w, i) => (
                <div key={i}>{w}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectWizard;