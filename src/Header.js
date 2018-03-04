import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src="/favicon.ico"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Elias Homes LTD
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link" to={`/`}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/about`}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/portfolio`}>
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={`/contact`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
