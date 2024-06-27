
import Axios from "axios";

const AxiosInstance = Axios.create({
    baseURL:"http://localhost:38000"
})

export default AxiosInstance;