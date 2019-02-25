// https://github.com/zeit/next.js#custom-app
import App, { Container } from 'next/app';

// Custom layout is only loaded when server boots.
// Restart when making changes

class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   }

  render () {
    const { Component, pageProps } = this.props
    console.log(Component);

    return (
      <Container>
        <p>This is the layout, on every page</p>
        <Component />
        {/* <Component {...pageProps} /> */}
      </Container>
    )
  }
}

export default MyApp;