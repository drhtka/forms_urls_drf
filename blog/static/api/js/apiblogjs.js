myposts= document.getElementsByClassName('myPosts')[0];
var tesy = ''
var api_cicl = '<div></div>'
// var link = "{% url 'blog:ditail' all_posts[i].id %}";
var linkk = "/blog/ditail/"
var link = "/blog/apidetailblogjs/"
var media = '/media/'
// "<a href='" + link + "'>" + all_posts[i].title + "</a>"

function postsApi(data){

    // alert('1')
    tesy = '123445'
    // console.log('tesy')
    // console.log(tesy)
    // console.log('123445')
    // console.log(tesy)
    var all_posts = data
    for( i=0; i<all_posts.length; i++ ){

        api_cicl += '<div class="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-3 child-row">' +
                    '<a class="text-decoration-none" href=' + link + all_posts[i].id + '>' + all_posts[i].title + '</a>' +
                    '<div class="blog_id">' + '<span>Номер поста: </span>' + all_posts[i].id + '</div>' +
                    '<div>' +'<img class="main_img" src="' + all_posts[i].photo + '"/>' + '</div>' +
                    '<div class="blog_text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-truncate">' + all_posts[i].text + '</div>' +
                    //'<div class="author">' + all_posts[i].author + '</div>' +
                     '<div class="publish_date">' + all_posts[i].publish_date + '</div>' +
                    '</div>'

    }
    //console.log(myposts)
    myposts.innerHTML = myposts.innerHTML + api_cicl
    //console.log(myposts.innerHTML)
}

window.onload = postsApi

    fetch('/api/posts/')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(data => this.postsApi(data))
    // .then(data => console.log(data))
    // console.log('data')

//var params1 = (new URL(document.location)).searchParams; // берём данные из гет запроса

