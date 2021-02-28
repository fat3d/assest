function rotateArrow() {
  var clickedEleArr = document.querySelectorAll('.rotatearrow')

  clickedEleArr.forEach(function (clickedEle) {
    clickedEle.addEventListener('click', function () {
      var rotatedEle = clickedEle.querySelector('.arrow')
      if (rotatedEle.classList.contains('rotate')) {
        rotatedEle.classList.remove('rotate')
      } else {
        rotatedEle.classList.add('rotate')
      }
    })
  })
}

function toggleSidebar() {
  var body = document.body
  var sidebar = body.querySelector('.sidebar')
  var toggleSidebar = body.querySelector('#toggle-sidebar')
  toggleSidebar.addEventListener('click', function () {
    if (body.classList.contains('sidebar-isopened')) {
      body.classList.remove('sidebar-isopened')
      sidebar.classList.remove('opened')
    } else {
      body.classList.add('sidebar-isopened')
      sidebar.classList.add('opened')
    }
  })
}

function detectClickOutside() {
  var body = document.body
  var sidebar = document.querySelector('.sidebar')
  var toggleSidebar = body.querySelector('#toggle-sidebar')
  window.addEventListener('click', function (e) {
    if (
      !sidebar.contains(e.target) &&
      !toggleSidebar.contains(e.target) &&
      body.classList.contains('sidebar-isopened')
    ) {
      body.classList.remove('sidebar-isopened')
      sidebar.classList.remove('opened')
    }
  })
}

function styleScrollbar() {
  var sidebar = document.querySelector('.sidebar')
  document.addEventListener('DOMContentLoaded', function () {
    OverlayScrollbars(sidebar, {
      className: 'os-theme-light'
    })
  })
}

function hideNavItems() {
  var showSearchbox = document.querySelector('#show-searchbox')
  var navStart = document.querySelector('.nav-start')
  var navEnd = document.querySelector('.nav-end')
  var navForm = document.querySelector('.nav-form')
  var hideSearchbox = document.querySelector('#hide-searchbox')

  showSearchbox.addEventListener('click', function () {
    navStart.classList.add('d-none')
    navEnd.classList.add('d-none')
    navForm.classList.remove('d-none')
    hideSearchbox.classList.remove('d-none')
  })
}

function showNavItems() {
  var navStart = document.querySelector('.nav-start')
  var navEnd = document.querySelector('.nav-end')
  var navForm = document.querySelector('.nav-form')
  var hideSearchbox = document.querySelector('#hide-searchbox')

  hideSearchbox.addEventListener('click', function () {
    navStart.classList.remove('d-none')
    navEnd.classList.remove('d-none')
    navForm.classList.add('d-none')
    hideSearchbox.classList.add('d-none')
  })
}


const targets = document.querySelectorAll("img.card-img-top, img.avatar");

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
     

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);
         
rotateArrow()
toggleSidebar()
detectClickOutside()
styleScrollbar()
hideNavItems()
showNavItems()
