import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { server } from "../mocks/server";
import { ExchangeRates } from "../ExchangeRates";

import { ApolloProvider } from "@apollo/client";
import { client } from "../Client";

beforeAll(() => server.listen());
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("msw", async () => {
  const { getByTestId } = render(
    <ApolloProvider client={client}>
      <ExchangeRates />
    </ApolloProvider>
  );

  screen.debug();

  await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  await waitForElementToBeRemoved(() => screen.getAllByTestId("child-loading"));

  screen.debug();
});
