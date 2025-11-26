const request = require("supertest");
const app = require("../ApothecaryShopUI/src/app");

test.only("should fetch products and measure time", async () => {
  console.time("fetch-products"); // Začiatok merania času

  const res = await request(app).get("/api/products"); // Spustí sa požiadavka na API

  console.timeEnd("fetch-products"); // Konec merania času

  expect(res.status).toBe(200); // Očakávame, že odpoveď bude s kódom 200
});
