import axios from 'axios';

export class NodeService {
    getTreeNodes() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(res => res.data.root);
    }

	getTreeTableNodes() {
		return axios.get('https://jsonplaceholder.typicode.com/todos/')
			.then(res => res.data.root);
	}
}
