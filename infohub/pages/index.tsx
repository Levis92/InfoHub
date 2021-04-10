import { HomeLayout } from 'layout';
import { Clock, News, Twitter, Weather, Vasttrafik } from 'components';

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
