import { HomeLayout } from 'layout';
import { Clock, News, Twitter, Weather, Vasttrafik } from 'widgets';

export default function Home() {
  return (
    <HomeLayout>
      <Twitter />
      <Vasttrafik />
      <Clock top={<News />} />
      <Weather />
    </HomeLayout>
  )
}
