const userIcon = document.querySelector('.user-nav__user');
userIcon.addEventListener('click', userIconHandler);

const msgIcon = document.querySelector('#messages');
msgIcon.addEventListener('click', messagesHandler);

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
    else if (linkName?.match(/message/i)) messagesHandler({currentTarget: msgIcon});
}


function userIconHandler(e) {
    e.currentTarget?.children[e.currentTarget.children?.length -1].classList.toggle('hidden');
}

function dropDownEnterHandler(e) {
    document.querySelector('.user-nav__dropdown').style.width = '100%';
    for(i = 0; i < userNavDropdownItems.length; i++) {
        const child = userNavDropdownItems[i]?.children[0];
        child.classList?.remove('hidden');
        child.style.right = '25%';
        // e.currentTarget.children[0].classList.remove('hidden');
    }
}

function messagesHandler(e) {
    debugger;
    
}