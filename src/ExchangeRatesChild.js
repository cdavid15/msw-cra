import React from "react";
import { useQuery, gql } from "@apollo/client";

export const ExchangeRatesChild = () => {
  const EXCHANGE_RATES = gql`
    query GetChildEntry {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p data-testid="child-loading">Child Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};
