const btn = document.getElementById("Button")
const error_massage_element = document.getElementById("error")
const gallay_element = document.getElementById("gallary_container")

async function loadimage(){
    const inputvalue = Number (document.getElementById("input_number").value)
     
    if(inputvalue > 10 || inputvalue < 1){
        error_massage_element.style.display = "block";
        error_massage_element.innerText= "Number Should be between 0 and 10"
        return
    }

let urls = "";
    btn.style.display = "none"
    await fetch(`https://api.unsplash.com/photos?per_page=${inputvalue}&page=${Math.round(Math.random() * 100)}&client_id=S0qYubB2rA0c6eOpijmU9u6bs1OijQ6IHkXW0i2DjzI`).then((res)=>res.json().then((data)=> {
        if(data){
            data.forEach((picture) => {
                urls += `<img src="${picture.urls.small}" alt="image">`;

                
                gallay_element.style.display= "grid"
                gallay_element.innerHTML = urls;
                btn.style.display = "block"
            });
        };
        })
    );

    error_massage_element.style.display = "none"
    btn.style.display = "block"
}


btn.addEventListener("click", loadimage)