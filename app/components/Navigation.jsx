const React = require('react');
const {Link, IndexLink} = require('react-router');

var Navigation =  () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li> <IndexLink to="/" activeClassname="active-link">Timer</IndexLink></li>
          <li>
            <Link to="/" activeClassname="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <div className="menu">
          <li className="menu-text">
            Created By Elijah <a href="http://elijahtheprince.com/" target="_blank"> Prince</a>
          </li>
        </div>
      </div>
    </div>
  )
};

module.exports = Navigation;
