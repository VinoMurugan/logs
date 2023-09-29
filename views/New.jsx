const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Log Entry</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" /><br />
          Entry: <textarea name="entry"></textarea><br />
          Is the ship broken? <input type="checkbox" name="shipIsBroken" /><br />
          <input type="submit" value="Create Log" />
        </form>
      </div>
    );
  }
}

module.exports = New;
