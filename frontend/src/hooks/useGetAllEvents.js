import axios from "axios";
import React, { useEffect } from "react";
import { EVENT_API_ENDPOINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllEvents } from "../redux/eventSlice";

const useGetAllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const res = await axios.get(`${EVENT_API_ENDPOINT}/getAllEvents`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllEvents(res.data.allEvents));
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllEvents();
  });
};

export default useGetAllEvents;
