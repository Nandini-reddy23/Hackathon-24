// src/FeedbackForm.js
import React from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedbackForm.css'; // Import your CSS file

const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            teacherName: '',
            rating: '',
            comments: '',
        },
        onSubmit: values => {
            console.log('Feedback submitted:', values);
            // You can handle form submission here, like sending it to an API
        },
    });

    return (
        <div className="feedback-container">
            <h2>Teacher Feedback Form</h2>
            <form onSubmit={formik.handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="teacherName">Teacher Name</label>
                    <input
                        id="teacherName"
                        name="teacherName"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.teacherName}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select
                        id="rating"
                        name="rating"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Poor</option>
                        <option value="1">1 - Terrible</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea
                        id="comments"
                        name="comments"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.comments}
                        rows="4"
                        placeholder="Your comments here..."
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
