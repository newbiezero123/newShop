var product =[{
    id:1,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 5000,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
}, {
    id:2,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 6500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'dog'
},{
    id:3,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:4,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:5,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:6,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:7,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:8,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:9,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
},{
    id:10,
    img: 'imgs/4.png',
    name: 'แมวส้ม',
    price: 4500,
    description: 'เลี้ยงสัตว์เลี้ยงในไทย หรือในชุมชนที่นิยมใช้คำนี้',
    type: 'cat'
}
];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html+= `<div class="product-item ${product[i].type}">
                    <img class="product-size" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 0.9vw;">${numberWithCommas(product[i].price)}THB</p>
                </div>`;
    }
    $("#productlist").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
