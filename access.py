from github import Github

# or using an access token
g = Github("access_token")

for repo in g.get_user().get_repos():
    print(repo.name)
    repo.edit(has_wiki=False)

#https://pypi.org/project/PyGithub/
