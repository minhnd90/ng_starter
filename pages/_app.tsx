import '../styles/main.scss'

export default function Nextra({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return <Component {...pageProps} />
}
