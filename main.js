const main = document.querySelector('.main')
readProduct()


function readProduct () {
    let data = JSON.parse(localStorage.getItem('auto')) || []
    main.innerHTML = ''
    data.forEach((el, index) => {
        const box = document.createElement('div')
        const box_img = document.createElement('img')
        const text_content = document.createElement('div')
        const box_name = document.createElement('p')
        const box_model = document.createElement('p')
        const box_year = document.createElement('p')
        const box_range = document.createElement('p')
        const box_body = document.createElement('p')
        const box_color = document.createElement('p')
        const box_engine = document.createElement('p')
        const box_wheel = document.createElement('p')
        const box_state = document.createElement('p')
        const box_steering = document.createElement('p')
        const box_owner = document.createElement('p')
        const box_change = document.createElement('p')
        const box_phone = document.createElement('p')
        const box_price = document.createElement('p')
        const active_block = document.createElement('div')
        const box_like = document.createElement('button')
        const box_delete = document.createElement('button')
        const box_buy = document.createElement('button')



        box.classList.add('box')
        box_img.classList.add('box_img')
        text_content.classList.add('text_content')
        box_name.classList.add('box_name')
        box_model.classList.add("box_model")
        box_year.classList.add('box_year')
        box_range.classList.add("box_range")
        box_body.classList.add('box_body')
        box_color.classList.add('box_color')
        box_engine.classList.add('box_engine')
        box_wheel.classList.add('box_wheel')
        box_state.classList.add('box_state')
        box_steering.classList.add('box_steering')
        box_owner.classList.add('box_owner')
        box_change.classList.add('box_change')
        box_phone.classList.add('box_phone')
        box_price.classList.add('box_price')
        active_block.classList.add('active_block')
        box_like.classList.add('box_like')
        box_delete.classList.add('box_delete')
        box_buy.classList.add('box_buy')


        box_img.src = el.car_image;
        box_name.innerText = `Марка: ${ el.car_name}`
        box_model.innerText = `Модель: ${ el.car_model}`
        box_year.innerText = `Год выпуска: ${el.car_year}`
        box_range.innerText = `Пробег авто: ${el.car_range}`
        box_body.innerText = `Кузов: ${el.car_body}`
        box_color.innerText = `Цвет авто: ${el.car_color}`
        box_engine.innerText = `Обьем двигателя: ${el.car_engine}`
        box_wheel.innerText = `Тип привода: ${el.car_wheelDrive}`
        box_state.innerText = `Состояние авто: ${el.car_state}`
        box_steering.innerText = `Расположение руля: ${el.car_steering}`
        box_owner.innerText = `Хозяин: ${el.car_owner}`
        box_change.innerText = `Обмен: ${el.car_change}`
        box_phone.innerText = `Контакты: ${el.car_phone}`
        box_price.innerText = `Цена: ${el.car_price} $`
        box_like.innerHTML = `<ion-icon name="heart-circle-outline"></ion-icon>`
        box_delete.innerHTML = `<ion-icon name="close-outline"></ion-icon>`
        box_buy.innerText = 'Купить'


        box.append(box_img)
        text_content.append(box_name)
        text_content.append(box_model)
        text_content.append(box_year)
        text_content.append(box_range)
        text_content.append(box_body)
        text_content.append(box_color)
        text_content.append(box_engine)
        text_content.append(box_wheel)
        text_content.append(box_state)
        text_content.append(box_steering)
        text_content.append(box_owner)
        text_content.append(box_change)
        text_content.append(box_phone)
        text_content.append(box_price)
        active_block.append(box_like)
        active_block.append(box_delete)
        active_block.append(box_buy)
        box.append(text_content)
        box.append(active_block)

        main.append(box)
        console.log(main);



        //! ACTION BLOCK

        box_delete.addEventListener('click', () => {
            deleteProduct(index)
        })


        box_like.addEventListener('click', () => {
            box_like.style.color = 'red'

            const productData = {
                car_image: el.car_image,
                car_name: el.car_name,
                car_model: el.car_model,
                car_year: el.car_year,
                car_range: el.car_range,
                car_body: el.car_body,
                car_color: el.car_color,
                car_engine: el.car_engine,
                car_wheelDrive: el.car_wheelDrive,
                car_state: el.car_state,
                car_steering: el.car_steering,
                car_owner: el.car_owner,
                car_change: el.car_change,
                car_phone: el.car_phone,
                car_price: el.car_price
            };
        
            addToCart(productData);
        })
        
    })
}



function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));
}


const korzina = document.querySelector('.korzina');

function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    korzina.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.car_image}" alt="Car Image">
            <p>${item.car_name}</p>
            <p>${item.car_price} $</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        korzina.appendChild(cartItem);
    });
}

displayCart();


function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}




// DELETE

function deleteProduct (id) {
    let data = JSON.parse(localStorage.getItem('auto')) || []
    data.splice(id, 1)
    localStorage.setItem('auto', JSON.stringify(data))
    readProduct()
}