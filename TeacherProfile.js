// src/TeacherProfile.js
import React from 'react';
import './TeacherProfile.css'; // Import your CSS file

const teachers = [
    {
        name: "Prof. Johnson",
        ratings: [4.2, 4.4, 4.3, 4.1],
        researchProjects: [
            "Machine Learning Applications",
            "Blockchain Technology"
        ],
        patents: [
            "Blockchain for Secure Voting",
            "Method for Secure Data Transmission"
        ],
        academicBackground: "PhD in Software Engineering from Stanford"
    },
    {
        name: "Dr. Lee",
        ratings: [4.8, 4.6, 4.7, 4.9],
        researchProjects: [
            "Natural Language Processing",
            "AI Ethics in Education"
        ],
        patents: [
            "AI-Driven Student Assessment Tool",
            "Automated Grading System"
        ],
        academicBackground: "PhD in Artificial Intelligence from Carnegie Mellon University"
    },
    {
        name: "Dr. Smith",
        ratings: [4.5, 4.3, 4.6, 4.4],
        researchProjects: [
            "Cloud Computing Solutions",
            "Data Science Applications"
        ],
        patents: [
            "Cloud-Based Education Platform",
            "Data Privacy Framework"
        ],
        academicBackground: "PhD in Computer Science from MIT"
    }
];

const TeacherProfile = () => {
    return (
        <div className="profile-container">
            <h1>Teacher Profiles</h1>
            <div className="teacher-list">
                {teachers.map((teacher, index) => (
                    <div key={index} className="teacher-card">
                        <h2>{teacher.name}</h2>
                        <div className="ratings">
                            <h4>Ratings (Last 4 Years):</h4>
                            <p>{teacher.ratings.join(', ')}</p>
                        </div>
                        <div className="research">
                            <h4>Research Projects:</h4>
                            <ul>
                                {teacher.researchProjects.map((project, idx) => (
                                    <li key={idx}>{project}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="patents">
                            <h4>Patents:</h4>
                            <ul>
                                {teacher.patents.map((patent, idx) => (
                                    <li key={idx}>{patent}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="academic-background">
                            <h4>Academic Background:</h4>
                            <p>{teacher.academicBackground}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherProfile;
