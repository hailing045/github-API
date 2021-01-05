# github-API

Github accessing part <br />
Interrogate the GitHub API to retrieve and display data regarding the logged in developer.<br />
From code access.py, i retrieve and display my own repo data which contains all my repositories and related last commit id. 
<br />
For running the code you will need to sub in an github access token where written "access-token".
<br />
![alt text](https://github.com/hailing045/github-API/blob/main/pics/Screenshot%202020-12-05%20at%2014.54.17.png)

<br />
<br />
<br />
# Github visualisation - Github search
Interrogate the GitHub API to build visualisation of data available tht elucidates some aspect of the softare engineering process, such as a social graph of developers and projects, or a visualisation of indiviudal of team performance.

<br />
In this part of the assignment, I let the viewer enter a GitHub user name with a token and retrieve the data of that user. When the viewer enter space in the user name like following image, it get rid of the space and search the user.

<img src ="https://github.com/hailing045/github-API/blob/main/pics/Screenshot%202021-01-04%20at%2015.16.17.png" width = "500">
The first part brings the profile of the user with bio, no. of following and followers, date become a GitHub user, and no. of repositories. The user avatar is linking to the main page so if the user doesn’t have followers we recommend the viewer follow the user if they want instead of just showing 0. 
<br />

<img src = "/pics/2.png" width = "500">

<br />
It also returns the first GitHub user that the searched user follows and the first user that follows them. But if they have none then just don’t show anything. The first follower and first following are also clickable so it let the viewer knows the social graph of this developer. 
<br />
<br />
To run this code, download the files and run loadPage or mainPage.html
<img src = "https://github.com/hailing045/github-API/blob/main/pics/1.png" width = "500">


<br />
The second part is a diagram that lets the viewer know the language this searched user prefers to use. In the beginning, it’s a bar chart to easily see which language they use the most. But to compare between different languages it’s easier to use the pie chart. Thus I have a button that lets the viewer click to see the data showing in the pie chart. It uses chart js and the labels are clickable. Once the viewer clicks the label, the content of this label will be zero. It’s useful to see the second-most used language, third-most used language, etc. 
<br />

<img src = "https://github.com/hailing045/github-API/blob/main/pics/3.png" width = "500">



<br />


<img src = "https://github.com/hailing045/github-API/blob/main/pics/4.png" width = "500">



<br />
The third part is a diagram that commits frequency related to the hour in the day. For me, I’d like to write code at late night but wouldn’t commit it till the next morning for the last double-check. Different people have different habits and time arrangements for writing code. This diagram could let the viewer see easily what habit of the person they just searched.
<br />

<img src = "https://github.com/hailing045/github-API/blob/main/pics/5.png" width = "500">


<br /><br /><br />
# github-API full demo:
here are three demos, with different typical usage users, please click on the link to view
<br />
https://github.com/hailing045/github-API/blob/main/pics/demoL.mov
<br /><br />
https://github.com/hailing045/github-API/blob/main/pics/demoM.mov
<br /><br />
https://github.com/hailing045/github-API/blob/main/pics/demoS.mov


