var React = require('react');

var About = (props) => {
  return (
    <div>
        <h1 className="text-center">About</h1>
        <p>
          This is weather application build ob React.
        </p>
        <p>
          Here are some of tools used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
               JavaScript framework used.
          </li>
          <li>
            <a href="https://openweathermap.org/"> Open Weather Map</a>
          </li>
        </ul>
      </div>
  )
};

module.exports = About;
