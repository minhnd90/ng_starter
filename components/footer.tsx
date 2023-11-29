const YEAR = new Date().getFullYear()
export default function Footer() {
  return (
    <>
      <small className='footer'>
        <time>{YEAR}</time> © MinhND.
        <a href="/feed.xml">RSS</a>
      </small>
    </>
  )
}
