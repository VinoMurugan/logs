const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
  render() {
    const logs = this.props.logs;
    
    return (
      <DefaultLayout title={"Captain's Log Entries"}>
        <nav>
          <a href="/logs/new">Create a New Log Entry</a>
        </nav>
        <ul>
        {this.props.logs.map((log, i) => (
            <li key={i}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
              is {log.shipIsBroken ? <span>Ship is broken</span> : <span>Ship is not broken</span>}
              {/* Your Delete Form Goes Here (Incomplete) */}
              <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/logs/${log._id}/edit`}>Edit This Log Entry</a>
            </li>
          ))}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
