import React from "react";
import { useQuery, gql } from "@apollo/client";

import { ExchangeRatesChild } from "./ExchangeRatesChild";

export const ExchangeRates = () => {
  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p data-testid="loading">Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
      <ExchangeRatesChild />
    </div>
  ));
};
