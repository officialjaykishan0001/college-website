import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { ADMIN_API_ENDPOINT } from '../utils/constant';
import { setFacultyAdmins} from '../redux/facultySlice'

const useGetFacultyAdmin = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllFacultyAdmins = async () => {
            try {
                const res = await axios.get(`${ADMIN_API_ENDPOINT}/getfacultyadmins`, { withCredentials: true });
                if(res.data.success){
                    console.log(res.data)
                    dispatch(setFacultyAdmins(res.data.admins))
                }

            } catch (err) {
                console.log(err);
            }
        }
        fetchAllFacultyAdmins();
    }, [dispatch])

}

export default useGetFacultyAdmin
