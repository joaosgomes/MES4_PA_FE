// ImageService.js
import axiosInstance from "../config/Config";
import * as errorMessages from "../constants/ErrorMessages";

const endpoint = "/image";

export const getImages = async () => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    throw error;
  }
};

export const getImage = async (imageId) => {
  try {
    const response = await axiosInstance.get(`${endpoint}/${imageId}`);
    return response.data;
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    //throw error;
  }
};

export const postImage = async (imageData) => {
  try {
    const response = await axiosInstance.post(endpoint, imageData);
    return response.data;
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    //throw error;
  }
};

export const deleteImage = async (imageId) => {
  try {
    await axiosInstance.delete(`${endpoint}/${imageId}`);
  } catch (error) {
    console.error(errorMessages.ERROR_IMAGE, error);
    //throw error;
  }
};

