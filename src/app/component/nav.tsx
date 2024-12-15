'use client'; // Marks the component as a Client Component

import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/feedback">Feedback</Link></li>
        </ul>
      </nav>

      <div className="content">
        {/* Add content here */}
      </div>

      <style jsx>{`
        nav {
          background-color: #050C9C; /* Green background */
          padding: 5px 10px; /* Reduced padding for a smaller height */
          position: sticky;
          top: 0;
          width: 100%;
          height:52px;
          z-index: 1000;
          display: flex;
          justify-content: space-between; /* Space between menu icon and list */
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .menu-icon {
          font-size: 28px; /* Adjust size of hamburger icon */
          cursor: pointer;
          display: none; /* Hidden by default */
          flex: 1; /* Allow the icon to take space */
          text-align: center; /* Center align icon */
        }

        ul {
          list-style: none;
          display: flex;
          width: auto; /* Adjusted for better alignment */
          transition: max-height 0.3s ease; /* Smooth transition */
          overflow: hidden; /* Hide overflow */
          padding: 0; /* Remove padding */
          margin: 0; /* Remove margin */
          flex: 2; /* Allow links to take more space */
        }

        li {
          margin: 0 10px; /* Reduced margin */
        }

        li > :global(a) {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          text-decoration: none;
          color: #fff; /* White text color */
          padding: 10px 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        li > :global(a:hover) {
          color: black; 
        }

        li > :global(a::after) {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
        }

        li > :global(a:hover::after) {
          width: 100%;
        }

        /* Media Queries for Mobile Devices */
        @media (max-width: 768px) {
          .menu-icon {
            display: block; /* Show the menu icon on mobile */
            margin: 0; /* Remove margin */
            flex: 1; /* Allow the icon to take space */
          }

          ul {
            display: ${isOpen ? 'flex' : 'none'}; /* Show or hide based on state */
            flex-direction: column;
            align-items: center;
            position: absolute;
            top: 50px; /* Adjust based on your nav height */
            left: 0;
            right: 0;
            background-color: #113065; /* Same background color */
            padding: 10px 0; /* Add some padding */
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 100; /* Ensure it appears above other content */
            max-height: ${isOpen ? '200px' : '0'}; /* Adjust max height to improve visibility */
            overflow: hidden; /* Hide overflow when closed */
            transition: max-height 0.3s ease; /* Smooth transition */
          }

          li {
            margin: 5px 0; /* Stack items vertically with less margin */
          }

          li > :global(a) {
            font-size: 16px;
            padding: 8px 12px;
          }
        }

        .content {
          padding: 20px; /* Add some padding to your content */
          margin-top: 20px; /* Add some margin to prevent overlap with the navbar */
        }
      `}</style>
    </>
  );
};

// Export the default page
export default Page;
