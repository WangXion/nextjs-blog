import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout/layout';
const About = () => {
  return (
    <Layout>
      <h1>This is First About</h1>
      <Link href="/posts/first-post">to First-Posts Page</Link>
    </Layout>
  )
};
export default About;