import { HomeLayout } from 'layout';
import { Clock, Twitter, Weather, Vasttrafik } from 'widgets';

export default function Home() {
  return (
    <HomeLayout>
      <Twitter />
      <Vasttrafik />
      <Clock />
      <Weather />
    </HomeLayout>
  )
}
