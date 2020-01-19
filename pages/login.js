import Link from 'next/link';
import LayOut from '../components/LayOut';

const LogIn = () => (
    <LayOut>
    <div className="container">
      <h2 className="mt-5">Log In</h2>
      <form className="mt-5">
        <div className="form-group">
          <label for="logInEmail">Email address</label>
          <input type="email" className="form-control" id="logInEmail" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">Will never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="logInPassword">Password</label>
          <input type="password" className="form-control" id="logInPassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p className="mt-4">Need an account?
        <span><a className="btn btn-outline-primary ml-4" role="button"><Link href="/signup"><a>Sign Up</a></Link></a></span>
      </p>
      </div>
    </LayOut>

)

export default LogIn;
