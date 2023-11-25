import Head from 'next/head'

export default function Test() {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="left">50% by 200px</div>
          <div className="right">50% by 200px</div>
        </div>
        <div className="body">
          <div className="sidebar">
            <span>300px by fill the rest</span>
          </div>
          <div className="content">
            <span>fill the rest</span>
          </div>
        </div>
      </div>
    </>
  )
}
