#!/bin/bash

### Variable definition
MAX=2
MAILDIR=../collect-mail

### Main
for i in `seq 1 ${MAX}`
do
    /bin/python3.6 ./collect.py http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-list/${i} > ${MAILDIR}/${i}.txt
done
