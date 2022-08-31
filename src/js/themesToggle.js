const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

let svg = document.getElementById("svg-animation");

toggle.addEventListener('click', toggleHandler);

const STORAGE_KEY = "toggle-status";

function toggleHandler() {        
  if (body.classList.contains("dark")) {
        
        body.classList.remove("dark")
        svg.firstChild.remove();
    changreBGToWhith();
        
        localStorage.removeItem(STORAGE_KEY);
    } else {
    body.classList.add("dark")
    
        svg.firstChild.remove();
    changreBGToBlaack();
    localStorage.setItem(STORAGE_KEY, "on");
    }   
}; 

export function toggleStatus() {
  const sawedMessage = localStorage.getItem(STORAGE_KEY);
  // console.log(sawedMessage);
    if (sawedMessage && sawedMessage.length !== 0 ) {
        body.classList.toggle("dark");
        changreBGToBlaack()
    } else {
        changreBGToWhith();
    }        
};


function changreBGToWhith() {
  bodymovin.loadAnimation({
    wrapper: document.getElementById("svg-animation"),
    animType: "svg",
    loop: false,
    path: "https://raw.githubusercontent.com/Abdallah-Mohamed-Sayed/some-files/main/toSun",
  });
  setTimeout(() => {
    toggle.classList.add("white");
    toggle.classList.remove("black");
  }, 276);
}

function changreBGToBlaack() {
  bodymovin.loadAnimation({
    wrapper: document.getElementById("svg-animation"),
    animType: "svg",
    loop: false,
    path: "https://raw.githubusercontent.com/Abdallah-Mohamed-Sayed/some-files/main/toMoon",
  });
  setTimeout(() => {
    toggle.classList.add("black");
    toggle.classList.remove("white");
  }, 276);
};