import requests
from pprint import pprint
username = "hailing045"
url = f"https://api.github.com/users/{username}"
user_data = requests.get(url).json()
pprint(user_data)
