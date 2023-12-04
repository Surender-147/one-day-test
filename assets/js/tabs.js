var tab1 = document.querySelector("#tab1")
var tab2 = document.querySelector("#tab2")
var tab3 = document.querySelector("#tab3")
var tab4 = document.querySelector("#tab4")
var tab5 = document.querySelector("#tab5")

var panel1 = document.querySelector(".tab_panel1")
var panel2 = document.querySelector(".tab_panel2")
var panel3 = document.querySelector(".tab_panel3")
var panel4 = document.querySelector(".tab_panel4")
var panel5 = document.querySelector(".tab_panel5")

tab1.addEventListener('click', () => {
    panel1.style.display = "block"
    panel2.style.display = "none"
    panel3.style.display = "none"
    panel4.style.display = "none"
    panel5.style.display = "none"
    tab1.classList.add("active1")
    tab2.classList.remove("active1")
    tab3.classList.remove("active1")
    tab4.classList.remove("active1")
    tab5.classList.remove("active1")
})
tab2.addEventListener('click', () => {
    panel1.style.display = "none"
    panel2.style.display = "block"
    panel3.style.display = "none"
    panel4.style.display = "none"
    panel5.style.display = "none"
    tab2.classList.add("active1")
    tab1.classList.remove("active1")
    tab3.classList.remove("active1")
    tab4.classList.remove("active1")
    tab5.classList.remove("active1")

})
tab3.addEventListener('click', () => {
    panel1.style.display = "none"
    panel2.style.display = "none"
    panel3.style.display = "block"
    panel4.style.display = "none"
    panel5.style.display = "none"
    tab3.classList.add("active1")
    tab1.classList.remove("active1")
    tab2.classList.remove("active1")
    tab4.classList.remove("active1")
    tab5.classList.remove("active1")
})
tab4.addEventListener('click', () => {
    panel1.style.display = "none"
    panel2.style.display = "none"
    panel3.style.display = "none"
    panel4.style.display = "block"
    panel5.style.display = "none"
    tab4.classList.add("active1")
    tab1.classList.remove("active1")
    tab2.classList.remove("active1")
    tab3.classList.remove("active1")
    tab5.classList.remove("active1")
})
tab5.addEventListener('click', () => {
    panel1.style.display = "none"
    panel2.style.display = "none"
    panel3.style.display = "none"
    panel4.style.display = "none"
    panel5.style.display = "block"
    tab5.classList.add("active1")
    tab1.classList.remove("active1")
    tab2.classList.remove("active1")
    tab3.classList.remove("active1")
    tab4.classList.remove("active1")
})