"use client"; 

import React from 'react';

export default function Feedback() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log('Feedback submitted');
  };

  return (
    <>
      <style jsx>{`
        .background-image {
          background-image: url('/bg2.jpeg');
          background-size: cover;
          background-position: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.7; 
        }

        section {
          padding: 2rem; /* Adjusted for better spacing */
          text-align: center;
          display: flex;
          justify-content: center; /* Ensure section content is centered */
          align-items: center;
          min-height: 100vh; /* Center vertically */
        }

        .card {
          background: linear-gradient(135deg, #4169e1, #ffa500, #d3d3d3);
          border-radius: 2rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          padding: 3rem;
          max-width: 1000px;
          height: 800px;
          width: 100%;
          margin: 0 auto; /* Center the card */
          border: 5rem solid #26355D; /* Border thickness */
          text-align: center;
          text-align:justify;
        }

        .header {
          font-size: 3rem;
          color: black;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .paragraph {
          font-size: 1.8rem;
          color: black;
          margin-bottom: 2rem;
          line-height: 1.5;
          text-align: justify;
        }

        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .input,
        .textarea {
          padding: 1.2rem;
          margin: 0.5rem 0;
          width: 100%;
          max-width: 600px;
          height: 50px;
          border-radius: 8px;
          border: 1px solid #ccc;
          transition: border-color 0.3s;
          font-size: 1.2rem;
        }

        .textarea {
          height: 170px;
          font-size: 1.2rem;
        }

        .button {
          padding: 2rem 3rem;
          background-color: #0B192C;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
          font-size: 1.2rem;
          margin: 12px;
        }

        .button:hover {
          background-color: #357ABD;
        }

        /* Media Queries */
        @media (max-width: 1200px) {
          .header {
            font-size: 2.8rem;
          }

          .paragraph {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 900px) {
          .header {
            font-size: 2.4rem;
          }

          .paragraph {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 730px) {
          .card {
            padding: 2rem; 
            max-width: 90%/* Card is more responsive */
          }

          .header {
            font-size: 2rem;
          }

          .paragraph {
            font-size: 1.1rem;
          }

          .input,
          .textarea {
            max-width: 100%; 
          }

          .button {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 550px) {
          .card {
            padding: 1.5rem;
            max-width: 95%;
          }

          .header {
            font-size: 1.8rem;
          }

          .paragraph {
            font-size: 0.8rem;
          }

          .input,
          .textarea {
            font-size: 1rem; /* Adjust input and textarea font size */
          }

          .button {
            padding: 1rem 2rem; /* Adjust button padding */
            font-size: 1rem;
          }
        }

        @media (max-width: 230px) {
          .header {
            font-size: 1.5rem;
          }

          .paragraph {
            font-size: 0.9rem;
          }

          .input,
          .textarea {
            padding: 0.8rem;
            font-size: 0.9rem; /* Adjust input and textarea font size */
          }

          .button {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="background-image"></div>
      <section>
        <div className="card">
          <h1 className="header">Feedback</h1>
          <p className="paragraph">
            We value your feedback! Please share your thoughts and suggestions to help us improve our services.
          </p>
          <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Your Name" className="input" />
            <textarea placeholder="Your Feedback" className="textarea"></textarea>
            <button type="submit" className="button">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
