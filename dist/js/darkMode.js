const checkbox =document.querySelector('#toggle');
const html= document.querySelector("html")
const dark = document.querySelector('#dark');
const dark1 = document.querySelector('#dark1');
const dark2 = document.querySelector('#dark2');
const dark3 = document.querySelector('#dark3');
const dark4 = document.querySelector('#testimonial-dark');


const toggleDarkMode =function (){
    checkbox.checked 
    ? html.classList.add("dark")
    : html.classList.remove("dark")

    checkbox.checked
    ?dark.classList.add("dark")
    :dark.classList.remove("dark")

    checkbox.checked
    ?dark4.classList.remove("testimonial-container--white")
    :dark4.classList.add("testimonial-container--white")

     checkbox.checked
    ?dark4.classList.add("testimonial-container--dark")
    :dark4.classList.remove("testimonial-container--dark")

    checkbox.checked?dark2.classList.remove('shape-fill'): dark2.classList.add('shape-fill')
    checkbox.checked?dark2.classList.add('dark--curve'): dark2.classList.remove('dark--curve')
    checkbox.checked?dark3.classList.remove('shape-fill'): dark3.classList.add('shape-fill')
    checkbox.checked?dark3.classList.add('dark--curve'): dark3.classList.remove('dark--curve')

}
toggleDarkMode();
checkbox.addEventListener("click",toggleDarkMode);