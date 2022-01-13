
class AppDetail extends React.Component{
    constructor() {
        super();
        // помогает обращаться (запускат методы у себя из класса react.component)
        this.state = {  // state состояние глобальня память
            detail: []
        }
    }
    ApiGetEdit(id){
        location.href = '/blog/editlblogreact/' + id
    }

    ApiDeletJs(id){
        fetch("http://127.0.0.1:8991/api/posts/" + id, {
            method: 'delete',
        }).then(function (response) {
            console.log('response.json()')
            if (response){
                // console.log('response')
                // console.log(response.text())
                location.href = 'http://127.0.0.1:8991/blog/allpostsreact/'
            }
        })
    }

    componentDidMount(){
        const url = document.URL.split('/');
        let pk = url[5];
        console.log('url')
        console.log(pk)
        fetch('http://127.0.0.1:8991/api/posts/' + pk)
        .then(response => response.json())  // convert to json
        .then(data => this.setState({detail:data}))
        // console.log('detail')
        // console.log(this.state.detail)
        //.then(data => console.log(data))
    }

    /*<!-- выведем даные из сайта: -->*/
    render() {//  render зарезервированное имя в реакте выводит даные
        const list = this.state.detail.map((item, index)=>{

            // let href_url = "/blog/detailblogreact/" + item.id
            // let num_post = item.id
            return <div key={index} className="d-flex justify-content-start">
                <div className="m-4 p-4"><img className="main_img" src={item.photo}/></div>
                    <div className="d-flex flex-column m-4 p-4">
                        <div><span>Автор:</span>{item.author}</div>
                        <div><span>Тайтл:</span>{item.title}</div>
                        <div className="blog_id"><span>Номер поста: </span>{item.id}</div>
                        <div><span>Текст: </span>{item.text}</div>
                        <div className="publish_date"><span>Дата: </span>{item.publish_date}</div>
                        <a className="text-decoration-none btn border-2 border-success mb-2 mt-1" onClick={this.ApiGetEdit.bind(this, item.id)}><span>Редактировать </span></a>
                        <a className="text-decoration-none btn border-2 border-danger" onClick={this.ApiDeletJs.bind(this, item.id)}><span>Удалить </span></a>

            </div>
                </div>
                });
                return <div>
                            <div className='myPosts_style row row-blog-list'>{list}</div>
                        </div>;
    }
}
//  заливаем из виртуального дома при помощи обращения к айди
ReactDOM.render(
    <AppDetail/>,
    document.getElementById('appdetail')
);

