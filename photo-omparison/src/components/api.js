const baseURL = "https://jsonplaceholder.typicode.com/photos";

export const getImages = async () => {
  try {
    const res = await fetch(baseURL);
    const data = await res.json();

    console.log("Response: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
