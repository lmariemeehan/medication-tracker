import Head from 'next/head';
import Link from 'next/link';

const NavBar = () => (
  <div>
  <Head>
    <title>INR Record</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //Bootstrap
    <link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css" />
  </Head>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        <img src={"https://res.cloudinary.com/laurameehan/image/upload/v1579324164/Medical_efamoy.svg"} className="mr-2" />
        <Link href="/">
          <a>INR Record</a>
        </Link>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
            <Link href="/profile">
            <a>Profile</a>
            </Link>
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>

  </div>
);

export default NavBar;
