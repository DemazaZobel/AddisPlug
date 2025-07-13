import React from "react";
import logo from "../assets/wholeLogo.png"; // Replace with your actual logo path

export default function Footer() {
  return (
    <div className="bg-primary text-white py-2 px-4 text-center">
      {/* Logo, Text, and Socials */}
      <div className="flex flex-col items-center mb-2">
        <img src={logo} alt="addisplug Logo" className="w-26 h-[200px]" />

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 hover:text-secondary transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.7-1.6 1.5v1.9h2.7l-.4 2.9h-2.3v7.05A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 hover:text-secondary transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 4.5c-.8.4-1.6.6-2.5.8a4.1 4.1 0 001.8-2.3c-.8.5-1.7.9-2.6 1.1A4.1 4.1 0 0012 8.5c0 .3 0 .6.1.9C8.3 9.2 5 7.4 2.9 4.6a4.1 4.1 0 00-.6 2.1c0 1.4.7 2.6 1.8 3.3a4 4 0 01-1.9-.5v.1c0 2 1.4 3.7 3.2 4.1a4.1 4.1 0 01-1.8.1c.5 1.5 2 2.5 3.7 2.5a8.3 8.3 0 01-5.1 1.8c-.3 0-.6 0-.9-.1A11.7 11.7 0 008 19" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 hover:text-secondary transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 hover:text-secondary transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.11 1 2.5 1s2.48 1.1 2.48 2.5zM0 8h5v13H0V8zm7.5 0h4.7v1.8h.1c.7-1.3 2.4-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.3V21H17V14c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V21H7.5V8z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 hover:text-secondary transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-0.9C16.7 5 12 5 12 5s-4.7 0-7 .1c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2s-.2 1.6-.2 3.3v1.3c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.7.8 1.6.8 2 0.9 2.3.1 7 .1 7 .1s4.7 0 7-.1c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.3c0-1.6-.2-3.3-.2-3.3zM9.8 14.6V9.4l4.9 2.6-4.9 2.6z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-4 text-secondary mt-4">
        <p>Email: contact@yourcompany.com</p>
        <p>Phone: +251 912 345 678</p>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-300">
        © {new Date().getFullYear()} AddisPlug. All rights reserved.
      </div>
    </div>
  );
}
