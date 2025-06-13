import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 fixed-top">
      <div class="container-fluid">
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {" "}
          <div className="navbar-brand d-flex align-items-center gap-4">
            <img
              src="/main_logo.png"
              alt="IUST Logo"
              height="40"
              loading="lazy"
            />
            <span>انجمن رمزنگاری دانشگاه علم و صنعت</span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fs-6" href="/about">
                  درباره دانشکده
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-6"
                  href="/staff"
                  id="facultyDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  افراد
                </a>
                <ul className="dropdown-menu" aria-labelledby="facultyDropdown">
                  <li>
                    <a className="dropdown-item" href="/faculty/office">
                      آموزش
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-6"
                  href="/faculty/research"
                  id="researchDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  پژوهش
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="researchDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/faculty/research">
                      پژوهش‌ها
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-6"
                  href="/faculty/students"
                  id="studentsDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  دانشجویی
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="studentsDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/faculty/students">
                      خدمات دانشجویی
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-6"
                  href="/faculty/industry"
                  id="industryDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  ارتباط با صنعت
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="industryDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/faculty/industry">
                      پروژه‌های صنعتی
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fs-6"
                  href="/faculty/links"
                  id="linksDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  لینک های مفید
                </a>
                <ul className="dropdown-menu" aria-labelledby="linksDropdown">
                  <li>
                    <a className="dropdown-item" href="/faculty/links">
                      سامانه‌ها و منابع
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <i className="bi bi-house-door"></i>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle fs-6"
                href="/staff"
                id="facultyDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i class="bi bi-search"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-6"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                href="/faculty/research"
              >
                <i class="bi bi-person-fill"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-6"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                href="/faculty/students"
              >
                دانشجویی
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
