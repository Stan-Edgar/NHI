import React, { useState, useRef, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import Nav from "./Navbar.jsx";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    address: "",
    email: "",
    phone: "",
    ssnFile: null,
  });
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const fileInputRef = useRef();

  // reCAPTCHA callback
  window.onCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.birth) newErrors.birth = "Birth date is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.phone.match(/^\d{7,15}$/))
      newErrors.phone = "Phone must be 7–15 digits";
    if (!formData.ssnFile) newErrors.ssnFile = "Please upload your SSN photo";
    if (!captchaVerified) newErrors.captcha = "Please verify you’re not a robot";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, ssnFile: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Birth */}
        <div>
          <label className="block font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            name="birth"
            value={formData.birth}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.birth && (
            <p className="text-red-500 text-sm">{errors.birth}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Upload Zone */}
        <div>
          <label className="block font-semibold mb-1">
            Upload Social Security Card Photo
          </label>

          <div
            onClick={openFileDialog}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-[#1fcd39] transition"
          >
            {preview ? (
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-40 h-24 object-cover rounded-lg border"
                />
                <p className="text-sm text-gray-500">Click to replace image</p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0l-3 3m3-3l3 3M17 8v12m0 0l3-3m-3 3l-3-3"
                  />
                </svg>
                <p className="text-gray-500 text-sm">
                  Drag & drop or click to upload
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            name="ssnFile"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          {errors.ssnFile && (
            <p className="text-red-500 text-sm">{errors.ssnFile}</p>
          )}
        </div>

        {/* reCAPTCHA */}
        <div className="mt-4">
          <div
            className="g-recaptcha"
            data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            data-callback="onCaptchaVerify"
          ></div>
          {errors.captcha && (
            <p className="text-red-500 text-sm">{errors.captcha}</p>
          )}
        </div>

        {/* Submit */}
        <div
          onClick={handleSubmit}
          className="px-5 py-2 bg-[#1fcd39] text-white font-semibold rounded-xl text-[1.125rem] cursor-pointer text-center"
        >
          Submit
        </div>
      </form>
    </div>
  );
}

// ✅ Mount React app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Form />
  </StrictMode>
);
