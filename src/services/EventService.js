// EventService.js

import axiosInstance from "../config/config";
import * as errorMessages from "../constants/ErrorMessages";

// Define API endpoints
const endpoint = "/event";
const templateEndpoint = "events";

// Function to fetch all events
export const getEvents = async () => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_FETCHING_EVENTS, error);
    // throw error;
  }
};

// Function to fetch a single event by ID
export const getEvent = async (eventId) => {
  try {
    const response = await axiosInstance.get(`${endpoint}/${eventId}`);
    return response.data;
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_FETCHING_EVENT, error);
    // throw error;
  }
};

// Function to create a new event
export const postEvent = async (eventData) => {
  try {
    const response = await axiosInstance.post(endpoint, eventData);
    return response.data;
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_CREATING_EVENT, error);
    // throw error;
  }
};

// Function to update an existing event by ID
export const putEvent = async (eventId, eventData) => {
  try {
    const response = await axiosInstance.put(`/event/${eventId}`, eventData);
    return response.data;
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_UPDATING_EVENT, error);
    // throw error;
  }
};

// Function to delete an event by ID
export const deleteEvent = async (eventId) => {
  try {
    await axiosInstance.delete(`${endpoint}/${eventId}`);
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_DELETING_EVENT, error);
    // throw error;
  }
};

// Function to fetch HTML content for a specific event
export const getEventHtml = async (eventId) => {
  try {
    // Construct URL for fetching HTML content
    const url = `${axiosInstance.defaults.baseURL}${templateEndpoint}/${eventId}`;
    return url;
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_FETCHING_EVENT, error);
    // throw error;
  }
};

// Function to fetch HTML content for all events
export const getEventsHtml = async () => {
  try {
    // Construct URL for fetching HTML content
    const url = `${axiosInstance.defaults.baseURL}${templateEndpoint}`;
    return url;
  } catch (error) {
    // Log and throw error
    console.error(errorMessages.ERROR_FETCHING_EVENTS, error);
    // throw error;
  }
};
