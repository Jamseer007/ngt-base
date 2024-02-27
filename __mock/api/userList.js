// api.js
import userList from '../data/userList.json';

export const findAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userList);
    }, 1000); // Simulate a delay to mimic network latency
  });
};
