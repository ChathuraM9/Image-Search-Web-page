const accesskey="wH9hAQ5m_ktcDsWsm3HBghrOEBKwFCuLOtH9pDB2c2Y";

const forE1 =document.querySelector("form");
const inputE1=document.getElementById("serchinput");
const searchre=document.querySelector(".searchre");
const showmore=document.getElementById("showm");
;

let inputdata="";
let page=1;

async function searchimg(){
    inputdata=inputE1.value;

    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`

    const response=await fetch(url);
    const data=await response.json();

    const results =data.results;

    if(page===1){
    searchre.innerHTML="";
    }

    results.map((result)=>{

        const imagewr=document.createElement('div');
        imagewr.classList.add("searchr");

        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt =result.alt_description;

        const imglink=document.createElement('a');
        imglink.href=result.links.html;
        imglink.target="_blank";
        imglink.textContent=result.alt_description;


        imagewr.appendChild(image);
        imagewr.appendChild(imglink);
        searchre.appendChild(imagewr);
    })

    page++;
    if(page>1) {
        showmore.style.display="block";

    }
}
forE1.addEventListener("submit",(event)=>{
    event.preventDefault();
     page=1;
     searchimg();
})
showmore.addEventListener("click",()=>{

     searchimg();
})










