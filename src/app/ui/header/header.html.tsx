import Breadcrumb from "../breadcrumb/breadcrumb.html";

const Header = (props: any) => {
  return (
    <header>
      <div className="d-flex justify-content-around align-items-md-center pb-3 border-bottom">
        <button
          type="button"
          className="btn btn-primary me-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#navMenu">
          <i className="bi bi-list"></i>
        </button>

        <h1 className="h4">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none">
            <i className="bi bi-arrows-expand-vertical"></i>
            <span>DB-DBO </span>
          </a>
        </h1>
        <div>La app de las cuentas claras</div>
      </div>
      <div className="mb-5 border-bottom">
        <Breadcrumb
          homeElement={"Home"}
          separator={<span>&nbsp;/&nbsp;</span>}
          activeClasses="active"
          containerClasses="breadcrumb"
          listClasses="breacrumb-item"
          capitalizeLinks
        />
      </div>
    </header>
  );
};

export default Header;
