const btnScroll=document.querySelector(".btn_scroll");
btnScroll.addEventListener("click",()=>{

      window.scrollTo({
            top:0,
            left: 0,
            behavior:"smooth",
      })
})