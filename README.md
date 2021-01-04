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
In this part of the assignment, I let the user enter a GitHub user name with a token and retrieve the data of that user. 
The first part brings the profile of the user with bio, no. of following and followers, date become a GitHub user, and no. of repositories. The user avatar is linking to the main page so if the user doesn’t have followers we recommend the viewer follow the user if they want instead of just showing 0. 
<br />
![alt tag](/pics/2.png)
<br />
It also returns the first GitHub user that the searched user follows and the first user that follows them. But if they have none then just don’t show anything. The first follower and first following are also clickable so it let the viewer knows the social graph of this developer. 
<br />
![alt tag](https://github.com/hailing045/github-API/blob/main/pics/1.png)
<br />
The second part is a diagram that lets the viewer know the language this searched user prefers to use. In the beginning, it’s a bar chart to easily see which language they use the most. But to compare between different languages it’s easier to use the pie chart. Thus I have a button that lets the viewer click to see the data showing in the pie chart. It uses chart js and the labels are clickable. Once the viewer clicks the label, the content of this label will be zero. It’s useful to see the second-most used language, third-most used language, etc. 
<br />
![alt text](https://github.com/hailing045/github-API/blob/main/pics/3.png)

<br />
![alt text](https://github.com/hailing045/github-API/blob/main/pics/4.png)

<br />
The third part is a diagram that commits frequency related to the hour in the day. For me, I’d like to write code at late night but wouldn’t commit it till the next morning for the last double-check. Different people have different habits and time arrangements for writing code. This diagram could let the viewer see easily what habit of the person they just searched.
<br />
![alt text](https://github.com/hailing045/github-API/blob/main/pics/5.png)
<br /><br /><br />
# github-API full demo:

