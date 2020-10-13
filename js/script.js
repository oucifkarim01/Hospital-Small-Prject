initAboutUsImageSlider();
initMegaMenu();


function initAboutUsImageSlider(){
    let active_image = document.querySelector("#active__image img");
    let image_selecter = document.getElementById("image__selecter");
    document.getElementsByTagName
    image_selecter.addEventListener("click",function(ev){
        if(ev.target.className === "image_link"){
            let imgsrc = ev.target.getElementsByTagName("img")[0].src;
            console.log(imgsrc);
            active_image.parentElement.classList.add("trans");
            setTimeout(()=>{
                active_image.src = imgsrc;
                active_image.parentElement.classList.remove("trans");      
            },200)
        }
    });
}


function initMegaMenu(){
    let mega_menu_holder = document.getElementById("mega_menu_holder");
    let mega_sub_parents = document.querySelectorAll(".header_bar .primary-menu .menu-item.drop-down");
    mega_sub_parents.forEach((sub_menu)=>{
        sub_menu.addEventListener("mouseenter",(e)=>{
            sub_menu.querySelector(".menu-drop").childNodes.forEach((node)=>{
                mega_menu_holder.appendChild(node.cloneNode(true));
            })
            mega_menu_holder.classList.add("shown");
        })
        sub_menu.addEventListener("mouseleave",(e)=>{
            
        })
    })
}