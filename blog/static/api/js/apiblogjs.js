myposts= document.getElementsByClassName('myPosts')[0];
var tesy = ''
var api_cicl = '<div></div>'
var link = "{% url 'blog:ditail' all_posts[i].id %}";
var linkk = "/blog/ditail/"
// "<a href='" + link + "'>" + all_posts[i].title + "</a>"
var link1 = "<a href={% url 'blog:ditail' "
var link2 = " %}>"
var link3 = "</a>"


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
            "<a href=" + linkk + all_posts[i].id + ">" + all_posts[i].title + "</a>" +
                    // "<a href={% url 'blog:ditail'" + all_posts[i].id + " %}>" + all_posts[i].title + "</a>" +
                    // "<a href='" + link + "'>" + all_posts[i].title + "</a>" +
                    '<div class="author">' + all_posts[i].author + '</div>' +
                    '<div class="blog_id">' + all_posts[i].id + '</div>' +
                     '<div class="publish_date">' + all_posts[i].publish_date + '</div>' +
                     '<div class="blog_text">' + all_posts[i].text + '</div>' +
                    '</div>'

    }
    console.log(myposts)
    myposts.innerHTML = myposts.innerHTML + api_cicl
    console.log(myposts.innerHTML)
}

window.onload = postsApi

    fetch('http://127.0.0.1:8991/api/posts/')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(data => this.postsApi(data))
// {#.then(data => console.log(data))#}
// {#console.log('123')#}

//.then(json => this.productsApi(json))  // передаем в фомате json в функцию