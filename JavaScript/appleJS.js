const url = "https://raw.githubusercontent.com/JiaXuan1083/FileStorage/main/ipadAir2";
let color,colorpic,storage,price,network,ipadpic;
let ipadArray = [];
let ipadinfo;
let allcolors =[];
let allstorage=[];
let allnetwork=[];
let totalMoney=[];
let total;
let xhr = new XMLHttpRequest();
xhr.onload = function(){
    ipadArray = this.response;
    createData(ipadArray);
    btnFuntion();
    pricetotal();
}
//取得資料
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
let colorbtnsArray
let colorbtns 
let storagebtns 
let networkbtns
let ipadimg = document.querySelector(".ipadimg")
let resetcbtn, resetsbtn, resetnbtn
let topmoney = document.querySelector(".h2-money-up")
let numthree = new Intl.NumberFormat('en-US')
// window.onload = 
function btnFuntion(){
    colorbtns = document.querySelectorAll(".colorsample")
    storagebtns = document.querySelectorAll(".storageitem")
    networkbtns = document.querySelectorAll(".networkitem")
    
    colorbtns.forEach((cbtn, index)=>{
        
        cbtn.addEventListener("click", function(){
            if(resetcbtn != undefined){
                resetcbtn.classList.remove("btn-border")

            }
            ipadimg.innerHTML=""
            ipadimg.innerHTML = `<img src="${ipadpic[index]}" class="ipad-img-color">`
            cbtn.classList.toggle("btn-border")
            resetcbtn = cbtn;
        }) 

    })

    storagebtns.forEach((sbtn, index)=>{
        sbtn.addEventListener("click", function(){
            if(resetsbtn != undefined){
                resetsbtn.classList.remove("btn-border")
    
            }
            sbtn.classList.toggle("btn-border")
            resetsbtn = sbtn
        })
    })

    networkbtns.forEach((nbtn, index)=>{
        nbtn.addEventListener("click", function(){
            if(resetnbtn != undefined){
                resetnbtn.classList.remove("btn-border")

            }
            nbtn.classList.toggle("btn-border")
            total = totalMoney[index]
            
            pricetotaltext.innerText = `NT$${numthree.format(total)} 起`
            
            topmoney.innerText = `NT$${numthree.format(total)} 起`
            resetnbtn = nbtn
            
            


        })

    })

    
}


function createData(data){
    ipadinfo = Object.values(ipadArray);
    //創建個陣列
    color = ipadinfo[0].color;
    colorpic = ipadinfo[0].colorpic;
    storage = ipadinfo[0].storage;
    price = ipadinfo[0].price;
    network =ipadinfo[0].network;
    ipadpic = ipadinfo[0].ipadpic;
    color.forEach((colors, index)=>{
        allcolors.push([colors, colorpic[index]])
    })
    allcolors.forEach((item, index)=>{
        colorStyle(item[1], item[0])
    })

    storage.forEach((storages, index)=>{
        allstorage.push([storages, price[index]])
    })
    allstorage.forEach((item1, index)=>{
        storageStyle(item1[0], item1[1])
    })

    network.forEach((networks, index)=>{
        allnetwork.push([networks,price[index]])
    })
    allnetwork.forEach((items, index)=>{
        networkStyle(items[0],items[1] )
        totalMoney.push (items[1])
    })
    
    
}
function colorStyle(colorpic, color){
    let coloritem = document.createElement("Button")
    coloritem.setAttribute("class",`btn btn-white col-5 m-3 colorsample`)
    let colorimg = document.createElement("img")
    colorimg.setAttribute("src", `${colorpic}`)
    colorimg.setAttribute("class",`color-btn w-25 m-3`)
    let colortext = document.createElement("p")
    colortext.innerText = color;
    coloritem.append(colorimg)
    coloritem.append(colortext)
    let colorstylediv = document.querySelector('.color-style')
    colorstylediv.append(coloritem)
    

}
function storageStyle(storage, price){
    let storageitem = document.createElement("Button")
    storageitem.setAttribute("class",`btn btn-white col-5 m-3 py-3 storageitem`)
    let storagetext = document.createElement("p")
    storagetext.innerText = storage
    storagetext.setAttribute("class", `fw-bolder`)
    let pricetext = document.createElement("p")
    pricetext.innerText = `$ ${price} 起`;
    storageitem.append(storagetext)
    storageitem.append(pricetext)
    let storageStylediv = document.querySelector('.storage-style')
    storageStylediv.append(storageitem)
}

function networkStyle(network, price){
    let networkitem = document.createElement("Button")
    networkitem.setAttribute("class",`btn btn-white col-5 m-3 py-3 networkitem`)
    let networktext = document.createElement("p")
    networktext.innerText = network
    networktext.setAttribute("class", `fw-bolder`)
    let pricetext = document.createElement("p")
    pricetext.innerText = `NT$${numthree.format(price)} 起`;
    networkitem.append(networktext)
    networkitem.append(pricetext)
    let networkStylediv = document.querySelector('.network-style')
    networkStylediv.append(networkitem)
    
}
let pricetotaltext;
function pricetotal(){
    let totalwrap = document.querySelector(".total-money")
    pricetotaltext = document.createElement("h4")
    pricetotaltext.setAttribute("class", `fw-bolder text-center my-5 p-5 bg-warning text-dark bg-opacity-10`)
    totalwrap.append(pricetotaltext)
    

}
