import sys
import requests
from bs4 import BeautifulSoup
from urllib import request
args = sys.argv[1]
url = args

response = request.urlopen(url)
soup = BeautifulSoup(response, features = "html.parser")
response.close()
print(soup.title.text)
print(soup.pre.text)
