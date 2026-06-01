const box = document.getElementById('box');

function handleMouseoverEvent(e) {

    let height = box.offsetHeight;
    let width = box.offsetWidth;

    let ele = box.getBoundingClientRect();

    if(ele.top>0 && ele.top>height && ele.left!=0) {
        box.style.top = "0px";
    } else if(ele.left>0 && ele.left>width) {
        box.style.left = "0px";
    } else if((window.innerHeight-ele.bottom)>height) {
        box.style.top = (window.innerHeight-height) + "px";
    } else if((window.innerWidth-ele.right)>width) {
        box.style.left = (window.innerWidth-width) + "px";
    }
}

box.addEventListener('mouseover', handleMouseoverEvent);