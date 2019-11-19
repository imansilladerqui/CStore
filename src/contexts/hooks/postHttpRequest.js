import history from "../../history";

export const PostHttpRequest = (method, url, data, target) => {
      fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type': 'application/json'} : {}
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return history.push(target)
      })
      .catch(err => {
        console.log(err);
      }); 
};