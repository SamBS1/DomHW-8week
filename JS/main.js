// 1. Спросить у пользователя хочет ли он активировать темную тему(можно использовать confirm), если пользователь выбирает темную тему, то тогда мы меняем фон боди(темная тема: черный фон, белый текст; светлая тема: белый фон, черный текст), все темы должны быть указаны в классах CSS 
 
// let btn = document.querySelector('#confirm-btn') 
 
 
// btn.addEventListener('click', e =>{ 
//     let ask = confirm('Выбрать темную тему?') 
//     if(ask==true && e){ 
//         document.body.classList.toggle('dark') 
//     } 
// }) 
 
// 2. Создать пустой список в html документе, затем спросить у пользователя какие продукты добавить в список, пользователь может добавлять продукты в список бесконечно, пока не решит остановиться сам, список необходимо выводить на страницу html(у продукта должны быть название и цена) 
 
 
// let btn = document.querySelector('#add-btn') 
// let list = document.querySelector('#list') 
 
// btn.addEventListener('click', e =>{ 
//     let ask = prompt('Введите название товара и цену').split(' ') 
 
//     list.innerHTML += <li>Product: ${ask[0]}, Price: ${ask[1]}</li> 
 
// }) 
 
// 3. Запросить у пользователя информацию, что он хочет добавить на страницу, картинку(путь к картинке, ширина, высота) или блок(цвет фона блока, ширина, высота), затем добавить этот элемент на страницу и спросить у пользователя, хочет ли он добавить еще элменты на страницу, если да, то заново спросить что добавить и так до бесконечности(либо цикл, либо кнопки), пока пользователь сам не захочет остановиться(элементы должны именно добавляться, а не перезаписывать предыдущие) 
 
// let addImg = document.querySelector('#add-image'); 
// let addBlock = document.querySelector('#add-block'); 
 
// addImg.addEventListener('click', e => { 
//     let ask = prompt('Enter link, width and height with space between them'); 
//     ask = ask.split(' ') 
 
//     let img = document.createElement('img') 
//     document.body.append(img); 
 
//     img.src = ask[0] 
//     img.style.width = ask[1] + "px" 
//     img.style.height = ask[2] + "px" 
// }) 
 
// addBlock.addEventListener('click', e => { 
//     let ask = prompt('Enter color, width and height with space between them'); 
//     ask = ask.split(' ') 
 
//     let div = document.createElement('div') 
//     document.body.append(div); 
 
//     div.style.backgroundColor = ask[0] 
//     div.style.width = ask[1] + "px" 
//     div.style.height = ask[2] + "px" 
// }) 
 
 
// 4. Дан массив с продуктами, задача: отобразить все продукты на странице(обязательно нужно выводить картинку, категорию, название, остальное на ваше усмотрение), также должна быть функция фильтрации по категории, то есть, вызываем функцию и она спрашивает у пользователя по какой категории нужно отфильтровать товары, указываем категорию и на странице остаются только те товары, которые относятся к данной категории(вызов функции фильтрации производить по нажатию на кнопку ОТФИЛЬТРОВАТЬ) 
 
 
 
// let db = [ 
//     { 
//         title: 'Samsung S10', 
//         category: 'electronics', 
//         price: 700, 
//         desc: 'Super phone for your life!', 
//         img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png' 
//     }, 
//     { 
//         title: 'iPhone 13 Pro', 
//         category: 'electronics', 
//         price: 1100, 
//         desc: 'One of the most powerful cameras!', 
//         img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg' 
//     }, 
//     { 
//         title: 'Apple', 
//         category: 'fruits', 
//         price: 2, 
//         desc: 'Healthy fruit that is used in many dishes and desserts.', 
//         img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg' 
//     }, 
//     { 
//         title: 'Orange', 
//         category: 'fruits', 
//         price: 7, 
//         desc: 'Fruit for one of the most popular types of juice.', 
//         img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg' 
//     }, 
//     { 
//         title: 'Audi R8', 
//         category: 'cars',
//         price: 98000, 
//         desc: 'A sports car that can reach tremendous speed.', 
//         img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg' 
//     } 
// ] 
     
 
// let list = document.querySelector('ul') 
// let btn = document.querySelector('#filter') 
// let render = document.querySelector('#render') 
 
// function renders() { 
//     list.innerHTML = '' 
//     db.forEach(item => { 
//         let li = document.createElement('li'); 
//         list.append(li) 
//         li.innerText = `Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price}` 
//         let img = document.createElement('img'); 
//         li.append(img) 
//         img.src = item.img 
//         img.width = '100'; 
//         img.height = '100';  
//     }) 
// } 
 
// renders() 
 
// btn.addEventListener('click', e => { 
//     let ask = prompt('Какая категория вам нужна?'); 
//     list.innerHTML = '' 
//     db.forEach(item => { 
//         if(item.category == ask) { 
//             let li = document.createElement('li'); 
//             list.append(li) 
//             li.innerText = `Категория: ${item.category}; Название: ${item.title}, Цена: ${item.price} `
//             let img = document.createElement('img'); 
//             li.append(img) 
//             img.src = item.img 
//             img.width = 100; 
//             img.height = 100 
//         } 
//     }) 
// }) 
 
// renders.addEventListener('click', e => { 
//     show() 
// }) 
 
 
// 5. Сохранение продуктов. Запросить у пользователя название, цену и картинку. Необходимо выводить данные о продуктах на страницу в любом удобном виде(карточки, список, блоки), если цена продукта ниже, чем 100$, то текстовая информация о товаре должна подсвечиваться красным цветом, если цена больше 100$, текст должен подсвечиваться зеленым 




// let list = document.querySelector('ul') 

// let ask = prompt('введите название, цену и картинку (через пробел)').split(' ')

// let db = [{
//     title: ask[0],
//     price: ask[1],
//     img: ask[2]
// }]

// function render() { 
//     list.innerHTML = '' 
//     db.forEach((item) => { 
//         let li = document.createElement('li'); 
//         list.append(li) 
//         li.innerText = `Название: ${item.title}, Цена: ${item.price}` 
//         let img = document.createElement('img'); 
//         li.append(img) 
//         img.src = item.img 
//         img.width = '100'; 
//         img.height = '100';  
//         if(item.price < 100){
//             li.style.color = 'red'
//         }else{
//             li.style.color = 'green'
//         }
//     }) 

// } 

// render() 



// 6. Регистрация пользователей, создать форму в которой будем запрашивать информацию о пользователе(имя, пароль, возраст, имя может быть не уникальным, но у каждого должен быть айди, также при сохранении объекта пользователя добавляется ключ mailing со значением false - это рассылка новостей), также реализовать вывод пользователей на страницу(вывод может быть в любом удобном виде), напротив каждого пользователя должен быть инпут с типом чекбокс, как раз он и будет отвечать за рассылку, изменяется инпут - изменяется значение ключа mailing, также должна быть сама функция рассылки(на странице должна быть кнопка по нажатию на которую и будет запускаться функция), которая будет отправлять сообщение только тем пользователям, которые подписаны на рассылку(вывод может быть любым, алерт, консоль, страница) 
let nameInp = document.querySelector('#inp-name')
let passInp = document.querySelector('#inp-pass')
let ageInp = document.querySelector('#inp-age')

let addBtn=document.querySelector('.add-btn')

let getList = document.querySelector('ul')
let getCheckbox = document.querySelector('#checkbox')

let db = []

addBtn.addEventListener('click', e =>{
    e.preventDefault()
    
    if(!nameInp.value.trim() || !passInp.value.trim() || !ageInp.value.trim()){
        alert('Some inputs are empty')
        return
    }
    
    let newObj = {
        id: Date.now(),
        name: nameInp.value,
        pass: passInp.value,
        age: ageInp.value,
        mailing: false
    };
    
        
        db.push(newObj)  
        nameInp.value = '';
        passInp.value = '';
        ageInp.value = '';
        
        render()
    })
    
console.log(db.mailing);

function render(){
    getList.innerHTML = '' 
    db.forEach((item) => { 
        let li = document.createElement('li'); 
        getList.append(li) 
        li.innerText += `Имя: ${item.name}, Возраст: ${item.age}, подписаться на рассылку?` //, : ${item.mailing}

        
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "checkbox");
        // checkbox.setAttribute("checked", "checked")
        checkbox.setAttribute("value", "false")
        getList.append(checkbox)
        li.innerHTML + checkbox
        checkboxTrue()
    })
}


function checkboxTrue(){
checkbox.addEventListener('click', e =>{
    if(e){
        db.mailing = true
    }
})
}






let btn = document.querySelector('#mail')
btn.addEventListener('click', e => {
    if(e && db.mailing == true){
        alert('что типо рассылки да')
    } 
})