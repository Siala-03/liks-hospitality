import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CoursesIndex } from './pages/CoursesIndex';
import { CourseDetail } from './pages/CourseDetail';
import { Admissions } from './pages/Admissions';
import { CareerPathways } from './pages/CareerPathways';
import { FAQs } from './pages/FAQs';
import { Contact } from './pages/Contact';
import { Register } from './pages/Register';
export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/career-pathways" element={<CareerPathways />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>);

}