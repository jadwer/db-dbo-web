const InsideTemplate = (props: any) => (

<main>
    <div className="container py-4 px-3 mx-auto">
      <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
        <h1 className="h4">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-bootstrap-fill d-inline-block me-2"
              viewBox="0 0 16 16">
              <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
              <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
            </svg>
            <span>Sass &amp; JS</span>
          </a>
        </h1>
        <a
          href="https://github.com/twbs/examples/tree/main/sass-js/"
          target="_blank"
          rel="noopener">
          View on GitHub
        </a>
      </header>

      <h1>Get started with Bootstrap</h1>
      <div className="col-lg-8 px-0">
        <p className="fs-4">
          You've successfully loaded up a Bootstrap example! It's loaded up with{" "}
          <a href="https://getbootstrap.com/">Bootstrap 5</a> and tooling for
          compiling our Sass and JavaScript to your needs.
        </p>
        <p>
          If this button appears blue and the link appears purple, you've done
          it!
        </p>
      </div>

      <button
        type="button"
        className="btn btn-primary me-3"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample">
        Toggle offcanvas
      </button>

      <div
        className="offcanvas offcanvas-end"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="col-1 my-5 mx-0" />

      <h2>Guides</h2>
      <p>
        Read more detailed instructions and documentation on using or
        contributing to Bootstrap.
      </p>
      <ul className="icon-list">
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
            Bootstrap quick start guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/webpack/">
            Bootstrap Webpack guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/parcel/">
            Bootstrap Parcel guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/vite/">
            Bootstrap Vite guide
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/docs/5.3/getting-started/contribute/">
            Contributing to Bootstrap
          </a>
        </li>
      </ul>

      <hr className="mt-5 mb-4" />

      <p className="text-muted">
        Created and open sourced by the Bootstrap team. Licensed MIT.
      </p>
    </div>
  </main>



);export default InsideTemplate;
