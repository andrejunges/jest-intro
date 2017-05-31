const city = { name: "São Leopoldo" };

export default () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(city), 50);
  });
