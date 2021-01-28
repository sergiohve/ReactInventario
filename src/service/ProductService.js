import axios from 'axios';

export class ProductService {

    getProductsSmall() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => res.data.data);
    }

    getProducts() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => res.data.data);
    }
}