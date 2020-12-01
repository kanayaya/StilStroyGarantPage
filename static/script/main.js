
const indexnav = document.getElementById('indexnav')
const aboutnav = document.getElementById('aboutnav')
const productnav = document.getElementById('productnav')
const licensenav = document.getElementById('licensenav')
const contactnav = document.getElementById('contactnav')
const title =  document.getElementById('title')


console.log(title.innerText)
if(title.innerText === 'СтильСтрой-Гарант в Иркутске') {
    indexnav.classList.add('navbtn-active')
}else if (title.innerText === 'О компании - СтильСтрой-Гарант') {
    aboutnav.classList.add('navbtn-active')
}else if (title.innerText === 'Каталог - СтильСтрой-Гарант') {
    productnav.classList.add('navbtn-active')
}else if (title.innerText === 'Лицензии - СтильСтрой-Гарант') {
    licensenav.classList.add('navbtn-active')
}else if (title.innerText === 'Обратная связь - СтильСтрой-Гарант') {
    contactnav.classList.add('navbtn-active')
}