import React from "react";

function CourseCard({ course, onRegister, onContact }) {
  return (
    <div className="course-card shadow d-flex flex-column" style={{width: '320px', height:  '420px', border: '1px solid #dee2e6',
        borderRadius: '10px', 
        boxSizing: 'border-box',
        margin: '15px',
        overflow: 'hidden'
      }}>
      <div className="course-image" style={{height: '50%',backgroundImage: `url(${course.image})`, backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat'}}/>
      <div className="course-description d-flex flex-column p-3" style={{height: '50%',justifyContent: 'space-between' }}>
        <div>
          <h4 className="fw-bold mb-3">{course.name}</h4>
          
          <div className="d-flex justify-content-between mb-3">
            {course.onlineAvailable && (
              <div>
                <h6>Online</h6>
                <p className="mb-1">Duration: {course.onlineDuration}</p>
                <button 
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => onRegister({...course, type: "Online"})}
                >
                  Register Online
                </button>
              </div>
            )}
            
            {course.offlineAvailable && (
              <div>
                <h6>Offline</h6>
                <p className="mb-1">Duration: {course.offlineDuration}</p>
                <button 
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => onRegister({...course, type: "Offline"})}
                >
                  Register Offline
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <button 
            className="btn btn-primary"
            onClick={() => onContact(course)}
          >
            Contact for More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;