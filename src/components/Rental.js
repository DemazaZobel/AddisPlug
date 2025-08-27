import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import groundFloor from "../assets/ground.png";
import firstFloor from "../assets/floor2.png";
import secondFloor from "../assets/floor3.png";
import thirdFloor from "../assets/floor4.png";
import fourthFloor from "../assets/floor5.jpeg";
import fifthFloor from "../assets/floor1.png";

export default function ShopRentalSection() {
  const floors = [
    { name: "Ground Floor", img: groundFloor, codes: ["G1", "G2", "G3", "G4", "G5"] },
    { name: "1st Floor", img: firstFloor, codes: ["1A", "1B", "1C", "1D", "1E"] },
    { name: "2nd Floor", img: secondFloor, codes: ["2A", "2B", "2C", "2D", "2E"] },
    { name: "3rd Floor", img: thirdFloor, codes: ["3A", "3B", "3C", "3D", "3E"] },
    { name: "4th Floor", img: fourthFloor, codes: ["4A", "4B", "4C", "4D", "4E"] },
    { name: "5th Floor", img: fifthFloor, codes: ["5A", "5B", "5C", "5D", "5E"] },
  ];

  const [selectedFloor, setSelectedFloor] = useState(floors[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    setSelectedShop("");
  }, [selectedFloor]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const name = formRef.current.user_name.value;
    const email = formRef.current.user_email.value;
    const phone = formRef.current.user_phone.value;
    const floor = formRef.current.selected_floor.value;
    const shopCode = formRef.current.shop_code.value;
    const reason = formRef.current.rental_reason.value;
    const optionalMessage = formRef.current.message.value || "N/A";

    formRef.current.final_message.value = `
New Shop/Store Rental Request:

Name: ${name}
Email: ${email}
Phone: ${phone}
Floor: ${floor}
Shop/Store Code: ${shopCode}
Reason for Rental: ${reason}
Additional Message: ${optionalMessage}
    `;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-background text-gray-900 py-16 px-4 flex flex-col items-center font-sans">
      
      {/* Description */}
      <div className="max-w-3xl text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-lightPrimary">Shop & Store Rentals</h2>
        <p className="text-lg text-gray-700">
          Addis Plug offers rental shops and stores. Select a floor below, then pick a shop code and fill out the form.
        </p>
      </div>

      {/* Floor Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {floors.map((floor, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedFloor(floor)}
            className={`px-6 py-3 rounded-full font-semibold border transition-all duration-300
              ${selectedFloor.name === floor.name
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
          >
            {floor.name}
          </button>
        ))}
      </div>

      {/* Floor Image */}
      <div className="mb-6 text-center">
        <img
          src={selectedFloor.img}
          alt={`${selectedFloor.name} Floor Plan`}
          className="w-full max-w-4xl rounded-lg shadow-md mb-4"
        />
        <p className="mb-4 text-lg text-gray-700">
          Next, choose the shop/store rental code from the floor plan.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          Fill Out Rental Form
        </button>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 text-2xl font-bold hover:text-gray-900"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-green-600">Rental Form</h3>

            {sent && (
              <div className="mb-4 p-4 bg-green-100 border-l-4 border-green-500 rounded">
                <p className="text-green-800 font-medium">Message sent successfully!</p>
                <p className="text-green-700">We've received your rental request and will contact you soon.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 text-gray-800">
              
              <input type="text" name="user_name" placeholder="Your Name" required className="p-3 rounded border border-gray-300" />
              <input type="email" name="user_email" placeholder="Email" required className="p-3 rounded border border-gray-300" />
              <input type="tel" name="user_phone" placeholder="Phone Number" required className="p-3 rounded border border-gray-300" />

              <select
                name="selected_floor"
                value={selectedFloor.name}
                onChange={e => setSelectedFloor(floors.find(f => f.name === e.target.value))}
                className="p-3 rounded border border-gray-300"
              >
                {floors.map((floor, idx) => <option key={idx} value={floor.name}>{floor.name}</option>)}
              </select>

              <select
                name="shop_code"
                value={selectedShop}
                onChange={e => setSelectedShop(e.target.value)}
                required
                className="p-3 rounded border border-gray-300"
              >
                <option value="" disabled>Select Shop/Store Code</option>
                {selectedFloor.codes.map((code, idx) => <option key={idx} value={code}>{code}</option>)}
              </select>

              <textarea name="rental_reason" placeholder="Why do you need this shop/store?" required className="p-3 rounded border border-gray-300" />
              <textarea name="message" placeholder="Optional: Add a message or additional info" className="p-3 rounded border border-gray-300" />

              <input type="hidden" name="final_message" />

              <button
                type="submit"
                disabled={loading}
                className={`bg-secondary text-white font-semibold py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : "Submit Rental Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
