import Head from 'next/head';
import NavBar from '../components/NavBar';

const Index = () => (

  <div className="container-fluid">
    <Head>
      <title>INR Record</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      //Bootstrap
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Head>

    <NavBar />
    <h1 className="d-flex justify-content-center mt-2">Hello INR Recorders!</h1>
  </div>
)

export default Index;
