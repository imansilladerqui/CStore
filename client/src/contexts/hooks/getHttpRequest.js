import {useState, useEffect} from 'react';

export const useGetHttpRequest = (url, dependencies) => {
  const [isGetLoading, setIsGetLoading] = useState(false);
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    setIsGetLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        setIsGetLoading(false);
        setGetData(data);
      })
      .catch(err => {
        throw err;
        setIsGetLoading(false);
      });
  }, dependencies);

  return [isGetLoading, getData];
};