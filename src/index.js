import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import ReportDay from './screens/ReportDay';
import ScrollToTop from './components/ScrollToTop';
import MaximScreen from './screens/MaximScreen';
import CoursesScreen from './screens/CoursesScreen';
import CourseDetail from './screens/CourseDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/report" element={<ReportDay />} />
        <Route path="/maxim" element={<MaximScreen />} />
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/course_detail" element={<CourseDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);