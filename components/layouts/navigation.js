import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"

export default function Navigation({ position }) {
  const router = useRouter()

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navbar-page" style={{ position: position }} role="navigation" id="home-nav">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link href="/" passHref><a className="navbar-brand"><Image src="/images/logo-dark.png" width={100} height={100} alt="Jukebox Logo" /></a></Link>
        </div>

        <div id="navbar" className="collapse navbar-collapse" >
          <ul className="nav navbar-nav d-flex flex-row align-items-center justify-content-center">
            <li>
              <Link href="/" passHref><a className="brand"><Image src="/images/logo.png" className="mt-2" width={100} height={30} alt="Jukebox Logo" /></a></Link>
            </li>

            <li className="active"><Link href="/"><a className="mt-n1" style={{ color: router.asPath === "/" && "#F10278" }}>Home</a></Link></li>

            <li className="dropdown active">
              <Link href="/events" passHref>
                <a className="dropdown-toggle mt-n1" style={{ color: router.asPath === "/events" && "#F10278" }} data-toggle="dropdown">Events</a>
              </Link>
              <ul className="dropdown-menu animated fadeIn" role="menu">
                <li><Link href="/">Event List</Link></li>
                <li><Link href="/">Event Single</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link href="/works">
                <a className="dropdown-toggle mt-n1" style={{ color: router.asPath === "/works" && "#F10278" }} data-toggle="dropdown">Works</a>
              </Link>
              <ul className="dropdown-menu animated fadeIn" role="menu">
                <li><Link href="/">Album 3 Columns</Link></li>
                <li><Link href="/">Album 3 Columns Filterable</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link href="/sales" >
                <a className="dropdown-toggle mt-n1" style={{ color: router.asPath === "/sales" && "#F10278" }}  data-toggle="dropdown">
                  Sales
                </a>
              </Link>
              <ul className="dropdown-menu animated fadeIn" role="menu">
                <li><Link href="/">Album 3 Columns</Link></li>
                <li><Link href="/">Album 3 Columns Filterable</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}