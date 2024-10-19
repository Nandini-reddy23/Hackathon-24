// src/CourseSelectionForm.js
import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import './courseSelection.css';

const availableCourses = {
    theory: [
        { id: 1, name: 'Data Structures' },
        { id: 2, name: 'Algorithms' },
        { id: 3, name: 'Database Systems' },
        { id: 4, name: 'Web Development' },
        { id: 5, name: 'Operating Systems' },
        { id: 6, name: 'Software Engineering' },
    ],
    labs: [
        { id: 1, name: 'Data Structures Lab' },
        { id: 2, name: 'Web Development Lab' },
        { id: 3, name: 'Database Systems Lab' },
    ],
};

const teachers = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Prof. Johnson' },
    { id: 3, name: 'Dr. Lee' },
];

const CourseSelectionForm = () => {
    const formik = useFormik({
        initialValues: {
            theoryCourses: [],
            labCourses: [],
            teacherAssignments: {},
        },
        onSubmit: values => {
            console.log('Form data', values);
            // You can handle form submission here, like sending it to an API
        },
    });

    const handleCourseChange = (courseType, selectedCourses) => {
        formik.setFieldValue(courseType, selectedCourses);
    };

    const handleTeacherChange = (courseId, teacherId) => {
        formik.setFieldValue('teacherAssignments', {
            ...formik.values.teacherAssignments,
            [courseId]: teacherId,
        });
    };

    return (
        <form onSubmit={formik.handleSubmit} className="container mt-5">
            <h2>Course Selection</h2>

            <div>
                <h4>Theory Courses (Select 4)</h4>
                {availableCourses.theory.map(course => (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            id={`theory-${course.id}`}
                            value={course.id}
                            onChange={e => {
                                const selectedCourses = e.target.checked
                                    ? [...formik.values.theoryCourses, course.id]
                                    : formik.values.theoryCourses.filter(c => c !== course.id);
                                handleCourseChange('theoryCourses', selectedCourses);
                            }}
                            disabled={formik.values.theoryCourses.length >= 4 && !formik.values.theoryCourses.includes(course.id)}
                        />
                        <label htmlFor={`theory-${course.id}`}>{course.name}</label>

                        <select
                            onChange={e => handleTeacherChange(course.id, e.target.value)}
                            className="ml-2"
                        >
                            <option value="">Select Teacher</option>
                            {teachers.map(teacher => (
                                <option key={teacher.id} value={teacher.id}>
                                    {teacher.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div>
                <h4>Lab Courses (Select 2)</h4>
                {availableCourses.labs.map(course => (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            id={`lab-${course.id}`}
                            value={course.id}
                            onChange={e => {
                                const selectedCourses = e.target.checked
                                    ? [...formik.values.labCourses, course.id]
                                    : formik.values.labCourses.filter(c => c !== course.id);
                                handleCourseChange('labCourses', selectedCourses);
                            }}
                            disabled={formik.values.labCourses.length >= 2 && !formik.values.labCourses.includes(course.id)}
                        />
                        <label htmlFor={`lab-${course.id}`}>{course.name}</label>

                        <select
                            onChange={e => handleTeacherChange(course.id, e.target.value)}
                            className="ml-2"
                        >
                            <option value="">Select Teacher</option>
                            {teachers.map(teacher => (
                                <option key={teacher.id} value={teacher.id}>
                                    {teacher.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
};

export default CourseSelectionForm;
