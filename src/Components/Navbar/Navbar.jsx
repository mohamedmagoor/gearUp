import TransButton from "../TransButton/TransButton";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useState } from "react";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="" alt="Logo" height="40" className="me-2" />
          <span className="fw-bold">GearUp</span>
        </NavLink>

        {/* Mobile menu toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          {/* Desktop Navigation */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                to="/learning"
                className="nav-link fw-bold text-dark dropdown-toggle"
                role="button"
              >
                {t("navbar.learning")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/graduates" className="nav-link fw-bold text-dark">
                {t("navbar.hireGraduates")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/partnership" className="nav-link fw-bold text-dark">
                {t("navbar.partnership")}
              </NavLink>
            </li>
          </ul>

          {/* Right side items */}
          <div className="d-flex align-items-center gap-3">
            <TransButton />
            <button className="btn btn-link text-primary fw-bold text-decoration-none">
              {t("navbar.login")}
            </button>
            <Button label={t("navbar.joinUs")} />
          </div>
        </div>
      </div>
    </nav>
  );
}
