import * as axios from 'axios';
import {listContacts, detailedContacts} from './dummyData';

export default class Api {
    constructor() {
        this.instance = null;
        this.apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    }

    init = () => {
        // this.api_token = getCookie("ACCESS_TOKEN");
        let headers = {Accept: "application/json",};

        // if (this.api_token) {
        //     headers.Authorization = `Bearer ${this.api_token}`;
        // }

        this.instance = axios.create({
            baseURL: this.apiEndpoint,
            timeout: 3000,
            headers,
        });

        return this.instance;
    };

    getUserList = params => {
        return this.init().get('/users', {params: params});
    };

    addNewUser = data => {
        return this.init().post('/users', data);
    };

    getContacts = (type = null) => {
        return listContacts;
    }

    fetchContact = id => {
        return detailedContacts[id];
    }
}