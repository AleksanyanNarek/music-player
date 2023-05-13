import '../style/_nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className={`${libraryStatus ? "active-library-nav" : ""}`}>
      <h2>Narek`s playlist</h2>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  )
}

export default Nav;
