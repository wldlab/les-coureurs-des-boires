import React, { Component } from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

import MenuHandle from './MenuHandle';
import SiteMenu from './SiteMenu';

import './style.scss';

export default class SiteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationOpen: false,
    };
  }

  render() {
    const logoClass = classNames(
      'site-header__logo',
      { 'site-header__logo--is-light': this.state.navigationOpen },
    );

    return (
      <header className="site-header">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394.1 129" className={logoClass} role="img">
            <title>Les coureurs des boires</title>
            <path d="M14.4 125.6h365.3v3.3H14.4zm0-67.7V18c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v35.3c0 .2.1.2.2.2h13.1c.4 0 .6.2.6.6v3.7c0 .4-.2.6-.6.6H15c-.4.1-.6-.1-.6-.5zM78.3 56a10.3 10.3 0 0 1-2.8-7.6v-1.6c0-.4.2-.6.6-.6h4.3c.4 0 .6.2.6.6v1.3c0 1.8.4 3.2 1.3 4.3a4.3 4.3 0 0 0 3.5 1.6c1.4 0 2.6-.5 3.5-1.6a6 6 0 0 0 1.4-4.1 6 6 0 0 0-.7-3 8.3 8.3 0 0 0-1.9-2.3l-3.9-3-4.7-3.8c-1.1-1-2.1-2.3-2.9-3.8-.8-1.5-1.2-3.2-1.2-5.2 0-3.2.9-5.7 2.8-7.5a9.8 9.8 0 0 1 7.3-2.8c3.1 0 5.6 1 7.5 3a11 11 0 0 1 2.8 7.9v1.5c0 .4-.2.6-.6.6H91c-.4 0-.6-.2-.6-.6v-1.6c0-1.8-.4-3.2-1.3-4.2a4.3 4.3 0 0 0-3.5-1.6c-1.4 0-2.5.5-3.3 1.4-.8 1-1.3 2.3-1.3 4a6 6 0 0 0 1.3 4c.9 1.1 2.5 2.5 4.9 4.3 2.4 1.8 4.2 3.2 5.4 4.3 1.2 1.1 2.1 2.3 2.8 3.6.6 1.3 1 2.9 1 4.7 0 3.3-1 5.9-2.9 7.9s-4.4 3-7.5 3c-3.3-.2-5.8-1.1-7.7-3.1zm50.3 0a10.5 10.5 0 0 1-2.9-7.7V27.5c0-3.2 1-5.8 2.9-7.7 1.9-1.9 4.5-2.9 7.7-2.9s5.8 1 7.7 2.9c1.9 1.9 2.9 4.5 2.9 7.7v.9c0 .4-.2.6-.6.6l-4.5.2c-.4 0-.6-.2-.6-.6v-1.5c0-1.6-.5-2.9-1.4-3.9-.9-1-2.1-1.5-3.6-1.5s-2.7.5-3.6 1.5c-.9 1-1.3 2.3-1.3 3.9v21.6c0 1.6.4 2.9 1.3 3.9s2.1 1.5 3.6 1.5 2.7-.5 3.6-1.5c.9-1 1.4-2.3 1.4-3.9v-1.5c0-.4.2-.6.6-.6l4.5.2c.4 0 .6.2.6.6v.9c0 3.2-1 5.8-2.9 7.7a10.5 10.5 0 0 1-7.7 2.9c-3.2 0-5.7-.9-7.7-2.9zm33 0c-2-2-2.9-4.6-2.9-7.8V27.8c0-3.2 1-5.9 2.9-7.8 2-2 4.5-3 7.7-3s5.9 1 7.8 3c2 2 3 4.6 3 7.8v20.5c0 3.2-1 5.8-3 7.8s-4.6 2.9-7.8 2.9c-3.2-.1-5.8-1-7.7-3zm11.5-3.5a6 6 0 0 0 1.4-4.1v-21c0-1.7-.5-3-1.4-4.1a5 5 0 0 0-3.8-1.6c-1.5 0-2.7.5-3.7 1.6a6 6 0 0 0-1.4 4.1v21c0 1.7.5 3 1.4 4.1.9 1 2.1 1.6 3.7 1.6s2.8-.5 3.8-1.6zm22.5 3.3a12 12 0 0 1-2.9-8.4V18c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v29.9c0 1.8.5 3.3 1.4 4.5a4.5 4.5 0 0 0 3.6 1.7c1.5 0 2.7-.6 3.7-1.7a7 7 0 0 0 1.4-4.5V18c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v29.3c0 3.5-1 6.3-2.9 8.4-2 2.1-4.5 3.2-7.7 3.2s-6-1-8-3.1zM243 58l-5.5-17.6-.2-.2h-4c-.2 0-.2.1-.2.2v17.4c0 .4-.2.6-.6.6H228c-.4 0-.6-.2-.6-.6V18c0-.4.2-.6.6-.6h10.5a9.4 9.4 0 0 1 8.8 5.6c.8 1.8 1.3 3.8 1.3 6.1a12 12 0 0 1-1.6 6.4 8.8 8.8 0 0 1-4.2 3.9c-.1.1-.2.2-.1.4l6 18.1.1.2c0 .3-.2.4-.5.4h-4.6a.8.8 0 0 1-.7-.5zm-10-35.5v13.1c0 .2.1.2.2.2h4.3c1.6 0 2.9-.6 3.9-1.8 1-1.2 1.5-2.9 1.5-4.9 0-2.1-.5-3.8-1.5-5a4.8 4.8 0 0 0-3.9-1.8h-4.3c-.1 0-.2 0-.2.2zm61.8 33.3a12 12 0 0 1-2.9-8.4V18c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v29.9c0 1.8.5 3.3 1.4 4.5a4.5 4.5 0 0 0 3.6 1.7c1.5 0 2.7-.6 3.7-1.7a7 7 0 0 0 1.4-4.5V18c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v29.3c0 3.5-1 6.3-2.9 8.4-2 2.1-4.5 3.2-7.7 3.2s-6.1-1-8-3.1zm47.4 2.2l-5.5-17.6-.2-.2h-4c-.2 0-.2.1-.2.2v17.4c0 .4-.2.6-.6.6h-4.5c-.4 0-.6-.2-.6-.6V18c0-.4.2-.6.6-.6h10.5a9.4 9.4 0 0 1 8.8 5.6c.8 1.8 1.3 3.8 1.3 6.1a12 12 0 0 1-1.6 6.4 8.8 8.8 0 0 1-4.2 3.9c-.1.1-.2.2-.1.4l6 18.1.1.2c0 .3-.2.4-.5.4h-4.6c-.4 0-.6-.2-.7-.5zm-10-35.5v13.1c0 .2.1.2.2.2h4.3c1.6 0 2.9-.6 3.9-1.8 1-1.2 1.5-2.9 1.5-4.9 0-2.1-.5-3.8-1.5-5a4.8 4.8 0 0 0-3.9-1.8h-4.3c-.1 0-.2 0-.2.2zM361.8 56a10.3 10.3 0 0 1-2.8-7.6v-1.6c0-.4.2-.6.6-.6h4.3c.4 0 .6.2.6.6v1.3c0 1.8.4 3.2 1.3 4.3a4.3 4.3 0 0 0 3.5 1.6c1.4 0 2.6-.5 3.5-1.6a6 6 0 0 0 1.4-4.1 6 6 0 0 0-.7-3 8.3 8.3 0 0 0-1.9-2.3l-3.9-3-4.7-3.8a16 16 0 0 1-2.9-3.8c-.8-1.5-1.2-3.2-1.2-5.2 0-3.2.9-5.7 2.8-7.5a9.8 9.8 0 0 1 7.3-2.8c3.1 0 5.6 1 7.5 3a11 11 0 0 1 2.8 7.9v1.5c0 .4-.2.6-.6.6h-4.3c-.4 0-.6-.2-.6-.6v-1.6c0-1.8-.5-3.2-1.3-4.2a4.3 4.3 0 0 0-3.5-1.6c-1.4 0-2.5.5-3.3 1.4-.8 1-1.3 2.3-1.3 4a6 6 0 0 0 1.3 4c.9 1.1 2.5 2.5 4.9 4.3 2.4 1.8 4.2 3.2 5.4 4.3 1.2 1.1 2.1 2.3 2.8 3.6.6 1.3 1 2.9 1 4.7 0 3.3-1 5.9-2.9 7.9s-4.4 3-7.5 3-5.7-1.1-7.6-3.1zM54.1 112.1V72.2c0-.4.2-.6.6-.6h9.6c3.2 0 5.8 1 7.7 3 1.9 2 2.9 4.7 2.9 8.1v18.9c0 3.4-1 6.1-2.9 8.1s-4.5 3-7.7 3h-9.6c-.4 0-.6-.2-.6-.6zm5.8-4.3l4.3-.1c1.5 0 2.7-.6 3.6-1.7a7.5 7.5 0 0 0 1.4-4.7V83a8 8 0 0 0-1.3-4.7 4.3 4.3 0 0 0-3.6-1.8H60c-.2 0-.2.1-.2.2v30.8c-.1.2 0 .3.1.3zm61.4 2.4a10.3 10.3 0 0 1-2.8-7.6V101c0-.4.2-.6.6-.6h4.3c.4 0 .6.2.6.6v1.3c0 1.8.4 3.2 1.3 4.3a4.3 4.3 0 0 0 3.5 1.6c1.4 0 2.6-.5 3.5-1.6a6 6 0 0 0 1.4-4.1 6 6 0 0 0-.7-3 8.3 8.3 0 0 0-1.9-2.3l-3.9-3-4.7-3.8a16 16 0 0 1-2.9-3.8c-.8-1.5-1.2-3.2-1.2-5.2 0-3.2.9-5.7 2.8-7.5a9.8 9.8 0 0 1 7.3-2.8c3.1 0 5.6 1 7.5 3a11 11 0 0 1 2.8 7.9v1.5c0 .4-.2.6-.6.6h-4.3c-.4 0-.6-.2-.6-.6v-1.6c0-1.8-.5-3.2-1.3-4.2a4.3 4.3 0 0 0-3.5-1.6c-1.4 0-2.5.5-3.3 1.4-.8 1-1.3 2.3-1.3 4a6 6 0 0 0 1.3 4c.9 1.1 2.5 2.5 4.9 4.3 2.4 1.8 4.2 3.2 5.4 4.3 1.2 1.1 2.1 2.3 2.8 3.6.6 1.3 1 2.9 1 4.7 0 3.3-1 5.9-2.9 7.9s-4.4 3-7.5 3c-3.2-.2-5.7-1.1-7.6-3.1zm66.5-.5c-2 2-4.7 2.9-7.9 2.9h-9.8c-.4 0-.6-.2-.6-.6V72.2c0-.4.2-.6.6-.6h9c3.6 0 6.3.9 8.4 2.8 2 1.9 3 4.6 3 8.1 0 4.2-1.5 7.1-4.5 8.7-.2.1-.2.2-.1.3 1.6.9 2.8 2.2 3.7 3.9.9 1.7 1.3 3.7 1.3 6-.1 3.6-1.1 6.4-3.1 8.3zm-12.7-33v12.4c0 .2.1.2.2.2h3.8c1.8 0 3.3-.6 4.3-1.7s1.5-2.7 1.5-4.7c0-2.1-.5-3.7-1.5-4.8-1-1.2-2.4-1.7-4.3-1.7h-3.8l-.2.3zm8.5 29.2c1-1.2 1.6-2.9 1.6-5.2 0-2.3-.5-4-1.5-5.3a5 5 0 0 0-4.2-1.9h-4.1c-.2 0-.2.1-.2.2v13.7c0 .2.1.2.2.2h4c1.8.2 3.2-.4 4.2-1.7zm21.2 4.3c-2-2-2.9-4.6-2.9-7.8V82c0-3.2 1-5.9 2.9-7.8 2-2 4.5-3 7.7-3s5.9 1 7.8 3c2 2 3 4.6 3 7.8v20.5c0 3.2-1 5.8-3 7.8s-4.6 2.9-7.8 2.9c-3.2-.1-5.8-1-7.7-3zm11.5-3.5a6 6 0 0 0 1.4-4.1v-21c0-1.7-.5-3-1.4-4.1a5 5 0 0 0-3.8-1.6c-1.5 0-2.7.5-3.7 1.6a6 6 0 0 0-1.4 4.1v21c0 1.7.5 3 1.4 4.1.9 1 2.1 1.6 3.7 1.6s2.8-.5 3.8-1.6zm19.9 5.4V72.2c0-.4.2-.6.6-.6h4.5c.4 0 .6.2.6.6v39.9c0 .4-.2.6-.6.6h-4.5c-.4 0-.6-.2-.6-.6zm34.9.1l-5.5-17.6-.2-.2h-4c-.2 0-.2.1-.2.2V112c0 .4-.2.6-.6.6h-4.5c-.4 0-.6-.2-.6-.6V72.2c0-.4.2-.6.6-.6h10.5a9.4 9.4 0 0 1 8.8 5.6c.8 1.8 1.3 3.8 1.3 6.1a12 12 0 0 1-1.6 6.4 8.8 8.8 0 0 1-4.2 3.9c-.1.1-.2.2-.1.4l6 18.1.1.2c0 .3-.2.4-.5.4h-4.6a.8.8 0 0 1-.7-.5zm-9.9-35.5v13.1c0 .2.1.2.2.2h4.3c1.6 0 2.9-.6 3.9-1.8 1-1.2 1.5-2.9 1.5-4.9 0-2.1-.5-3.8-1.5-5a4.8 4.8 0 0 0-3.9-1.8h-4.3c-.2 0-.2 0-.2.2zm60.9 33.5a10.3 10.3 0 0 1-2.8-7.6V101c0-.4.2-.6.6-.6h4.3c.4 0 .6.2.6.6v1.3c0 1.8.4 3.2 1.3 4.3a4.3 4.3 0 0 0 3.5 1.6c1.4 0 2.6-.5 3.5-1.6a6 6 0 0 0 1.4-4.1 6 6 0 0 0-.7-3 8.3 8.3 0 0 0-1.9-2.3l-3.9-3-4.7-3.8a16 16 0 0 1-2.9-3.8c-.8-1.5-1.2-3.2-1.2-5.2 0-3.2.9-5.7 2.8-7.5a9.8 9.8 0 0 1 7.3-2.8c3.1 0 5.6 1 7.5 3a11 11 0 0 1 2.8 7.9v1.5c0 .4-.2.6-.6.6h-4.3c-.4 0-.6-.2-.6-.6v-1.6c0-1.8-.4-3.2-1.3-4.2a4.3 4.3 0 0 0-3.5-1.6c-1.4 0-2.5.5-3.3 1.4-.8 1-1.3 2.3-1.3 4a6 6 0 0 0 1.3 4c.9 1.1 2.5 2.5 4.9 4.3 2.4 1.8 4.2 3.2 5.4 4.3 1.2 1.1 2.1 2.3 2.8 3.6.6 1.3 1 2.9 1 4.7 0 3.3-1 5.9-2.9 7.9s-4.4 3-7.5 3c-3.2-.2-5.7-1.1-7.6-3.1zM261 51.4h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H261c-.4 0-.6-.2-.6-.6V52c0-.4.2-.6.6-.6zm0-16.3h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H261c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zm0-16.2h18.5c.4 0 .6.2.6.6V24c0 .4-.2.6-.6.6H261c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zM45.4 51.4h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H45.4c-.4 0-.6-.2-.6-.6V52c.1-.4.3-.6.6-.6zm0-16.3h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H45.4c-.4 0-.6-.2-.6-.6v-4.5c.1-.4.3-.6.6-.6zm0-16.2h18.5c.4 0 .6.2.6.6V24c0 .4-.2.6-.6.6H45.4c-.4 0-.6-.2-.6-.6v-4.5c.1-.4.3-.6.6-.6zm243.4 86.8h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6h-18.5c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zm0-16.2h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6h-18.5c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zm0-16.3h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6h-18.5c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zM87 105.7h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H87c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zm0-16.2h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H87c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6zm0-16.3h18.5c.4 0 .6.2.6.6v4.5c0 .4-.2.6-.6.6H87c-.4 0-.6-.2-.6-.6v-4.5c0-.4.2-.6.6-.6z" />
            <path d="M379.7 128.5c0 .3-.2.5-.5.5H14.9c-.3 0-.5-.2-.5-.5v-2.3c0-.3.2-.5.5-.5h364.3c.3 0 .5.2.5.5v2.3zM394.1 3c0 .3-.2.5-.5.5H.5C.2 3.5 0 3.2 0 3V.5C0 .2.2 0 .5 0h393.1c.3 0 .5.2.5.5V3z" />
          </svg>
        </Link>

        <MenuHandle
          open={this.state.navigationOpen}
          onClick={() => this.setState({ navigationOpen: !this.state.navigationOpen })}
        />

        <SiteMenu open={this.state.navigationOpen} />
      </header>
    );
  }
}
