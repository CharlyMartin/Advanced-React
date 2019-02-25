// Next.js imports react automatically in all pages
// import React from 'react';

import Link from 'next/link';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Link href="/sell">
          <a>Go to Sell</a>
        </Link>
      </div>
    )
  }
}

export default Home;