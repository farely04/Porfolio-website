document.addEventListener('DOMContentLoaded', () => {
    console.log('welcom to my PORTFOLIO!');

    
});

document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX + 10;
    mouseY = e.clientY + 10;
    if (!isMoving) {
      requestAnimationFrame(moveMenu);
      isMoving = true;
    }
  });
  



const content = document.querySelectorAll('.content');

 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
 }, { threshold: 0.5 });

 content.forEach(content => { observer.observe(content);})


window.addEventListener('scroll',handleScroll);

 const pageflip1 = new St.PageFlip(document.getElementById("flipbook1"), {
    width: 400,
    height: 300,
    size: "stretch",
    showCover : true
 });

 pageflip1.loadFromHTML(document.querySelectorAll("#flipbook1 .page"));

//การ์ดเกม
 const pageFlip2 = new St.PageFlip(document.getElementById("flipbook2"), {
    width: 500,
    height: 300,
    size: "stretch",
    showCover: true

 });

 pageFlip2.loadFromHTML(document.querySelectorAll("#flipbook2 .page"));

 if (pageFlip1 && pageFlip2) {
    window.addEventListener("resize",() => 
    { 
        pageFlip1.update(); 
        pageFlip2.update();
    });
 }
