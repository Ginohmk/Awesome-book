

const time = new Date();
const displayDate = document.getElementById('date');

const allBooksSection = document.querySelector('.all__book');
const formSection = document.querySelector('.main__form');
const contactSection = document.querySelector('.contact');
const listNav = document.querySelector('.list')




displayDate.textContent = time;

const listNavChild = Array.from(listNav.children ) 
listNavChild.forEach((value, index) => {
  value.addEventListener('click',
    () => {
      const selectorClass = value.className;
      listNav.querySelector('.active').classList.remove('active')
      value.classList.add('active')
      
      if (selectorClass === 'add__item') {
        formSection.classList.remove('hide__content');
        allBooksSection.classList.add('hide__content');
        contactSection.classList.add('hide__content');


     }

      else if (selectorClass === 'contact__item') {
        contactSection.classList.remove('hide__content')
        allBooksSection.classList.add('hide__content');
        formSection.classList.add('hide__content');
      }

      else {
        allBooksSection.classList.remove('hide__content');
        contactSection.classList.add('hide__content')
        formSection.classList.add('hide__content');
      }
  })
})



