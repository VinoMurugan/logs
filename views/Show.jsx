const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
    render() {
        const log = this.props.log; // Rename 'fruit' to 'log' for consistency
        console.log(log);

        return (
            <DefaultLayout title={`Captain's Log - ${log.title}`}>
                <h1>{log.title}</h1>
                <p>Entry: {log.entry}</p>
                <p>Ship Status: {log.shipIsBroken ? 'Broken' : 'Not Broken'}</p>
                <a href='/logs'>Back to Index</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
