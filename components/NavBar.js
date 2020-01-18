import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faVial } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <div className="container-fluid">
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
        <ul class="navbar-nav">
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
