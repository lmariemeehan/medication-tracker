import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial } from '@fortawesome/free-solid-svg-icons';

const linkStyle = {
  marginRight: 20
};

const Header = () => (
  <div>
    <FontAwesomeIcon icon={faVial} />
    <Link href="/">
      <a style={linkStyle}>INR Record</a>
    </Link>
    <Link href="/profile">
    <a style={linkStyle}>Profile</a>
    </Link>
    <button type="button" className="btn btn-primary">Sign Up</button>
  </div>
);

export default Header;
