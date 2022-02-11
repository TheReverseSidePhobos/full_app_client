export const getUsersByAPI = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
    response.json()
  );
};
