import { UserType } from "../interfaces/UserType";

const API = "http://localhost:3000/data";

// GET QUERY FETCH

export const getData = async (): Promise<UserType[]> => {
  try {
    const response = await fetch(API);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// POST QUERY FETCH

export const postData = async (data: object): Promise<UserType[]> => {
  try {
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getData();
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE QUERY FETCH

export const deleteData = async (id: number): Promise<UserType[]> => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// PUT QUERY FETCH

export const putData = async (
  data: object,
  id: number
): Promise<UserType[]> => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getData();
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
