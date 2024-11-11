import { Href, Redirect } from 'expo-router';

const Home = () => {
  const redirectPath = '/(auth)/welcome' as Href;

  return <Redirect href={redirectPath} />;
};

export default Home;
