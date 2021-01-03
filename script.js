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

async function main(user, token) {
    var url = `https://api.github.com/users/${user}/repos`;
    var repo = await getRequest(url, token).catch(error => console.error(error));

    url = `https://api.github.com/users/${user}`;
    var user_info = await getRequest(url, token).catch(error => console.error(error));

    get_language_pie(repo, user, token);
}

async function getRequest(url, token) {
    const headers = {
        'Authorization': `Token ${token}`
    }

    const response = (token == undefined) ? await fetch(url) : await fetch(url, {
        "method": "GET",
        "headers": headers
    });

    let data = await response.json();
    return data;
}

async function get_language_pie(repo, user, token) {
    let data = [];
    for (i in repo) {
        let url = `https://api.github.com/repos/${user}/${repo[i].name}/languages`;
        let languages = await getRequest(url, token).catch(error => console.error(error));
    }
    draw('language',data);
}


function draw(ctx,data) {

    let myChart = document.getElementById(ctx).getContext('2d');

    languageChart = new Chart(myChart, {
        type: 'doughnut',
        data: {
            labels: label,
            datasets: [{
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }],
        },
    });
}
