import Head from 'next/head';
import NavBar from './NavBar';

const LayOut = ( props ) => {
  return (
    <div>
    <Head>
      <title>INR Record</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      //Bootstrap
      <link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css" />
    </Head>
    <NavBar />
    { props.children }
    </div>
  )
};

export default LayOut;
