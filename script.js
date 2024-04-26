const cards=document.querySelectorAll('.card');
const headings=document.querySelectorAll('.heading');

cards.forEach((card)=>{
    card.addEventListener('click',()=>{
        cards.forEach((card)=>{
            card.classList.remove('active');
        })
        
        headings.forEach((heading)=>{
            heading.classList.remove("active")
        })
        headings.forEach((heading)=>{
            heading.classList.remove("show")
        })

        card.classList.add('active');

        card.childNodes[1].classList.add("show");
    })
})

