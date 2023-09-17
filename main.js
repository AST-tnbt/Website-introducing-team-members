const data = [
    {
        img: "./img/vĩnh.png",
        name: "VÕ ĐỨC VĨNH",
        code: "22521684",
        class: "HTTT2022.2",
        birthplace: "Quảng Ngãi.",
        hobby: "Chơi game, chơi bóng chuyền."
    },
    {
        img: "./img/súa.png",
        name: "DƯƠNG VĂN SÚA",
        code: "22521267",
        class: "HTTT2022.2",
        birthplace: "Đăk Nông.",
        hobby: "Chơi bóng đá, bóng chuyền, chơi game, đi phượt, tham gia các seminar về khoa học công nghệ."
    },
    {
        img: "./img/phát.png",
        name: "NGUYỄN THỊNH PHÁT",
        code: "22521075",
        class: "MMT2022.2",
        birthplace: "Quảng Ngãi.",
        hobby: "Chơi game, âm nhạc, mỹ thuật."
    },
    {
        img: "./img/tín.png",
        name: "TRỊNH NGUYÊN BẢO TÍN",
        code: "22521482",
        class: "HTTT2022.2",
        birthplace: "Quảng Ngãi.",
        hobby: "Đọc sách, âm nhạc, chơi game."
    },
    {
        img: "./img/vĩ.png",
        name: "NGUYỄN CHÍ VĨ",
        code: "22521656",
        class: "HTTT2022.2",
        birthplace: "Phú Yên.",
        hobby: "Đọc truyện, leo núi."
    }
];

const infoBox = document.getElementById("info__box");
const modalLayer = document.getElementById("modal__layer");
function displayInfoBox(index) {
    modalLayer.style.display = "block";
    infoBox.innerHTML = `
        <i class="fa-solid fa-circle-xmark close-icon" onclick="closeInfoBox()"></i>
        <img src=${data[index].img} alt="Member Image" class="modal__box__img">
        <div class="info-member">
            <h2 class="info-member__name">${data[index].name}</h2>
            <h2 class="info-member__code">${data[index].code}</h2>
            <div class="separate-line"></div>
            <h2 class="info-member__class">Lớp: ${data[index].class}</h2>
            <h2 class="info-member__birthplace">Quê quán: ${data[index].birthplace} </h2>
            <h2 class="info-member__hobby">Sở thích: ${data[index].hobby} </h2>
        </div>
    `;
    infoBox.style.display = "flex";
}
function closeInfoBox() {
    modalLayer.style.display = "none";
    infoBox.style.display = "none";
}