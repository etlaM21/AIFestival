function hasciiInit(){
    let hasciielements = document.getElementsByClassName("hascii");
    for(let i = 0; i < hasciielements.length; i++){
        let elm = hasciielements[i];
        let text = elm.textContent;
        elm.setAttribute("data-text", text);
        elm.setAttribute("data-revealing", "false");
        // hasciiHide(elm);
        // Use the observer to observe an element
        hasciiObserver.observe( elm );
        elm.onmouseover = (event, elm) => { hasciiReveal(event, elm); }
    }
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hasciiHide(element){
}

function hasciiReveal(event, element){
    let iterations = 0;
    if(event.target.dataset.revealing == "false"){
        event.target.setAttribute("data-revealing", "true");
        const hideInterval = setInterval(() => {
                let newText = "";
                for(let i = 0; i < event.target.textContent.length; i++){
                    let newChar;
                    if(i < iterations){
                        newChar = event.target.dataset.text[i];
                    }
                    else {
                        newChar = letters[Math.floor(Math.random() * 26)]
                    }
                    newText = newText + newChar;
                }
                event.target.textContent = newText;
                if(iterations >= event.target.dataset.text.length) {
                    event.target.setAttribute("data-revealing", "false"); 
                    clearInterval(hideInterval); 
                };
                iterations += 1 / 3;
            }, 40);
    }
}

function hasciiRevealOnScroll(event, element){
    if(isScrolledIntoView(event.target)) hasciiReveal(event, event.target);
    console.log("SCROLLING", isScrolledIntoView(event.target));
}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

// define an observer instance
var hasciiObserver = new IntersectionObserver(onIntersection, {
    root: null,   // default is the viewport
    threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
  });
  
  // callback is called on intersection change
  function onIntersection(entries, opts){
    entries.forEach(entry =>  
      hasciiReveal(entry, entry.target)
      //entry.target.classList.toggle('visible', entry.isIntersecting)
    )
  }
  
  
  // To stop observing:
  // observer.unobserve(entry.target)

hasciiInit();