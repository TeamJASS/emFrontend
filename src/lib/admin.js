export const validateField = (name, value) => {
  let error = "";
  switch (name) {
    case "image":
      if (!value) {
        error = "Image is required";
      }
      break;
    case "title":
      if (!value.trim()) {
        error = "Title is required";
      }
      break;
    case "location":
      if (!value.trim()) {
        error = "Location is required";
      }
      break;
    case "price":
      if (!value) {
        error = "Price is required";
      } else if (value <= 0) {
        error = "Price must be a positive number";
      }
      break;
    case "date":
      if (!value) {
        error = "Date is required";
      }
      break;
    case "category":
      if (!value) {
        error = "Category is required";
      }
      break;
    case "time":
      if (!value) {
        error = "Time is required";
      }
      break;
    case "rating":
      if (!value) {
        error = "Rating is required";
      } else if (value < 0 || value > 5) {
        error = "Rating must be between 0 and 5";
      }
      break;
    case "genres":
      if (!value.trim()) {
        error = "Genres are required";
      }
      break;
    case "description":
      if (!value.trim()) {
        error = "Description is required";
      }
      break;
    default:
      break;
  }
  return error;
};
