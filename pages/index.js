import Head from 'next/head';
import NavBar from '../components/NavBar';

const Index = () => (

  <div className="container-fluid">
    <Head>
      <title>INR Record</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <NavBar />
    <h1 className="d-flex justify-content-center mt-2">Hello INR Recorders!</h1>
  </div>
)

export default Index;
