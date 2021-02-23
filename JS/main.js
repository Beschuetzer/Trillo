const userIcon = document.querySelector('.user-nav__user');
userIcon.addEventListener('click', navHandler);

const msgIcon = document.querySelector('#messages');
msgIcon.addEventListener('click', navHandler);

const userNavDropdownItems = document.querySelectorAll('.user-nav__dropdown-item');
for (let i = 0; i < userNavDropdownItems.length; i++) {
    const item = userNavDropdownItems[i];
    item.addEventListener('mouseenter', dropDownEnterHandler);
}

const links = document.querySelectorAll('.user-nav__dropdown-item');
links.forEach(link => link.addEventListener('click', linkClickHandler));

function linkClickHandler(e) {
    const linkName = e.currentTarget?.children[0]?.textContent;
    if (linkName?.match(/search/i)) document.querySelector('.search__input').focus();
    else if (linkName?.match(/message/i)) navHandler({currentTarget: msgIcon});
}


function navHandler(e) {
    if (e.currentTarget.id.match(/messages/i)) userIcon?.lastElementChild.classList.add('hidden');
    else if (e.currentTarget.className.match(/user-nav__user/i)) msgIcon?.lastElementChild.classList.add('hidden');
    e.currentTarget?.lastElementChild.classList.toggle('hidden');
}

function dropDownEnterHandler(e) {
    const parent = e.currentTarget.parentNode;
    if (parent.className?.match(/dropdown-user/)) { 
        parent.style.width = '100%';
        for(i = 0; i < userNavDropdownItems.length; i++) {
            const child = userNavDropdownItems[i]?.children[0];
            child.classList?.remove('hidden');
            child.style.right = '25%';
            // e.currentTarget.children[0].classList.remove('hidden');
        }
    }
    else if (parent.className?.match(/dropdown-message/)) parent.style.width = '33rem';
  
}

// function navHandler(e) {
//     e.currentTarget?.children[e.currentTarget.children?.length -1].classList.toggle('hidden');
//     debugger;
// }