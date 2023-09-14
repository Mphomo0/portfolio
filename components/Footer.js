"use client"

import React from 'react'

// Define the Footer functional component
const Footer = () => {
  return (
    < section >
     {/* Start of the footer section */ }
      <div className="footer">
         {/* Copyright notice with the current year dynamically generated */}
        <p>&copy; Mpho Moipolai {new Date().getFullYear()}</p>
      </div>
      {/* Inline styles for the .footer class */}
      <style jsx>
        {`

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #474e5d;
   color: white;
   text-align: center;
}
`}
      </style>
    </section >
  )
}

export default Footer