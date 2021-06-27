import Image from "next/image"

export default function Navigation() {
  return (
    <div id="navbar" className="collapse navbar-collapse" >
      <ul className="nav navbar-nav d-flex flex-row align-items-center justify-content-center">
        <li><a href="">Home</a></li>

        <li className="dropdown active">
          <a className="dropdown-toggle" data-toggle="dropdown" href="">
            Event 
          </a>
          <ul className="dropdown-menu animated fadeIn" role="menu">
            <li><a href="">Event List</a></li>
            <li><a href="">Event Single</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="">
            Album 
          </a>
          <ul className="dropdown-menu animated fadeIn" role="menu">
            <li><a href="">Album 3 Columns</a></li>
            <li><a href="">Album 3 Columns Filterable</a></li>
          </ul>
        </li>

        {/* <li>
          <a href="#" className="brand"><Image src="/images/logo-dark.png" width={100} height={30} alt="Jukebox Logo" /></a>
        </li> */}

      </ul>
    </div>
  )
}