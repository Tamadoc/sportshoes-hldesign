export function Navigation() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark p-0 w-100 position-absolute top-0">
        <a className="navbar-brand p-3" href="index.html">
          Sportshoes.com
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon p-3"></span>
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white p-3 ml-3" href="#men">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white p-3 ml-3" href="#women">
                Women
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
