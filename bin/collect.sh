#!/bin/bash

### Variable definition
MAX=2
MAILDIR=../collect-mail
URL=http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-list

### Main
for i in `seq 1 ${MAX}`
do
    /bin/python3.6 ./collect.py ${URL}/${i} > ${MAILDIR}/${i}.txt
    sleep 1
done
