import Link from 'next/link';
import LayOut from '../components/LayOut';

const SignUp = () => (
    <LayOut>
    <div className="container">
      <h2 className="mt-5">Sign Up</h2>
      <form className="mt-5">
        <div className="form-group">
          <label for="signUpEmail">Email address</label>
          <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">Will never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="signUpPassword">Password</label>
          <input type="password" className="form-control" id="signUpPassword" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p className="mt-4">Already have an account?
        <span><a role="button" className="btn btn-outline-primary ml-4"><Link href="/login"><a>Log In</a></Link></a></span>
      </p>
      </div>
    </LayOut>

)

export default SignUp;
