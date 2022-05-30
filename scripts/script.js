document.addEventListener('DOMContentLoaded', (event) => {
    
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
            setTimeout(function(){
                panel.style.display = "none";
            },390)
        } else {
        panel.style.display = "block"
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }

    document.querySelectorAll('.gallery-container img').forEach(image =>{
        image.onclick = () =>{
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }
    });
    document.querySelector('.popup-image span').onclick = () =>{
      document.querySelector('.popup-image').style.display = 'none';  
    };

    const btnhamburger = document.querySelector('.hamburger')
    const headermenu = document.querySelector('.header-menu')
    btnhamburger.addEventListener('click', function(){
        if(btnhamburger.classList.contains('open')){
            btnhamburger.classList.remove('open')
            headermenu.style.display = 'none'
        }
        else{
            btnhamburger.classList.add('open')
            headermenu.style.display = 'block';
        }
    });

})
