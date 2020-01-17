import Head from 'next/head';
import Header from '../components/Header';

const Index = () => (

  <div className="container">
  <Head>
    <title>INR Record</title>
    //Bootstrap
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
  </Head>

    <Header />
    <h1>Hello INR Recorders!</h1>
  </div>
)

export default Index;
