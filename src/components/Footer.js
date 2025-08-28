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

          {/* Telegram */}
          <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer">
            <svg className="w-6 h-6 hover:text-secondary transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.627-5.372-12-12-12zm5.797 7.568l-1.715 8.082c-.128.578-.462.722-.936.449l-2.589-1.908-1.248 1.201c-.138.138-.254.254-.518.254l.186-2.667 4.86-4.398c.212-.186-.046-.292-.33-.106l-6.02 3.788-2.594-.81c-.564-.178-.574-.564.118-.834l10.15-3.918c.472-.178.884.106.73.828z" />
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
        <p>Email: contact@addisplug.com</p>
        <p>Phone: +251 987607080</p>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-300">
        © {new Date().getFullYear()} AddisPlug. All rights reserved.
      </div>
    </div>
  );
}
