import axios from 'axios';
let ipAddress = "localhost";

class TopicService {
    getTopicCount(topic) {
        return axios.get("http://"+ipAddress+":8000/topics/?keyword="+topic).then(response => response.data);
    }
}

export let topicService = new TopicService();


