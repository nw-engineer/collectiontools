# Collectiontools

## This tool is a web scraping tool that retrieves only text from sites such as queries.  Suitable for collecting sites that generate a page for each inquiry.  


### Operation check environment
- [x] OS: CentOS7.9(3.10.0-1160.45.1.el7.x86_64)
- [x] Python Version: 3.6.8


### Advance preparation

```bash
yum install python3
pip3.6 install bs4
pip3.6 install urllib3
pip3.6 install chardet
```

### How to use

1. git clone https://github.com/TadashiKanda/collectiontools.git  
2. cd collectiontools/bin  
3. vim collect.sh  

>   INT=1  
>   *Please decide the position of the acquisition start email.*  
>   MAX=2  
>   *Please set the number of emails you want to get.*   
>   URL=http://xxxxxx.co.jp/list  
>   *Please set the base URL of the inquiry site.*  

4. bash collect.sh  


The data retrieved is the data for the *`<title>`* and *`<pre>`* directives.
If the text is something other than a *`<pre>`* directive, modify the following Python script appropriately depending on your site's configuration.
 - [x] collectiontools/bin/collect.py

The execution result is saved in the following directory for each email.
 - [x] collectiontools/collect-mail/
