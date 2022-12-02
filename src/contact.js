function createContact() {
    
    const contactWrapper = document.createElement('div')
    contactWrapper.classList.add('contact-wrapper');

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Andernos';

    

    contactWrapper.appendChild(contactInfo);

    return contactWrapper;
}

function loadContact() {
    const main = document.querySelector('.main');
    main.appendChild(createContact());
}

export  default loadContact;