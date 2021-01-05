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


<br />
Interrogate the GitHub API to build visualisation of data available tht elucidates some aspect of the softare engineering process, such as a social graph of developers and projects, or a visualisation of indiviudal of team performance.

<br />
In this part of the assignment, I let the viewer enter a GitHub user name with a token and retrieve the data of that user. <br />
If the viewer enter an empty user name and submit it will ask viewer to fill in the username.<br />
<kbd><img src ="https://github.com/hailing045/github-API/blob/main/0.png" width = "500" border="2"></kbd>
<br />
When the viewer enter space in the user name like following image, it get rid of the space and search the user.
<br />
<kbd><img src ="https://github.com/hailing045/github-API/blob/main/pics/Screenshot%202021-01-04%20at%2015.16.17.png" width = "500" border="2"></kbd><br />
The first part brings the profile of the user with bio, no. of following and followers, date become a GitHub user, and no. of repositories. The user avatar is linking to the main page so if the user doesn’t have followers we recommend the viewer follow the user if they want instead of just showing 0. 
<br />

<kbd><img src = "/pics/2.png" width = "500" border="2"></kbd>

<br />
It also returns the first GitHub user that the searched user follows and the first user that follows them. But if they have none then just don’t show anything. The first follower and first following are also clickable. In this part the viewer could knows more about the social graph of this developer they searched. 
<br />
<br />

<kbd><img src = "https://github.com/hailing045/github-API/blob/main/pics/1.png" width = "500" border="2"></kbd>


<br />
The second part is a diagram that lets the viewer know the language this searched user prefers to use. In the beginning, it’s a bar chart to easily see which language they use the most. But to compare between different languages it’s easier to use the pie chart. Thus I have a button that lets the viewer click to see the data showing in the pie chart. It uses chart js and the labels are clickable. Once the viewer clicks the label, the content of this label will be zero. It’s useful to see the second-most used language, third-most used language, etc. 
<br />

<kbd><img src = "https://github.com/hailing045/github-API/blob/main/pics/3.png" width = "500" border="2"></kbd>



<br />


<kbd><img src = "https://github.com/hailing045/github-API/blob/main/pics/4.png" width = "500" border="2"></kbd>



<br />
The third part is a diagram that commits frequency related to the hour in the day. For me, I’d like to write code at late night but wouldn’t commit it till the next morning for the last double-check. Different people have different habits and time arrangements for writing code. This diagram could let the viewer see easily what habit of the person they just searched.
<br />

<kbd><img src = "https://github.com/hailing045/github-API/blob/main/pics/5.png" width = "500" border="2"></kbd>


<br /><br /><br />


# github-API full demo:


here are three demos, with different typical usage users, please click on the link to view
<br />
demo with lots of lanaguges used and has people following him & he follows others
<br/>[![demo](https://img.youtube.com/vi/p6hNCY9pdS8/0.jpg)](https://www.youtube.com/embed/p6hNCY9pdS8)


<br /><br />
demo with medium size of languages used and has people following him & he follows others
<br/>[![demo](https://img.youtube.com/vi/ItdnHAoi0Y4/0.jpg)](https://www.youtube.com/embed/ItdnHAoi0Y4)

<br /><br />demo with small size of languages used and nobody follows the user
<br/>[![demo](https://img.youtube.com/vi/EpLVqUGLerE/0.jpg)](https://www.youtube.com/embed/EpLVqUGLerE)

<br />
<br />


# github-API run instruction:

To run this code, download the files and run loadPage.html or mainPage.html in web browser
or 
run directly from this link https://raw.githack.com/hailing045/github-API/main/loadPage.html

