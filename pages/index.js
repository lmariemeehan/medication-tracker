import Head from 'next/head';
import LayOut from '../components/LayOut';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

HomePage.getInitialProps = async ({ req, query }) => {
  const protocol = req
  ? `${req.headers['x-forwarded-proto']}:`
  : location.protocol
  const host = req ? req.headers['x-forwarded-host'] : location.host
  const pageRequest = `${protocol}//${host}/api/inr_profiles?page=${query.page ||
    1}&limit=${query.limit || 9}`
  const res = await fetch(pageRequest)
  const json = await res.json()
  return json
}

function HomePage({ inr_profiles, page, pageCount }) {
  return (
    <>
    <div>
      <LayOut>
        <h1 className="d-flex justify-content-center mt-3">Hello INR Recorders! Lets see if this shows up.</h1>

        <ul>
        {inr_profiles.map(p => (
          <li className="profile" key={p.id}>
            <Link href={`/inr_profile?id=${p.id}`}>
              <a>
              <span>{p.name}</span>
              </a>
            </Link>
          </li>
        ))}
        </ul>
        <nav>
          {page > 1 && (
            <Link href={`/?page=${page - 1}&limit=9`}>
              <a>Previous</a>
            </Link>
          )}
          {page < pageCount && (
            <Link href={`/?page=${page + 1}&limit=9`}>
              <a className="next">Next</a>
            </Link>
          )}
        </nav>
      </LayOut>
    </div>
    </>
  )
}

export default HomePage;
