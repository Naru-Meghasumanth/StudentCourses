import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import ContactForm from "./ContactForm";

function DashBoard() {
  const allCourses = [
    {
      id: 1,
      name: "Full Stack Development",
      image: "/assets/fsd-1.png",
      onlineDuration: "6 months",
      offlineDuration: "5 months",
      onlineAvailable: true,
      offlineAvailable: true,
      description: "Learn full stack development with modern technologies"
    },
    {
      id: 2,
      name: "DevOps",
      image: "/assets/devops.png",
      onlineDuration: "4 months",
      offlineDuration: "3.5 months",
      onlineAvailable: true,
      offlineAvailable: false,
      description: "Master DevOps tools and practices"
    },
    {
      id: 3,
      name: "Power BI",
      image: "/assets/powerbi.png",
      onlineDuration: "3 months",
      offlineDuration: "2.5 months",
      onlineAvailable: false,
      offlineAvailable: true,
      description: "Become proficient in data visualization"
    },
    {
      id: 4,
      name: "AI-ML",
      image: "/assets/aiml.png",
      onlineDuration: "8 months",
      offlineDuration: "7 months",
      onlineAvailable: true,
      offlineAvailable: true,
      description: "Learn artificial intelligence and machine learning"
    }
  ];

  const [courseNameFilter, setCourseNameFilter] = useState("All");
  const [courseTypeFilter, setCourseTypeFilter] = useState("All");
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = allCourses.filter(course => {
    const nameMatch = courseNameFilter === "All" || course.name === courseNameFilter;
    let typeMatch = true;
    if (courseTypeFilter === "Online") {
      typeMatch = course.onlineAvailable;
    } else if (courseTypeFilter === "Offline") {
      typeMatch = course.offlineAvailable;
    }
    return nameMatch && typeMatch;
  });

  const handleRegister = (course) => {
    setRegisteredCourses([...registeredCourses, course]);
    alert(`You have registered for ${course.name} (${course.type})`);
  };

  const handleContact = (course) => {
    setSelectedCourse(course);
    setShowContactForm(true);
  };

  const handleContactSubmit = (formData, course) => {
    // In a real app, this would send to your backend or EmailJS
    console.log("Contact form submitted:", {
      course: course.name,
      ...formData,
      to: "example@gmail.com"
    });
  };

  return (
    <div className="container-fluid mt-4 mb-4">
      <div className="row">
        
      <div className="d-md-flex col-12 justify-content-center  gap-4 mt-4 mb-4">
        <div className="d-flex align-items-center">
          <label className="form-label me-2">Course-Type:</label>
          <select 
            className="form-select" 
            style={{width: '150px'}} 
            value={courseTypeFilter}
            onChange={(e) => setCourseTypeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="d-flex align-items-center">
          <label className="form-label me-2">Course:</label>
          <select 
            className="form-select" 
            style={{width: '200px'}} 
            value={courseNameFilter}
            onChange={(e) => setCourseNameFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Full Stack Development">Full Stack</option>
            <option value="DevOps">DevOps</option>
            <option value="Power BI">Power BI</option>
            <option value="AI-ML">AI-ML</option>
          </select>
        </div>
        
      </div>

      <div className="d-flex flex-wrap justify-content-center courses-container">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onRegister={handleRegister}
              onContact={handleContact}
            />
          ))
        ) : (
          <div className="alert alert-info mt-4">
            No courses found matching your filters.
          </div>
        )}
      </div>

      {registeredCourses.length > 0 && (
        <div className="mt-5">
          <h3>Your Registered Courses</h3>
          <ul className="list-group">
            {registeredCourses.map((course, index) => (
              <li key={index} className="list-group-item">
                {course.name} ({course.type})
              </li>
            ))}
          </ul>
        </div>
      )}

      <ContactForm
        show={showContactForm}
        handleClose={() => setShowContactForm(false)}
        course={selectedCourse}
        handleSubmit={handleContactSubmit}
      />
      </div>
    </div>
  );
}

export default DashBoard;