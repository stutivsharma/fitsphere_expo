import { GraphQLClient } from "graphql-request";

const url = "https://ponteveque.stepzen.net/api/wrinkled-snake/__graphql";

const client = new GraphQLClient(url, {
  headers: {
    Authorization:
      "apikey ponteveque::stepzen.io+1000::c0edfada0b0aeb6ec154260f917598bc7489acca9bb23e17514fac39292f1041",
  },
});

console.log(client);

export default client;
