// const content = [
//     {
//         imgSrc: 'https://kedoff.net/images/category/e0789f26991061944cd53c1d6267beba.jpg',
//         title: 'Туфли',
//         category: 'обувь'
//     },
//     {
//         imgSrc: 'https://all-stars.kz/upload/resize_cache/iblock/230/rzcifymqjm49sm1p8vyzig64fpr38xa1/457_457_1/CD2563-101_a.jpg',
//         title: 'Крассовки Nike',
//         category: 'Обувь'
//     },
//     {
//         imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hd9/86060151439390.jpg?format=gallery-large',
//         title: 'Крассовки',
//         category: 'Обувь'
//     },
//     {
//         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFBDSyYKzsAud0FvkruCgtYEccKUYLWzExg&s',
//         title: 'Куртка',
//         category: 'Верхняя одежда'
//     },
//     {
//         imgSrc: 'https://a.lmcdn.ru/img600x866/R/T/RTLABP311301_17675140_1_v1_2x.jpg',
//         title: 'Пальто',
//         category: 'Верхняя одежда'
//     },
//     {
//         imgSrc: 'https://media.frgroup.kz/images/ca/6d/c28f8905bbd8181a20790e99e6e4.jpg',
//         title: 'Брюки',
//         category: 'Брюки'
//     }
// ]


// const tabNav = document.querySelector('.tab-navs')
// const tabContent = document.querySelector('.tab-content')

// let outputTabNav = ''
// let outputTabContent = ''
// let categories = []

// for (const value of content){
//     categories.push(value.category)
//     outputTabContent += `
//         <div class="tab-item">
//         <h4>${value.title}</h4>
//         </div>
//     `
// }

// categories = [...new Set(categories)]
// outputTabNav += `<button class = "tab-btn">Все</button>`

// for(const item of content){
//     outputTabNav += `<button class = "tab-btn" onclick="changeContent(${item})">${item.category}</button>`
// }

// tabNav.innerHTML = outputTabNav
// tabContent.innerHTML = outputTabContent

// function changeContent(current){
//     let output = ''

//     for(const item of content){
//         if(item.category === current) {
//             output += `
//              <div class="tab-item">
//             <h4>${value.title}</h4>
//             </div>
//         `
//     }
// }
// tabContent.innerHTML = output

// }


const content = [
    {
        imgSrc: 'https://kedoff.net/images/category/e0789f26991061944cd53c1d6267beba.jpg',
        title: 'Туфли',
        category: 'Обувь'
    },
    {
        imgSrc: 'https://all-stars.kz/upload/resize_cache/iblock/230/rzcifymqjm49sm1p8vyzig64fpr38xa1/457_457_1/CD2563-101_a.jpg',
        title: 'Кроссовки Nike',
        category: 'Обувь'
    },
    {
        imgSrc: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hd9/86060151439390.jpg?format=gallery-large',
        title: 'Кроссовки',
        category: 'Обувь'
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFBDSyYKzsAud0FvkruCgtYEccKUYLWzExg&s',
        title: 'Куртка',
        category: 'Верхняя одежда'
    },
    {
        imgSrc: 'https://a.lmcdn.ru/img600x866/R/T/RTLABP311301_17675140_1_v1_2x.jpg',
        title: 'Пальто',
        category: 'Верхняя одежда'
    },
    {
        imgSrc: 'https://media.frgroup.kz/images/ca/6d/c28f8905bbd8181a20790e99e6e4.jpg',
        title: 'Брюки',
        category: 'Брюки'
    }
];

const tabNav = document.querySelector('.tab-navs');
const tabContent = document.querySelector('.tab-content');

let categories = [...new Set(content.map(item => item.category))];

// Создаем кнопки вкладок
let outputTabNav = `<button class="tab-btn" onclick="changeContent('Все')">Все</button>`;

for (const category of categories) {
    outputTabNav += `<button class="tab-btn" onclick="changeContent('${category}')">${category}</button>`;
}

tabNav.innerHTML = outputTabNav;

// Функция для отображения контента
function changeContent(currentCategory) {
    let output = '';

    for (const item of content) {
        if (currentCategory === 'Все' || item.category === currentCategory) {
            output += `
                <div class="tab-item">
                    <img src="${item.imgSrc}" alt="${item.title}" width="100">
                    <h4>${item.title}</h4>
                </div>
            `;
        }
    }
    tabContent.innerHTML = output;
}

// Показываем все товары по умолчанию

