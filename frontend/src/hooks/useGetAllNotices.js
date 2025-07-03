import axios from "axios";
import { useEffect } from "react";
import { NOTICE_API_ENDPOINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllNotices } from "../redux/noticeSlice";

const useGetAllNotices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllNotices = async () => {
      try {
        const res = await axios(`${NOTICE_API_ENDPOINT}/getAllNotices`, {
          withCredentials: true,
        });

        if (res.data.success) {
          console.log(res.data)
          dispatch(setAllNotices(res.data.allNotices));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllNotices();
  });
};

export default useGetAllNotices;
