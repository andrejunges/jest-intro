import getCity from "./get_city";

it("works with promises", () => {
  return getCity()
    .then((city) => expect(city.name).toEqual("São Leopoldo"));
});

it("works with async await", async () => {
  const city = await getCity();
  expect(city.name).toEqual("São Leopoldo");
});
