class App2 extends React.Component{
    constructor() {
        super();
        this.state = {
            name : 'Товары',
            price : 'Цена',
        }
    }
    mytest(){
        alert(123)
    }

    mytest2(mystring){
        alert(mystring)
    }
    render() {
        return <div>
            <div>пункт 1: {this.state.name}</div> пункт 2: {this.state.price}
            <div><button onClick={this.mytest}>Вызов алерта</button></div>
            <div><button onClick={this.mytest2.bind(this, 'Helo Webyk!!!')}>Hello</button></div>
        </div>;
    }
}

ReactDOM.render(
    <App2/>,
    document.getElementById('app2')
);