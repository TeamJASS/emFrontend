import { useState } from "react";
import { categories } from "../../../dataPlaceHolder"; // Assuming categories are imported correctly
import { validateField } from "../../../lib/admin";
import { toast } from "react-toastify";
import axios from "axios";

const EventCreate = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    location: "",
    price: "",
    date: "",
    category: "",
    time: "",
    rating: "",
    genres: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (formData[key] === "" || errors[key]) {
        newErrors[key] = errors[key] || `${key} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Invalid Field(s)");
      return;
    }

    // Handle form submission logic here
    // collect all inputs  from form
    const sformData = new FormData(event.target);
    // post data to backend
    const response = await axios.post(
      `https://embackend-lnot.onrender.com/events`,
      sformData
    );
    console.log(response);
    // const newEvent = await createEvent(formData);
    toast.success(`New Event Created - ${formData.title}`);
    console.log(formData); // Example: Logging form data for testing
  };

  return (
    <div className="container mx-auto">
      <form className="w-[70%] mx-auto p-4" onSubmit={handleSubmit}>
        <h2 className="text-4xl text-center font-semibold mb-10">
          Create/Edit Event
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="mb-8">
              <label
                htmlFor="image"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                IMAGE
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleEventChange}
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.image && (
                <p className="text-red-500 text-sm ml-4">{errors.image}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="title"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleEventChange}
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm ml-4">{errors.name}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="location"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                LOCATION
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.location && (
                <p className="text-red-500 text-sm ml-4">{errors.location}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="price"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                PRICE
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.price && (
                <p className="text-red-500 text-sm ml-4">{errors.price}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="date"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                DATE
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.date && (
                <p className="text-red-500 text-sm ml-4">{errors.date}</p>
              )}
            </div>
          </div>

          {/* Second Column */}
          <div>
            <div className="mb-8">
              <label
                htmlFor="category"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                CATEGORY
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm ml-4">{errors.category}</p>
              )}
            </div>

            <div className="mb-8">
              <label
                htmlFor="time"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                TIME
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.time && (
                <p className="text-red-500 text-sm ml-4">{errors.time}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="rating"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                RATING
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm ml-4">{errors.rating}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="genres"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                GENRES
              </label>
              <input
                type="text"
                id="genres"
                name="genres"
                value={formData.genres}
                onChange={handleEventChange}
                className=" h-14 bg-[#f1f1f1] w-full px-3 py-2 border-secondary-light border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              {errors.genres && (
                <p className="text-red-500 text-sm ml-4">{errors.genres}</p>
              )}
            </div>
            <div className="mb-8">
              <label
                htmlFor="description"
                className="block text-gray-500 font-bold mb-1 ml-4"
              >
                DESCRIPTION
              </label>
              <textarea
                value={formData.description}
                onChange={handleEventChange}
                className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                name="description"
                id="description"
                rows={5}
              />
              {errors.description && (
                <p className="text-red-500 text-sm ml-4">
                  {errors.description}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="my-10 p-4 rounded-lg bg-primary text-white font-bold hover:bg-dark w-[40%] mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventCreate;
