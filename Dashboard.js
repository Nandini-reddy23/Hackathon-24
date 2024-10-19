import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({ theory: [], lab: [] });

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const handleCourseSelect = (course) => {
    if (course.type === 'theory' && selectedCourses.theory.length < 4) {
      setSelectedCourses((prev) => ({ ...prev, theory: [...prev.theory, course] }));
    } else if (course.type === 'lab' && selectedCourses.lab.length < 2) {
      setSelectedCourses((prev) => ({ ...prev, lab: [...prev.lab, course] }));
    }
  };

  return (
    <div>
      <h2>Course Selection</h2>
      <div>
        {courses.map((course) => (
          <div key={course._id}>
            <h3>{course.name} - {course.type}</h3>
            <button onClick={() => handleCourseSelect(course)}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;