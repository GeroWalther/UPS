import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigator/RootNav";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const API_KEY =
  "scugog::stepzen.net+1000::9496fb320e2b8b8e2065b433a54ab2c32fbf5cdf5d9921bd9e822fa11ec65d9e";

const client = new ApolloClient({
  uri: "https://scugog.stepzen.net/api/volted-lambkin/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Apikey ${API_KEY}`,
  },
});

export default function App() {
  return (
    //@ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
