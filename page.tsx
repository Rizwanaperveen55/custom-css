"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="aboutWrapper">
        <div className="aboutCard">
          <h1 className="title">About Us</h1>
          <p className="description">
            Welcome to Sahiba Kitchen! Our journey began two years ago when Kanwal Samuel, a passionate home chef, started creating delightful dishes from the comfort of home. Today, we proudly serve as a popular restaurant, offering a variety of Pakistani and Chinese cuisines, along with mouth-watering BBQ and much more. We serve delicious, healthy food with love, aiming to provide an unforgettable dining experience.
          </p>
        </div>

        <div className="commentsCard">
          <h2 className="subtitle">Customer Comments</h2>
          <div className="commentsGrid">
            <div className="commentBox">
              <p><strong>Saima:</strong> "The biryani here is absolutely delicious! It’s full of flavor and cooked to perfection."</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="commentBox">
              <p><strong>Dr. Madiha:</strong> "I loved the paratha, Highway style Karahi! Parathas are crispy on the outside and soft on the inside. Highly recommended!"</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="commentBox">
              <p><strong>Saeeda Sana:</strong> "The Mutton karahi is my favorite! The spices are just right, making it a must-try dish."</p>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>

        <div className="serviceCard">
          <h2 className="subtitle">Happy Hour</h2>
          <div className="iconText">
            <div className="icon">🍹</div>
            <p className="text">Join us for Happy Hour from 5 PM to 7 PM! Enjoy special discounts on drinks and appetizers.</p>
          </div>

          <h2 className="subtitle">Dine In</h2>
          <div className="iconText">
            <div className="icon">🍽</div>
            <p className="text">Experience our cozy atmosphere by dining in. We guarantee a delightful meal served with warm hospitality.</p>
          </div>

          <h2 className="subtitle">Our Mission</h2>
          <p className="text">
            At Amyas Kitchen, our mission is to provide nutritious meals made from the freshest ingredients. We believe that food should not only taste good but also nourish the body and soul.
          </p>
          <Link href="/" className="link">Back to Home</Link>
        </div>
      </div>

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

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          position: relative;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .aboutWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .aboutCard, .commentsCard, .serviceCard {
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          margin: 20px 0;
          width: 100%;
          max-width: 600px;
          text-align: center;
        }

        .commentsCard {
          background-color: rgba(240, 240, 240, 0.8);
        }

        .title {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
          font-family: 'Poppins', sans-serif;
        }

        .subtitle {
          font-size: 1.8rem;
          color: #ff6347;
          margin-top: 2rem;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
        }

        .description, .text {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          text-align: justify;
        }

        .commentBox {
          padding: 15px;
          border: 1px solid #ff6347;
          border-radius: 10px;
          background-color: #A7E6FF;
          font-size: 1rem;
        }

        .stars {
          color: #ff6347;
          font-size: 1.2rem;
        }

        .iconText {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 15px 0;
          padding: 10px;
          background-color: #f1f1f1;
          border-radius: 5px;
        }

        .link {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 10px 20px;
          background-color: #ff6347;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .link:hover {
          background-color: #e5533e;
        }

        /* Additional Media Queries */
        @media (max-width: 600px) {
          .aboutCard, .commentsCard, .serviceCard {
            padding: 15px;
          }
          .title, .subtitle, .description, .text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
