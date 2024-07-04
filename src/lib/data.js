/* eslint-disable no-undef */
import axios from "axios";

export const createEvent = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/event-create`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};
