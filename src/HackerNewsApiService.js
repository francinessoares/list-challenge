import axios from 'axios'

const BASE_URL = ' https://hacker-news.firebaseio.com/v0/'

export default class HackerNewsApiService {
    async getAllTopStoriesId(length)  {
        return await axios.get(BASE_URL + `topstories.json?print=pretty&limitToFirst=${ length }&orderBy="$key"`).then(response => response.data)
    }

    async getStorieById(id) {
        return await axios.get(BASE_URL + `item/${id}.json?print=pretty`).then(resp => resp.data)
    }

    async getAllTopStories(length = 500) {
        let storieIds = (await this.getAllTopStoriesId(length))
        
        let stories = await Promise.all(storieIds.map(async (id) => {
            return await this.getStorieById(id).then(entity => 
                { 
                    if(entity.type === 'story')
                        return entity
                })
        }))

        return stories;
    }
}
