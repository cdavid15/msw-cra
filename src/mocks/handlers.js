import { graphql } from "msw";

export const handlers = [
  graphql.query("GetExchangeRates", (req, res, ctx) => {
    const { currency } = req.variables;

    return res(
      ctx.data({
        rates: [
          {
            currency: "AED",
            rate: "3.673",
          },
          {
            currency: "AFN",
            rate: "76.899997",
          },
          {
            currency: "ALGO",
            rate: "3.43112026076514",
          },
        ],
      })
    );
  }),
  graphql.query("GetChildEntry", (req, res, ctx) => {
    const { currency } = req.variables;

    return res(
      ctx.data({
        rates: [
          {
            currency: "Child  - AED",
            rate: "Child - 3.673",
          },
        ],
      })
    );
  }),
];
