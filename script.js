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
        <h6>${oName} User Profile</h6>
        Bio: <i>${data.bio==null?"He/She hasn't say anything":data.bio}</i>
        <br>
        Following: <i>${data.following==0?"He/She is not following anyone":data.following}</i>
        <br>
        Followrs: <i>${data.followers==0?"Nobody is following him/her, click on the profile image to follow👆":data.followers}</i>
        <br>
        Date become a Github user: <i>${data.created_at}</i>
        <br>
        No. Repositories: <i>${data.public_repos}</i>


      </div>
      </body>

    `
  })
})


function handleInput() {
    var user = document.getElementById("search").value;
    var token = document.getElementById("authToken").value;
        if (languageChart != null) languageChart;
    main(user, token);
}
