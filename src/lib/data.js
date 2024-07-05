/* eslint-disable no-undef */
import axios from "axios";
const BASE_URL = import.meta.env.VITE_APP_API_URL;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    hour12: true,
  };
  return date.toLocaleDateString("en-US", options);
};

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    if (response.status === 200) {
      response.data.forEach((element) => {
        element.rating = 5;
        element.genres = ["Reggae", "Gospel", "Hip-Hop"];
        element.title = element.name;
        element.date = formatDate(element.date);
      });

      return response.data;
    }
  } catch (error) {
    console.error("Could not fetch events:", error);
    throw error;
  }
};

export const createEvent = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URLs}/event-create`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};
