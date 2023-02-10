import axios from 'axios';

export const getStarships = (url, starships, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedStarships = starships.concat(response.data.results)
      if (response.data.next !== null) {
        getStarships(response.data.next, retrivedStarships, resolve, reject)
      } else {
        resolve(retrivedStarships)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}