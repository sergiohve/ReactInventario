import axios from 'axios'

export class CustomerService {
    getCustomersMedium() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.data.data);
    }

    getCustomersLarge() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/')
                .then(res => res.data.data);
    }
    
}