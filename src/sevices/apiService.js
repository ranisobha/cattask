import { API } from "./ApiConfig";

export const GET_CAT_DATA = async () => {
    try {
        const res = await API.get('/images/search?limit=10');
        return res.data;
    } catch (error) {
        return error;
    }
};

export const GET_SINGLE_CAT_DATA = async (Cat_Id) => {
    try {
        const res = await API.get(`/images/search?has_breeds=${Cat_Id}`);
        return res.data;
    } catch (error) {
        return error;
    }
};