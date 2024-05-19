// const admin = document.querySelector('.admin')
const car_image = document.querySelector('.car_image')
const car_name = document.querySelector('.car_name')
const car_model = document.querySelector('.car_model')
const car_year = document.querySelector('.car_year')
const car_range = document.querySelector('.car_range')
const car_body = document.querySelector('.car_body')
const car_color = document.querySelector('.car_color')
const car_engine = document.querySelector('.car_engine')
const car_wheelDrive = document.querySelector('.car_wheelDrive')
const car_state = document.querySelector('.car_state')
const car_steering = document.querySelector('.car_steering')
const car_owner = document.querySelector('.car_owner')
const car_change = document.querySelector('.car_change')
const car_phone = document.querySelector('.phone')
const car_price = document.querySelector('.car_price')
const car_save = document.querySelector('.car_save')


car_save.addEventListener('click', () => {
    if(!car_image.value.trim() || !car_name.value.trim() || !car_model.value.trim() || !car_year.value.trim() || !car_range.value.trim() || !car_body.value.trim() || !car_color.value.trim() || !car_engine.value.trim() || !car_wheelDrive.value.trim() || !car_state.value.trim() || !car_steering.value.trim() || !car_owner.value.trim() || !car_change.value.trim() || !car_phone.value.trim() || !car_price.value.trim()) {
        alert('Заполните пустоту')
        return;
    }

    const newProduct = {
        car_image: car_image.value,
        car_name: car_name.value,
        car_model: car_model.value,
        car_year: car_year.value,
        car_range: car_range.value,
        car_body: car_body.value,
        car_color: car_color.value,
        car_engine: car_engine.value,
        car_wheelDrive: car_wheelDrive.value,
        car_state: car_state.value,
        car_steering: car_steering.value,
        car_owner: car_owner.value,
        car_change: car_change.value,
        car_phone: car_phone.value,
        car_price: car_price.value,        
    }


    let data = JSON.parse(localStorage.getItem('auto')) || []
    data.push(newProduct)
    localStorage.setItem('auto', JSON.stringify(data))
})