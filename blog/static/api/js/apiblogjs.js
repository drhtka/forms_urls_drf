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
                     '<div class="blog_text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-truncate">' + all_posts[i].text + '</div>' +
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



//     const url = 'https://example.com/profile';
//     const data = { username: 'example' };
//
//     try {
//         const response = await fetch(url, {
//             method: 'POST', // или 'PUT'
//             body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const json = await response.json();
//         console.log('Успех:', JSON.stringify(json));
//     } catch (error) {
//         console.error('Ошибка:', error);
// }

// {#.then(data => console.log(data))#}
// {#console.log('123')#}

//.then(json => this.productsApi(json))  // передаем в фомате json в функцию


///////////////////////////////////////////////////////////////////////////
/*
var params1 = (new URL(document.location)).searchParams; // берём данные из гет запроса
var categ_index = params1.get("categ_index")
var my_price_index = params1.get("price")
var curr_page_number = params1.get("page_number")
var mapPopup = document.getElementsByClassName("main_page")[curr_page_number-1] // текущаястраница подсвкечена синим


if (categ_index && categ_index !==0 && categ_index !=='0'){// если категория существует, т.е выбрана  и не равна нулю && categ_index !=='0' && categ_index !='0' && categ_index !=0
    console.log('categ_indexr-1')
    console.log(categ_index)


    var my_categ_name = document.getElementsByClassName('cat_inner')[categ_index-1].innerHTML // записыаем нмер нажатой категории -1 потому что с нуля
    document.getElementsByClassName('create_categ')[0].innerHTML = my_categ_name // записыаем для отображение в выпадающем что выбрано для прорисовки
}

if (my_price_index && my_price_index !==0 && my_price_index !=='0'){// если прайс существует, т.е выбран
    var my_price_name = document.getElementsByClassName('price_iner')[my_price_index].title// записыаем номер нажатого прайсав переменную
    document.getElementsByClassName('change_price')[0].innerHTML = my_price_name // записыаем для отображение в выпадающем что выбрано для прорисовки
}



console.log('mapPopup')
console.log(mapPopup)

if (curr_page_number && curr_page_number !==0 && curr_page_number !=='0') {

    mapPopup.classList.add('curr_page_number')
} else{
    document.getElementsByClassName("main_page")[0].classList.add('curr_page_number')
}


number_cat = 0
number_flag = 0
name_price = ''
name_cat = ''
function onclickPrice(my_this, flag, event) {
    // фильтрация по минимальной и мкаксимальной цене значение первого фильтра
    //event.preventDefault()
    name_price = my_this.innerHTML
    document.getElementsByClassName('change_price')[0].innerHTML = name_price// перезаписываем название цены при клике
    document.getElementsByClassName('price')[0].value = flag// присваиваем 1 и 0
    document.getElementsByClassName('page_number')[0].value = 1 // при фильтрации задаем 1 страницу пагинации
}
// по нажатию на выбор категории
// глобальна переменная перадаем id категории
function onclickCateg(my_categ, int_id, str_cat, event, flag_price){
    // фильтрация по категориям
    number_cat = int_id
    name_cat = str_cat
    document.getElementsByClassName('create_categ')[0].innerHTML = name_cat // перезаписываем название категрии при клике
    // перезаписываем название категории при клике


    document.getElementsByClassName("categ_index")[0].value = number_cat // перезаписываем номер категрии при клике
    document.getElementsByClassName('page_number')[0].value = 1// при фильтрации задаем 1 страницу пагинации
    // записываем в value айди категории

}
function saveDataForm(my_this){
    // отправа формы при нажатии на кнопку фильтр

    categ_index = document.getElementsByClassName('categ_index')[0].value
    price = document.getElementsByClassName('price')[0].value

    page_number = document.getElementsByClassName('page_number')[0].value
    if (page_number != 0){
        page_number = 1
    }

    location.href="/priceIndexSort/?price=" + price + "&page_number=" + page_number + "&categ_index=" + categ_index

}

categ_index = 0
price = 0
let params = (new URL(document.location)).searchParams;  // берём данные из гет запроса
categ_index = params.get("categ_index")
price = params.get("price")
document.getElementsByClassName('categ_index')[0].value = categ_index
document.getElementsByClassName('price')[0].value = price

function nextPage(my_this, page_number, event){
    event.preventDefault()//stop
    console.log('page_number')
    console.log(page_number)
    console.log(my_this, page_number)
    document.getElementsByClassName('page_number')[0].value = page_number
    categ_index = document.getElementsByClassName('categ_index')[0].value

    price = document.getElementsByClassName('price')[0].value
    document.getElementsByClassName('change_price')[0].innerHTML = name_price// записываем название цены при клике
    document.getElementsByClassName('create_categ')[0].innerHTML = name_cat// записываем название каегории при клике
    //https://ru.stackoverflow.com/questions/453355/javascript-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-get-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80
    console.log('price, categ_index')
    console.log(price, categ_index)
    if ( !categ_index || !price){
        console.log('if-1')
        let params = (new URL(document.location)).searchParams;  // берём данные из гет запроса
        categ_index = params.get("categ_index")
        price = params.get("price")
    }
    if ( categ_index && !price){
        console.log('if-2')
        let params = (new URL(document.location)).searchParams; // берём данные из гет запроса
        categ_index = params.get("categ_index")
        price = params.get("price")
    }
    if ( !categ_index && price){
        console.log('if-3')
        let params = (new URL(document.location)).searchParams; // берём данные из гет запроса
        categ_index = params.get("categ_index")
        price = params.get("price")
    }
    //console.log(price, categ_index, page_number)
    if (categ_index == null){
        categ_index = 0
    }
    if (price == null){
        price = 0
    }
    location.href="/priceIndexSort/?price=" + price + "&page_number=" + page_number + "&categ_index=" + categ_index
}

 */