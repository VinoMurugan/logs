const React = require('react');
const DefaultLayout = require('./layout/Default.jsx');

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Captain's Log">
        {/* Edit form */}
        <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={this.props.log.title} /><br />

          <label>Entry:</label>
          <textarea name="entry" defaultValue={this.props.log.entry}></textarea><br />

          <label>Is Ship Broken:</label>
          {this.props.log.shipIsBroken
            ? <input type="checkbox" name="shipIsBroken" defaultChecked />
            : <input type="checkbox" name="shipIsBroken" />
          }
          <br />

          <input type="submit" value="Save Changes" />
        </form>
        
        {/* Link back to the index page */}
        <a href="/logs">Back to Captain's Log</a>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
