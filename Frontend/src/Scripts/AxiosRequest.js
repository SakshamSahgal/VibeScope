import axios from "axios";
import Cookies from "js-cookie";

async function AxiosGET(APIroute, data, token) {
    try {
        const response = await axios.get(APIroute, { headers: { 'Authorization': 'Bearer ' + token } },{data : data});

        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        return;
    }
}

async function AxiosPUT(APIroute, data, token) {
    try {
        const response = await axios.put(APIroute, data, { headers: { 'Authorization': 'Bearer ' + token } });

        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        return;
    }
}

async function AxiosDELETE(APIroute, data, token) {
    try {
        const response = await axios.delete(APIroute, { headers: { 'Authorization': 'Bearer ' + token }, data: data })

        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data

    } catch (error) {
        console.log(error);
        return;
    }
}

async function AxiosGETWithCustomHeaders(APIroute, headers) {
    try {
        const response = await axios.get(APIroute, headers);

        // console.log(response.data);

        if (response.data.success === false && (response.data.message === "Invalid token" || response.data.message === "No token provided")) {
            Cookies.remove('token');
            window.location.href = '/';
        }
        else
            return response.data; // Return the response.data
    } catch (error) {
        console.log(error);
        return;
    }
}

export { AxiosGET, AxiosDELETE, AxiosPUT, AxiosGETWithCustomHeaders }