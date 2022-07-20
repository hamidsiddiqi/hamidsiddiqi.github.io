/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})


// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.remove('active')
        }
    })
}

// SEND EMAIL

function sendEmail(){
    var params ={
        from_name: document.getElementById('fullName').value,
        from_email: document.getElementById('from_email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_pv369uq', 'template_fk5fe9n', params).then(function(res){
        alert('Your form has succesfully been sent!');
        e.target.reset()
    }) 
}

// Form Reset
const form = document.getElementById('my_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});


// Popup

const magazinePopup = document.querySelector('.magazine_data')

const popup_bg = document.querySelector('.popup_bg')

magazinePopup.addEventListener('click', function(){
    popup_bg.classList.add('bg_active')
})

const magazineImage = document.querySelector('.magazine_img_data')

magazineImage.addEventListener('click', function(){
    popup_bg.classList.add('bg_active')
})


// Close Popup

const popupClose = document.getElementById('popupClose')

popupClose.addEventListener('click', function(){
    popup_bg.classList.remove('bg_active')
})


