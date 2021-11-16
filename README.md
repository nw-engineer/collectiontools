# collectiontools

### This tool is a web scraping tool that retrieves only text from sites such as queries.  Suitable for collecting sites that generate a page for each inquiry.

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


The data retrieved is the data for the *`<title>`* and *`<pre>`* directives.
If the text is something other than a *`<pre>`* directive, modify the following Python script appropriately depending on your site's configuration.
 - [x] collectiontools/bin/collect.py

The execution result is saved in the following directory for each email.
 - [x] collectiontools/collect-mail/
