mypostsdetail= document.getElementsByClassName('myPostsDetail')[0];
var tesy = ''
var api_one = '<div></div>'

// var link = "{% url 'blog:ditail' all_posts[i].id %}";
var linkk = "/blog/ditail/"
var link = "/api/posts/"
var media = '/media/'
// "<a href='" + link + "'>" + all_posts[i].title + "</a>"

function postsApiDetail(data){

    var one_post = data[0]


        api_one += '<div class="d-flex justify-content-start">' +
                        '<div class=" m-4 p-4">' +
                        '<img class="main_img" src="' + one_post.photo + '"/>' + '</div>' +

                        '<div class="d-flex flex-column m-4 p-4">' +
                                '<div>' + '<span>Автор:</span>' + one_post.author + '</div>' +
                                '<div>' + '<span>Тайтл:</span>' + one_post.title + '</div>' +
                                '<div class="blog_id">' + '<span>Номер поста: </span>' + one_post.id + '</div>' +
                                '<div>' + '<span>Текст: </span>' + one_post.text + '</div>' +
                                '<div>' + '<span>Дата: </span>' + one_post.publish_date + '</div>' +
            '<a class="text-decoration-none" href=' + link + one_post.id + '>' + '<span">Редактировать </span>' + '</a>' +
            '<a class="text-decoration-none" href=' + link + one_post.id + '>' + '<span>Удалить </span>' + '</a>' +
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
//window.onload = postsApii
    //fetch('/api/posts/')
    // Handle success
    //.then(response => response.json())  // convert to json
    //.then(data => this.postsApi(data))
    // .then(data => console.log(data))
    // console.log('data')



    fetch('http://127.0.0.1:8991/api/posts/8')
        // Handle success
        .then(response => response.json())  // convert to json
        .then(data => this.postsApiDetail(data))
        //then(data => console.log(data))






