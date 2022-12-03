window.addEventListener('scroll', function(){
    var content = document.querySelectorAll('.container2');
    var screenPosition = window.innerHeight;
    
    for (let elements of content){
        let contentPosition = elements.getBoundingClientRect().top;
    
        if(contentPosition < screenPosition){
            elements.classList.add ('active');
        }
        else{elements.classList.remove('active');}
    }
});

