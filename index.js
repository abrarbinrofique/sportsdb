async function getdata(val) {
  let x = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${val}`)
  let data = await x.json()
  return data
}

async function Drop(val) {
  let x = await fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${val}`)
  let data = await x.json()
  return data
}


document.addEventListener("click", function() {
const mymod=document.getElementById("modaldiv")
mymod.innerHTML=''
});





let i=0;

function  added(name)
{
  console.log(name);
  
  i=i+1;
  if(i<=11)
   { 
  const selectplayer=document.getElementById('selectplayer')
  const div = document.createElement('div')

  div.innerHTML=
  `
  <div class="playercard card" style="width: 36rem;">
    <p class="card-title">${i}. <b>${name}</b> </p>
  </div>
</div>
  
  `



 
  selectplayer.appendChild(div)


}
else
{
  alert("You have already added 11 player")
}
}







async function handle()
{
  const text=document.getElementById('text')
  console.log(text.value);
  val=text.value



let data = await getdata(val)
  console.log(data)

  const playerlist = document.getElementById('playerlist')
  playerlist.innerHTML=""

  data.player.forEach(e => {


    const div = document.createElement('div')
    div.classList.add('box');
    div.style.backgroundColor = getrandomcolor()



    div.innerHTML =
      `
 
    <div class="car card" style="20rem">
    <img src="${e.strThumb}" class="img card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><b>${e.strPlayer}</b></h5>
      
    
      <p>Play:${e.strSport}</p>
      <p>Position:${e.strPosition}</p>
      <p>Team:${e.strTeam}</p>

      <p>${e.strDescriptionEN.slice(0,20)}..more</p>

     <a href="${e.Twittter}"> <i class="mr-2 fa-brands fa-twitter"></i> </a>
     <a href="${e.strInstagram}"><i class="ml-3 fa-brands fa-instagram"></i></a>
     <div>
    <button type="submit" class="myadd btn btn-info m-2 "  id="myadd"  onclick="added('${e.strPlayer}')">Add</button>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary"  onclick="Dro(${e.idPlayer})">
  Details
</button>    
  `

    playerlist.appendChild(div)



  });

  
}



const Dro = async (id) => {

  let data = await Drop(id)
  document.getElementById("modaldiv").scrollIntoView({ behavior: "smooth" });

  console.log(id);

  

  const myModal = document.getElementById('modaldiv')

  myModal.innerHTML = " "

  const f = data.players[0]


  console.log(f)

  const mdiv = document.createElement('div')






  mdiv.innerHTML =
    `

  <div class="card" style="20rem">
  <img src="${f.strThumb}" class="im card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><b>${f.strPlayer}</b></h5>
    
  
    <p>Play:${f.strSport}</p>
    <p>Position:${f.strPosition}</p>
    <p>Team:${f.strTeam}</p>
  
    <p>${f.strDescriptionEN}</p>
  
   <a href="${f.Twittter}"> <i class="mr-2 fa-brands fa-twitter"></i> </a>
   <a href="${f.strInstagram}"><i class="ml-3 fa-brands fa-instagram"></i></a>
   <div>
   <button type="button" class="closebtn btn btn-info" id='closebtn' onclick="close()">
  Close
</button>  
  


  

  </div> 
  
  </div>
  
  </div>
 
  `




  myModal.appendChild(mdiv)






  const modal = new bootstrap.Modal(document.getElementById("myModal"))

  modal.show()


}


function getrandomcolor() {
  val1 = Math.ceil(0 + Math.random() * (255 - 0))
  val2 = Math.ceil(0 + Math.random() * (255 - 0))
  val3 = Math.ceil(0 + Math.random() * (255 - 0))


  return `rgb(${val1},${val2},${val3})`

}
async function main() {
  let data = await getdata('b')

  console.log(data)

  const playerlist = document.getElementById('playerlist')

  data.player.forEach(e => {


    const div = document.createElement('div')
    div.classList.add('box');
    div.style.backgroundColor = getrandomcolor()



    div.innerHTML =
      `
 
    <div class="car card" style="20rem">
    <img src="${e.strThumb}" class="img card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><b>${e.strPlayer}</b></h5>
      
    
      <p>Play:${e.strSport}</p>
      <p>Position:${e.strPosition}</p>
      <p>Team:${e.strTeam}</p>

      <p>${e.strDescriptionEN.slice(0,20)}..more</p>

     <a href="${e.Twittter}"> <i class="mr-2 fa-brands fa-twitter"></i> </a>
     <a href="${e.strInstagram}"><i class="ml-3 fa-brands fa-instagram"></i></a>
     <div>
    <button type="submit" class="myadd btn btn-info m-2 " id="myadd" onclick="added('${e.strPlayer}')">Add</button>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary"  onclick="Dro(${e.idPlayer})">
  Details
</button>    
  `

    playerlist.appendChild(div)



  });

}
  
document.addEventListener("click", function(event) {

  if(i<=11)
    {  
  if (event.target.classList.contains("myadd")) {
    event.target.style.backgroundColor = "red";
    event.target.innerText="Added"

    event.target.disabled = true;

  }
    
  }
});
main()