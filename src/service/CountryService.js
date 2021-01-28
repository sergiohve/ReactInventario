import axios from 'axios'

export class CountryService {

    getCountries() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.data.data);
    }
}