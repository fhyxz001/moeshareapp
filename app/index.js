import {Button, StyleSheet, Text, View} from "react-native";
import axios from "axios";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Button title="Fetch Demo" onPress={axiosDemo} />
      </View>
    </View>
  );
}
const axiosDemo = async () => {
  const cookie = '';
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  const instance = axios.create({
    headers: {
      Cookie: cookie,
      'User-Agent': userAgent,
    },
  });
  const response = await instance.get('https://moeshare.cc/simple/?f35.html');
  // 处理响应
  console.log('Response:', response.data);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
