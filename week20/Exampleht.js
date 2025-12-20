// fetching 
const overlay = document.querySelector("div.overlay-loader");
const maincard= document.querySelector("div.cards_rep");
let louding =true;
louding && overlay.classList.add("active")
let users = [];
const getdata = async()=>{
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/users");
if(response.ok){
    const data = await response.json();
    console.log(data);
    users.push(...data)
    let louding =false;
    louding ? overlay.classList.add("active") : overlay.classList.remove("active")
    if(users.length > 0){
        users.map((user)=>{
            const {city,street} = user.address
            // console.log(user.name)
            const art = document.createElement("div")
            art.classList.add("card");
            art.innerHTML=`
              <div class="header">
      <div class="avatar">${user.name.slice(0,2).toUpperCase()}</div>
      <div>
        <div class="name">${user.name}</div>
        <div class="role">${user.
username}</div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="body">
      <div class="row">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/email.png" class="icon" />
        <div>
          <div class="label">Email</div>
          <div class="value">${user.email}</div>
        </div>
      </div>

      <div class="row">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/phone.png" class="icon" />
        <div>
          <div class="label">Phone</div>
          <div class="value">${user.phone}</div>
        </div>
      </div>

      <!-- City Row -->
      <div class="row">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/city.png" class="icon" />
        <div>
          <div class="label">${city}</div>
          <div class="value"></div>
        </div>
      </div>

      <!-- Location Row -->
      <div class="row">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/marker.png" class="icon" />
        <div>
          <div class="label">Location</div>
          <div class="value">${street}</div>
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="btn">Message</button>
      <button class="btn">Follow</button>
            `
            maincard.appendChild(art);
        })
    }else{
        louding = false;
    louding ? overlay.classList.add("active"):overlay.classList.remove("active")
    maincard.textContent="Users not get from API "
    }

}else{
    louding = false;
    louding ? overlay.classList.add("active"):overlay.classList.remove("active")
    throw new Error(`Users not found  ${response.status}`)
}
    }catch(Error){
        // console.log(Error.message);
        maincard.textContent=Error.message;
    }
}
setTimeout(()=>{
getdata();
},3000)

