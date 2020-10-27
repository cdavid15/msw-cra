import React from "react";
import { ApolloProvider } from "@apollo/client";

import { ExchangeRates } from "./ExchangeRates";
import { client } from "./Client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;
