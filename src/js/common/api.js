import { API_URL, LOGIN_URL } from './constants';

export const getFilteredData = (id) => (
    new Promise(function(resolve, reject) {
        fetch(API_URL + '/?search=' + id)
            .then((response) => response.json())
            .then((res) => {
                const planets = res.results;
                resolve(planets);
            })
            .catch((error) => {
                reject(error);
            });
    })
);
export const getLoginData = (username) => (
    new Promise(function(resolve, reject) {
        fetch(LOGIN_URL + '/?search=' + username)
            .then((response) => response.json())
            .then((res) => {
                const people = res.results;
                resolve(people);

            })
            .catch((error) => {
                reject(error);
            });
    })
);
