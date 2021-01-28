import axios from 'axios';

export class EventService {

    getEvents() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.data.data);
    }
}
