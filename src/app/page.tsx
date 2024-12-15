'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="background-image"></div> {/* Background image div */}

        <div className="content">
          <div className="logo-container">
            <Image
              src="/images/download.jpg" // Ensure this path is correct
              alt="Kitchen Logo"
              width={200}  // Updated to 200px
              height={200}
              className="logo"
              priority
            />
          </div>

          <h1 className="heading">Welcome to Sahiba&apos;s Kitchen</h1>
          <p className="paragraph">
            Welcome to Sahiba&apos;s Kitchen, where flavor meets tradition! Our culinary journey is dedicated to bringing you a delightful experience, blending authentic recipes with a modern twist. From the moment you step into our warm and inviting atmosphere, you’ll be greeted with the rich aromas of freshly prepared dishes made from the finest local ingredients. Whether you’re here for a cozy family meal, a celebratory gathering, or a quick bite, our diverse menu has something for everyone. Join us as we take you on a gastronomic adventure that celebrates the love of food and the joy of togetherness. Experience the heart of our kitchen and let us create unforgettable memories for you and your loved ones!
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
          text-align: center;
          border: 8rem solid transparent;
          border-left-color: #FF6500;
          border-right-color: #FF6500;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-image: url('/bg resturant.jpeg');
          background-size: cover;
          background-position: center;
          border-radius: 20px;
        }

        .content {
          z-index: 2;
          position: relative;
          padding: 2rem;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 15px solid green;
          box-shadow: 0 0 20px rgba(255, 165, 0, 0.8);
          animation: rotateLogo 20s infinite;
        }

        .logo {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        @keyframes rotateLogo {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .heading {
          font-size: 4rem;
          color: #FF6500;
          margin-bottom: 1.5rem;
          font-family: 'Arial', sans-serif;
        }

        .paragraph {
          font-size: 1.6rem;
          color: black;
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: justify;
        }

        /* Media Queries for Different Screen Sizes */

        @media (max-width: 768px) {
          .logo-container {
            width: 180px;
            height: 180px;
          }

          .heading {
            font-size: 1.5rem;
          }

          .paragraph {
            font-size: 1rem;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .logo-container {
            width: 150px;
            height: 150px;
          }

          .heading {
            font-size: 1rem;
          }

          .paragraph {
            font-size: 0.5rem;
          }

          .card {
            padding: 2rem;
            border-left-width: 2rem;
            border-right-width: 2rem;
          }
        }

        @media (max-width: 300px) {
          .logo-container {
            width: 130px;
            height: 130px;
          }

          .heading {
            font-size: 1rem;
          }

          .paragraph {
            font-size: 0.5rem;
          }

          .card {
            padding: 1.5rem;
            border-left-width: 4rem;
            border-right-width: 4rem;
          }
        }

        @media (max-width: 230px) {
          .logo-container {
            width: 100px;
            height: 100px;
          }

          .heading {
            font-size: 0.6rem;
          }

          .paragraph {
            font-size: 0.3rem;
          }

          .card {
            padding: 1rem;
            border-left-width: 3rem;
            border-right-width: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
