var siteName =document.getElementById("siteName");
var siteURL =document.getElementById("siteURL");
var sitesArr=[];


document.getElementById("submit").addEventListener("click",addSite);


if(localStorage.getItem("site")!=null){
    sitesArr=JSON.parse(localStorage.getItem("site"));
    displaySites(sitesArr);
    
}

function addSite (){
    if(validateName()){
        if(validateURL()){
        var sites={
            name:siteName.value,
            url:siteURL.value
        }
        sitesArr.push(sites);
        localStorage.setItem("site",JSON.stringify(sitesArr));
        displaySites(sitesArr);
        clearInput();
    }
    }
}

function clearInput(){
        document.getElementById("siteName").value="";
        document.getElementById("siteURL").value="";
}
function displaySites(sitesArr){
    var text=``;
    for(var i=0;i<sitesArr.length;i++){
        text+=`
        <tr>
            <td>${i+1}</td>
            <td>${sitesArr[i].name}</td>
            <td><a href="${sitesArr[i].url}" target="_blank"><button class="btn btn-primary"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
            <td> <button class="btn btn-danger" id="delete" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        `
    }
    document.getElementById("tableBody").innerHTML=text;
}

function deleteSite(index){
    sitesArr.splice(index,1);
    localStorage.setItem("site",JSON.stringify(sitesArr));
    displaySites(sitesArr);

}

function validateName(){
    var nameRGEX = /^(\w){3,}$/;
    if(nameRGEX.test(siteName.value)==false){
        swal(
          {
            text:"Site name must contain at least 3 characters",
            icon:"warning",
          }
        )
        return false;
    }
    // to check if this name has been added before
    else{
        if(JSON.stringify(sitesArr).includes(siteName.value)){
            swal(
               { text:"This site name has been added before",
                icon:"warning"
               }
            )
            return false
        }
        return true;
    }
}

function validateURL(){

    var urlRGEX = /^https\:\/\/(\w|\W)+\.[a-zA-Z]{2,}.*$/i;
    if(urlRGEX.test(siteURL.value)==false){
        swal(
            {
              text:"Site URL must be a valid one",
              icon:"warning",
            }
          )
        return false;
    }
    // to check if this url has been added before
    else{
        if(JSON.stringify(sitesArr).includes(siteURL.value)){
            swal(
               { text:"This site URL has been added before",
                icon:"warning"
               }
            )
            return false
        }
        return true;
    }
    
}


  










   
   
   




   
    
    
   
    
    







    



 















