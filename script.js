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
        <h3>${oName} User Profile</h3>
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
    let label = [];
    for (i in repo) {
        let url = `https://api.github.com/repos/${user}/${repo[i].name}/languages`;
        let languages = await getRequest(url, token).catch(error => console.error(error));
        for (language in languages) {
            if (label.includes(language)) {
                for (i = 0; i < label.length; i++)
                    if (language == label[i])
                        data[i] = data[i] + languages[language];
            } else {
                label.push(language);
                data.push(languages[language]);
            }
        }
    }
    draw('language', label,data);
}


function draw(ctx, label,data) {

    let myChart = document.getElementById(ctx).getContext('2d');

    languageChart = new Chart(myChart, {
        type: 'doughnut',
        data: {
            labels: label,
            datasets: [{
                data: data,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',

                'rgba(45, 99, 102, 0.2)',
                'rgba(211, 102, 255, 0.2)',
                'rgba(144, 106, 86, 0.2)',
                'rgba(35, 160, 152, 0.2)',
                'rgba(122, 102, 155, 0.2)',
                'rgba(57, 159, 64, 0.2)',
                'rgba(95, 199, 202, 0.2)',
                'rgba(211, 82, 25, 0.2)',
                'rgba(14, 226, 86, 0.2)',
                'rgba(35, 160, 222, 0.2)',
                'rgba(122, 232, 155, 0.2)',
                'rgba(97, 159, 24, 0.2)',
                'rgba(214, 226, 186, 0.2)',
                'rgba(135, 60, 22, 0.2)',
                'rgba(252, 232, 155, 0.2)',
                'rgba(97, 159, 224, 0.2)'

            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',

              'rgba(45, 99, 102, 0.2)',
              'rgba(211, 102, 255, 0.2)',
              'rgba(144, 106, 86, 0.2)',
              'rgba(35, 160, 152, 0.2)',
              'rgba(122, 102, 155, 0.2)',
              'rgba(57, 159, 64, 0.2)',
              'rgba(95, 199, 202, 0.2)',
              'rgba(211, 82, 25, 0.2)',
              'rgba(14, 226, 86, 0.2)',
              'rgba(35, 160, 222, 0.2)',
              'rgba(122, 232, 155, 0.2)',
              'rgba(97, 159, 24, 0.2)',
              'rgba(214, 226, 186, 0.2)',
              'rgba(135, 60, 22, 0.2)',
              'rgba(252, 232, 155, 0.2)',
              'rgba(97, 159, 224, 0.2)'
            ],
            borderWidth: 1
            }],
        },
    });
}
var languageChart = null;
