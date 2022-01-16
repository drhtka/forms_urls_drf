mypostsdetail= document.getElementsByClassName('myPostsDetail')[0];
var tesy = ''
var api_one = '<div></div>'

// var link = "{% url 'blog:ditail' all_posts[i].id %}";
var linkk = "/blog/ditail/"
var link = "http://127.0.0.1:8991/api/posts/"
var media = '/media/'
// "<a href='" + link + "'>" + all_posts[i].title + "</a>"

function postsApiDetail(data){

    var one_post = data[0]
    var newImage = document.createElement('img')

        api_one += '<div class="d-flex justify-content-start">' +
                        '<div class=" m-4 p-4">' + '<span></span>' +
                        '<img class="main_img" src="' + one_post.photo + '"/>' + '</div>' +
                        '<div class="d-flex flex-column m-4 p-4">' +
                                '<div>' + '<span>Автор:</span>' + one_post.author + '</div>' +
                                '<div>' + '<span>Тайтл:</span>' + one_post.title + '</div>' +
                                '<div class="blog_id">' + '<span>Номер поста: </span>' + one_post.id + '</div>' +
                                '<div>' + '<span>Текст: </span>' + one_post.text + '</div>' +
                                '<div>' + '<span>Дата: </span>' + one_post.publish_date + '</div>' +
            '<a class="text-decoration-none btn border-2 border-success mb-2 mt-1" onclick=ApiGetEdit(' + one_post.id + ')>' + '<span">Редактировать </span>' + '</a>' +
            '<a class="text-decoration-none btn border-2 border-danger" onclick=ApiDeletJs(' + one_post.id + ')>' + '<span>Удалить </span>' + '</a>' +
            // '<a class="text-decoration-none btn border-2 border-danger" href=' + link + one_post.id + '>' + '<span>Удалить </span>' + '</a>' +
                '</div>' +
                '</div>'


            // <div class="date">
            //     <a href="{% url 'blog:edit' pk=post_ditail.pk %}"><span style="color: blue">редактировать </span></a>
            //     <div><a href="{% url 'blog:delete' pk=post_ditail.pk %}"><span>Удалить</span></a></div>
            // </div>

        mypostsdetail.innerHTML = mypostsdetail.innerHTML + api_one
}
            // '<div class="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-3 child-row">' +
            //
            //         '<a class="text-decoration-none" href=' + linkk + all_posts[i].id + '>' + all_posts[i].title + '</a>' +
            //
            //         '<div class="blog_id">' + '<span>Номер поста: </span>' + all_posts[i].id + '</div>' +
            //
            //         '<div>' +'<img class="main_img" src="' + all_posts[i].photo + '"/>' + '</div>' +
            //         '<div class="blog_text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-truncate">' + all_posts[i].text + '</div>' +
            //         //'<div class="author">' + all_posts[i].author + '</div>' +
            //          '<div class="publish_date">' + all_posts[i].publish_date + '</div>' +
            //         '</div>'



    //console.log(myposts)

    //console.log(myposts.innerHTML)



window.onload = postsApiDetail

    //postsApiDetail
//window.onload = postsApii
    //fetch('/api/posts/')
    // Handle success
    //.then(response => response.json())  // convert to json
    //.then(data => this.postsApi(data))
    // .then(data => console.log(data))
    // console.log('data')

// var params1 = (new URL(document.location)).searchParams; // берём данные из гет запроса
//document.URL

const url = document.URL.split('/');
let pk = url[5];
// var categ_index = params1.get("categ_index")
    fetch('http://127.0.0.1:8991/api/posts/' + pk)
        // Handle success
        .then(response => response.json())  // convert to json
        .then(data => this.postsApiDetail(data))
        //then(data => console.log(data))

function ApiGetEdit(id){
        pk = id
    location.href = '/blog/apieditblogjs/' + pk
}

function ApiDeletJs(){
    fetch("http://127.0.0.1:8991/api/posts/" + pk, {
        method: 'delete',
    }).then(function (response) {
        console.log('response.json()')
        if (response){
            // console.log('response')
            // console.log(response.text())
            location.href = 'http://127.0.0.1:8991/blog/apiblogjs/'
        }
    })
}




