"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919842043815"; // +91 98420 43815
const PREFILLED_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in learning more about admissions at Rainbow Matriculation School, Orathi. Could you please share the details?"
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`;

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="whatsapp-fab"
    >
      {/* Tooltip */}
      <span
        className="whatsapp-tooltip"
        style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateX(0)" : "translateX(8px)" }}
      >
        Chat with us
      </span>

      {/* Pulse rings */}
      <span className="whatsapp-pulse-ring whatsapp-pulse-ring--1" />
      <span className="whatsapp-pulse-ring whatsapp-pulse-ring--2" />

      {/* Icon */}
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.947a13.18 13.18 0 0 0 1.792 6.64L2.667 29.333l6.96-1.824A13.28 13.28 0 0 0 16.004 29.333 13.28 13.28 0 0 0 29.333 16.053 13.32 13.32 0 0 0 16.004 2.667Zm0 24.266a10.88 10.88 0 0 1-5.547-1.52l-.4-.237-4.12 1.08 1.1-4.013-.26-.413A10.84 10.84 0 0 1 5.12 15.947a10.88 10.88 0 0 1 21.76 0 10.92 10.92 0 0 1-10.876 10.986Zm5.96-8.22c-.327-.163-1.933-.953-2.233-1.063-.3-.107-.52-.163-.74.167-.22.327-.847 1.063-1.04 1.283-.193.22-.387.247-.713.083a9 9 0 0 1-2.64-1.63 9.9 9.9 0 0 1-1.827-2.273c-.193-.327-.02-.507.147-.67.147-.147.327-.387.493-.58.167-.193.22-.327.327-.553.11-.22.057-.413-.027-.58-.083-.163-.74-1.78-1.013-2.44-.267-.64-.54-.553-.74-.563h-.633a1.22 1.22 0 0 0-.88.413 3.7 3.7 0 0 0-1.153 2.747 6.42 6.42 0 0 0 1.347 3.413 14.7 14.7 0 0 0 5.633 4.98c.787.34 1.4.543 1.88.693a4.5 4.5 0 0 0 2.073.133 3.39 3.39 0 0 0 2.22-1.567 2.74 2.74 0 0 0 .193-1.567c-.083-.137-.3-.22-.633-.387Z"
          fill="white"
        />
      </svg>

      <style jsx>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .whatsapp-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.55);
        }

        .whatsapp-fab:active {
          transform: scale(0.95);
        }

        /* Tooltip */
        .whatsapp-tooltip {
          position: absolute;
          right: 68px;
          white-space: nowrap;
          background: #1e293b;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 8px;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .whatsapp-tooltip::after {
          content: "";
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #1e293b;
          border-right: 0;
        }

        /* Pulse rings */
        .whatsapp-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #25D366;
          animation: whatsapp-pulse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .whatsapp-pulse-ring--2 {
          animation-delay: 1.25s;
        }

        @keyframes whatsapp-pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .whatsapp-fab {
            bottom: 16px;
            right: 16px;
            width: 50px;
            height: 50px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </a>
  );
}
