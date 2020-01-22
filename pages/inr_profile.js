import LayOut from '../components/LayOut';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

ProfilePage.getInitialProps = async ({ req, query }) => {
  const protocol = req
  ? `${req.headers['x-forwarded-proto']}:`
  : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/inr_profiles/${query.id}`
  const res = await fetch(pageRequest)
  const json = await res.json()
  return json
}

function ProfilePage({ inr_profile }) {
  return (
    <>
    <div>
      <LayOut>
      <h1 className="d-flex justify-content-center mt-3">This is the profile page</h1>
      <h2>{inr_profile.name}</h2>
      <p>{inr_profile.email}</p>
      <Link href="/">
        <a>Back to profiles</a>
      </Link>
      </LayOut>
    </div>
    </>
  );
}
