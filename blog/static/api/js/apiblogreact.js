// The React.JS code for the download method:


class App extends React.Component{
    constructor() {
        super();
        // console.log('444')
        // alert('1234')
        this.state = {
            // name : 'Ivan',
            // years : 25,
            posts: [],
            // itemtovars:[
            //     {name: 'iphone b7', price: 123, categ: 'apple', catid: 0},
            //     {name: 'lenovo xxx', price: 321, categ: 'lenovo', catid: 1},
            //     {name: 'samsung xx', price: 232,categ: 'samsung', catid: 2},
            //     {name: 'iphone x', price: 434, categ: 'apple', catid: 0}
            // ],
        }
    }
    componentDidMount(){
        console.log('123')
        fetch('/api/posts/')
            // Handle success
            .then(response => response.json())  // convert to json
            .then(json => this.setState({posts:json}))
            console.log('data')
    }

    render() {
        console.log('test_react')
        console.log(this.state.posts)
        // // alert('1234')
        const list = this.state.posts.map((item, index)=>{
            let href_url = "/blog/detailblogreact/" + item.id
            let num_post = item.id
            return <div key={index} className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-3 child-row">
                <a className='text-decoration-none' href={href_url}>{item.title}</a>
                <div className="blog_id"><span>Номер поста: </span>{num_post}</div>
                <div><img className="main_img" src={item.photo}/></div>
                <div className="blog_text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-truncate">{item.text}</div>
                <div className="publish_date">{item.publish_date}</div>
            </div>
        });
        return <div>

            {/*<div>имя: {this.state.name}</div> возраст: {this.state.years}*/}
            <div className='myPosts_style row row-blog-list'>{list}</div>
        </div>;

    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);


