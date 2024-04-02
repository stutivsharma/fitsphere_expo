import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Image } from "react-native";

const client = new QueryClient();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../../assets/images/logo.png")}
    />
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={client}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Fitsphere",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        ></Stack.Screen>
      </Stack>
    </QueryClientProvider>
  );
}
