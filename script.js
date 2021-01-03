var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
  e.preventDefault()

  var search = document.getElementById("search").value

  var oName = search.split(' ').join('')
  document.getElementById("result").innerHTML =""




  fetch("https://api.github.com/users/" + oName)
  .then((result) => result.json())
  .then((data) =>{
    console.log(data)

    document.getElementById("result").innerHTML = `
      <a target ="_blank" href = "https://github.com/${oName}">
       <img src = "${data.avatar_url}" width="200" height="200"/>
      </a>
      <div href = "https://github.com/${oName}">
        <h6>User Profile</h6>
        Bio: <i>${data.bio}</i>
        <br>
        Following: <i>${data.following}</i>
        <br>
        Followrs: <i>${data.followers}</i>
        <br>
        Date become a Github user: <i>${data.created_at}</i>


      </div>
      </body>

    `
  })
})
