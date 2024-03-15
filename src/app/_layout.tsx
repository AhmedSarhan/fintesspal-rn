import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Stack } from "expo-router";

const client = new ApolloClient({
  uri: "https://langon.stepzen.net/api/getting-started/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey langon::stepzen.io+1000::a8e5a2f463f468c8fc0fdcea3c3c63db06b974d69de80c68463aeb08af81c949",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
