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


// Popup Magazine Piece 1

const popup_bg_1 = document.querySelector('.popup_bg_1')
const magazinePopup = document.querySelector('.magazine_data')


magazinePopup.addEventListener('click', function(){
    popup_bg_1.classList.add('bg_active')
})

const magazineImage = document.querySelector('.magazine_img_data')

magazineImage.addEventListener('click', function(){
    popup_bg_1.classList.add('bg_active')
})

// Popup Tims Piece 2
const popup_bg_2 = document.querySelector('.popup_bg_2')
const timsPopup = document.querySelector('.tims_data')


timsPopup.addEventListener('click', function(){
    popup_bg_2.classList.add('bg_active')
})

const timsImage = document.querySelector('.tims_img_data')

timsImage.addEventListener('click', function(){
    popup_bg_2.classList.add('bg_active')
})

// Popup Cycle Piece 3
const popup_bg_3 = document.querySelector('.popup_bg_3')
const cyclePopup = document.querySelector('.cycle_data')


cyclePopup.addEventListener('click', function(){
    popup_bg_3.classList.add('bg_active')
})

const cycleImage = document.querySelector('.cycle_img_data')

cycleImage.addEventListener('click', function(){
    popup_bg_3.classList.add('bg_active')
})

// Owl Avator 4
const popup_bg_4 = document.querySelector('.popup_bg_4')
const owlPopup = document.querySelector('.owl_data')


owlPopup.addEventListener('click', function(){
    popup_bg_4.classList.add('bg_active')
})

const owlImage = document.querySelector('.owl_img_data')

owlImage.addEventListener('click', function(){
    popup_bg_4.classList.add('bg_active')
})

// BMO 5
const popup_bg_5 = document.querySelector('.popup_bg_5')
const bmoPopup = document.querySelector('.bmo_data')


bmoPopup.addEventListener('click', function(){
    popup_bg_5.classList.add('bg_active')
})

const bmoImage = document.querySelector('.bmo_img_data')

bmoImage.addEventListener('click', function(){
    popup_bg_5.classList.add('bg_active')
})

// ARC 6
const popup_bg_6 = document.querySelector('.popup_bg_6')
const arcPopup = document.querySelector('.arc_data')


arcPopup.addEventListener('click', function(){
    popup_bg_6.classList.add('bg_active')
})

const arcImage = document.querySelector('.arc_img_data')

arcImage.addEventListener('click', function(){
    popup_bg_6.classList.add('bg_active')
})





// Close Popup

const popupCloseOne = document.getElementById('popupClose_1')

popupCloseOne.addEventListener('click', function(){
    popup_bg_1.classList.remove('bg_active')
})

const popupCloseTwo = document.getElementById('popupClose_2')
popupCloseTwo.addEventListener('click', function(){
    popup_bg_2.classList.remove('bg_active')
})

const popupCloseThree = document.getElementById('popupClose_3')
popupCloseThree.addEventListener('click', function(){
    popup_bg_3.classList.remove('bg_active')
})

const popupCloseFour = document.getElementById('popupClose_4')
popupCloseFour.addEventListener('click', function(){
    popup_bg_4.classList.remove('bg_active')
})

const popupCloseFive = document.getElementById('popupClose_5')
popupCloseFive.addEventListener('click', function(){
    popup_bg_5.classList.remove('bg_active')
})

const popupCloseSix = document.getElementById('popupClose_6')
popupCloseSix.addEventListener('click', function(){
    popup_bg_6.classList.remove('bg_active')
})


