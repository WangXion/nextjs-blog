import Link from 'next/link';
import Head from 'next/head';
import style from '../../styles/alert.module.css';
import cn from 'classnames';
const FirsPost = ({ children, type }) => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>This is First Post</h1>
      <Link href="/about/first-about">to First-About Page</Link>
      <div
        className={cn({
          [style.success]: type === 'success',
          [style.error]: type === 'error',
        })}
      >
        {children}
      </div>
    </>
  );
};
export default FirsPost;
