import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
export const SimpleNav = ({
  logo,
  links,
  colors,
  router
}) => {
  const renderLogo = () => {
    if (logo) {
      if (logo.img) {
        return /*#__PURE__*/React.createElement("h1", {
          className: "logo"
        }, /*#__PURE__*/React.createElement("img", {
          src: logo.img.src,
          alt: logo.img.alt
        }), /*#__PURE__*/React.createElement("span", null, logo.text));
      } else {
        return /*#__PURE__*/React.createElement("h1", {
          className: "logo"
        }, logo.text);
      }
    } else {
      return /*#__PURE__*/React.createElement("h1", {
        className: "logo"
      }, "LogoHere");
    }
  };

  const renderLinks = () => {
    if (links) {
      return links.map(link => {
        return /*#__PURE__*/React.createElement("li", {
          key: Date.now() * Math.random()
        }, router ? /*#__PURE__*/React.createElement(Link, {
          to: link.href
        }, link.content) : /*#__PURE__*/React.createElement("a", {
          href: link.href
        }, link.content));
      });
    } else {
      throw "Must send atleast 1 link";
    }
  };

  return /*#__PURE__*/React.createElement("header", {
    style: {
      "--background-color": colors?.background,
      "--foreground-color": colors?.foreground,
      "--link-color": colors?.links,
      "--hamburger-color": colors?.hamburger
    }
  }, renderLogo(), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "nav-toggle",
    id: "nav-toggle"
  }), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, renderLinks())), /*#__PURE__*/React.createElement("label", {
    htmlFor: "nav-toggle",
    className: "nav-toggle-label"
  }, /*#__PURE__*/React.createElement("span", null)));
};