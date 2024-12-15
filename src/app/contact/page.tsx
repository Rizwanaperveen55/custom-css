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
            Welcome to Sahiba's Kitchen! Our journey began two years ago when Kanwal Samuel, a passionate home chef, started creating delightful dishes from the comfort of home. Today, we proudly serve as a popular restaurant, offering a variety of Pakistani and Chinese cuisines, along with mouth-watering BBQ and much more. We serve delicious, healthy food with love, aiming to provide an unforgettable dining experience.
          </p>
        </div>

        <div className="commentsCard">
          <h2 className="subtitle">Customer Comments</h2>
          <div className="commentsGrid">
            <div className="commentBox">
              <p><strong>Saima:</strong> &quot;The biryani here is absolutely delicious! It’s full of flavor and cooked to perfection.&quot;</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="commentBox">
              <p><strong>Dr. Madiha:</strong> &quot;I loved the paratha, Highway style Karahi! Parathas are crispy on the outside and soft on the inside. Highly recommended!&quot;</p>
              <div className="stars">★★★★★</div>
            </div>
            <div className="commentBox">
              <p><strong>Saeeda Sana:</strong> &quot;The Mutton karahi is my favorite! The spices are just right, making it a must-try dish.&quot;</p>
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
            At Sahiba's Kitchen, our mission is to provide nutritious meals made from the freshest ingredients. We believe that food should not only taste good but also nourish the body and soul.
          </p>
          <Link href="/" className="link">Back to Home</Link>
        </div>
      </div>

      <style jsx>{`
        .background-image {
          background-image: url('/images');
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
          text-align: justify;
        }

        .aboutWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          font-size: 1.2rem;
        }

        .aboutCard, .commentsCard, .serviceCard {
          padding: 40px;
          border: 8rem solid #ff6347;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          margin: 20px 0;
          width: 150%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .commentsCard {
          background-color: rgba(240, 240, 240, 0.8);
        }

        .commentsGrid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .title {
          font-size: 3.6rem;
          color: #333;
          margin-bottom: 1rem;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          position: relative;
        }

        .title::after {
          content: '';
          display: block;
          width: 60px;
          height: 5px;
          background-color: #ff6347;
          margin: 10px auto;
          border-radius: 5px;
        }

        .subtitle {
          font-size: 2.8rem;
          color: #ff6347;
          margin-top: 2rem;
          font-family: 'Poppins', sans-serif;
          text-transform: uppercase;
          text-align: center;
          position: relative;
        }

        .subtitle::before {
          content: '';
          display: block;
          width: 40px;
          height: 3px;
          background-color: #ff6347;
          margin: 10px auto;
          border-radius: 5px;
        }

        .description, .text {
          font-size: 1.5rem;
          color: #555;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          text-align: center;
        }

        .commentBox {
          padding: 15px;
          border: 1px solid #ff6347;
          border-radius: 10px;
          background-color: #A7E6FF;
          position: relative;
          text-align: center;
          font-size: 1.5rem;
        }

        .stars {
          color: #ff6347;
          font-size: 1.5rem;
          margin-top: 5px;
        }

        .iconText {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 15px 0;
          padding: 10px;
          background-color: #f1f1f1;
          border-radius: 5px;
          width: 100%;
          font-size: 3.5rem;
        }

        .icon {
          font-size: 2rem;
          margin-right: 10px;
        }

        .link {
          display: inline-block;
          margin-top: 2rem;
          padding: 12px 24px;
          background-color: #ff6347;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s;
          font-size: 1.5rem;
        }

        .link:hover {
          background-color: #e5533e;
          transform: scale(1.05);
        }

        @media (max-width: 1200px) {
          .aboutCard, .commentsCard, .serviceCard {
            padding: 30px;
            margin: 15px 5%;
          }
        }

        @media (max-width: 900px) {
          .aboutCard, .commentsCard, .serviceCard {
            padding: 20px;
            margin: 10px 2%;
          }

          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 2rem;
          }

          .description, .text {
            font-size: 1.2rem;
          }

          .link {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 600px) {
          .aboutCard, .commentsCard, .serviceCard {
            padding: 15px;
            margin: 5px 1%;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.8rem;
          }

          .description, .text {
            font-size: 1rem;
            text-align: justify;
          }

          .link {
            font-size: 1rem;
          }
        }

        @media (max-width: 300px) {
          .title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 1.6rem;
          }

          .description, .text {
            font-size: 0.7rem;
          }

          .link {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
