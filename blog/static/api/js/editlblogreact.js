// The React.JS code for the download method:
class Appe extends React.Component{
    constructor() {
        super();
        this.state = {
            name : 'Ivan',
            years : 25,
        }
    }
    render() {
        console.log('test_react')
        alert('1234')
        return <div>
            <div>имя: {this.state.name}</div>
            <div>возраст: {this.state.years}</div>
        </div>;
    }
}
ReactDOM.render(
    <Appe/>,
    document.getElementById('appe')
);
