const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Event Handlers

darkButton.onclick = () => {
    // body.classList.remove('light');
    // body.classList.add('dark');
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme','dark');
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme','light');
};

solarButton.onclick = () => {
    if(body.classList.contains('solar')){
        body.classList.remove('solar');
        solarButton.style.cssText=`--bg-solar: var(--yellow);`
        localStorage.removeItem('isSolar');
    } else {
        solarButton.style.cssText=`--bg-solar: white;`
        body.classList.add('solar');
        localStorage.setItem('isSolar',true);
    }
};