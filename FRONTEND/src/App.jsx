import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./layouts/layout";

// pages
import Home from "./pages/home";
import About from "./pages/About";
import Notifications from "./pages/Notification";
import Registration from "./pages/Registration";
import Reports from "./pages/Reports";
import Registered from "./pages/Registered";
import Judgements from "./pages/Judgement";
import KnowledgeHub from "./pages/KnowledgeHub";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Apreat from "./pages/apreat";
import Recruitment from "./pages/recruitment";
import Rti from "./pages/rti";
import Promotregistration from "./pages/promotregistration";
import GuidelinesRegistration from "./pages/guidelinesRegistration";
import FeeCalculator from "./pages/feeCalculater";
import CidcandAPRERAJointNotifications from "./pages/CidcandAPRERAJointNotifications";
import Usermanual from "./pages/usermanual";
import VideoTutorial from "./pages/videoTutorial";
import MobileApp from "./pages/mobileapp";
import ProjectRegistration from "./pages/ProjectRegistration";
import Guidelines from "./pages/Guidelines";
import ProjectWizard from "./pages/ProjectWizard";
import Race from "./pages/Race";
import JudgementHub from "./pages/JudgementHub";
import PressRelease from "./pages/PressRelease";
import Testimonials from "./pages/Testimonials";
import GradingOfAgents from "./pages/GradingOfAgents";
import ChronologyOfEvents from "./pages/ChronologyOfEvents";
import AdvertisementGuidelines from "./pages/AdvertisementGuidelines";
import OurLeadership from "./pages/OurLeadership";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HyperlinkingPolicy from "./pages/HyperlinkingPolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import Disclaimer from "./pages/Disclaimer";
import Accessibility from "./pages/Accessibility";
import TermsConditions from "./pages/TermsConditions";
import RateWebsite from "./pages/RateWebsite";
import AgentRegistration from "./pages/AgentRegistration";
import AgentDetailNew from "./pages/AgentDetailNew";
import AgentDetailExisting from "./pages/AgentDetailExisting";
import ApplicantDetails from "./pages/ApplicantDetails";
import Aprera from "./pages/Aprea";
import Organogram from "./pages/organogram";
import OurServices from "./pages/ourservices";
import Statistics from "./pages/statistics";
import GOINotifications from "./pages/GOINotifications";
import GoapNotifications from "./pages/GoapNotifications";
import AuthorityNotifications from "./pages/AuthorityNotifications";
import Project from "./pages/projects";
import Agents from "./pages/Agents";
import ComplaintOrders from "./pages/ComplaintOrders";
import EvolutionOfRera from "./pages/evolutionofrera";
import AudioVisualGallery from "./pages/AudioVisualGallery";
import TaskVsTime from "./pages/taskvstime";
import VendorDataBase from "./pages/vendordatabase";
import Acf from "./pages/ACF";
import ComplaintRegistration from "./pages/complaintRegistration";
import GradingOfPromoters from "./pages/GradingOfPromotors";
import FormsDownload from "./pages/formsdownload";
import UploadDocuments from "./pages/UploadDocuments";
import Preview from "./pages/Preview";
import Payment from "./pages/Payment";
import ProjectDetails from "./pages/ProjectDetails";
import ContactUs from "./pages/ContactUs";
import DevelopmentDetails from "./pages/DevelopmentDetails";
import ProjectPreview from "./pages/ProjectPreview";
import AssociateDetails from "./pages/AssociateDetails";
import ProjectUploadDocuments1 from "./pages/ProjectUploadDocuments1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔥 Layout Route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="registration" element={<Registration />} />
          <Route path="reports" element={<Reports />} />
          <Route path="registered" element={<Registered />} />
          <Route path="judgements" element={<Judgements />} />
          <Route path="knowledge-hub" element={<KnowledgeHub />} />
          <Route path="login" element={<Login />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="apreat" element={<Apreat />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="rti" element={<Rti />} />

          <Route path="project-registration" element={<ProjectRegistration />} />
          <Route path="project-registration-wizard" element={<ProjectWizard />} />
          <Route path="project-details" element={<ProjectDetails />} />

          <Route path="associate-details" element={<AssociateDetails />} />
          <Route
            path="project-upload-documents"
            element={<ProjectUploadDocuments1 />}
          />

          <Route path="development-details" element={<DevelopmentDetails />} />
          <Route path="preview" element={<ProjectPreview />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
