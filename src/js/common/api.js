import { API_URL, LOGIN_URL } from './constants';

// export const getData = () => (
//     new Promise(function (resolve, reject) {
//         fetch(API_URL + "/?format=json", {
//             headers: {
//                 "Accept": "application/json; charset=utf-8",
//                 "Content-Type": "application/json; charset=utf-8"
//             },
//             crossdomain: true,
//         })
//             .then((response) => response.json())
//             .then((res) => {
//                 const planets = res.results;
//                 setTimeout(() => resolve(planets), 500);
//             }).catch((error) => {
//                 reject(error);
//             });
//     })
// );

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
