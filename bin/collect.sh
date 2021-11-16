#!/bin/bash

### Variable definition
INT=
MAX=
MAILDIR=../collect-mail
URL=

### Main
for i in `seq ${INT} ${MAX}`
do
    /bin/python3.6 ./collect.py ${URL}/${i} > ${MAILDIR}/${i}.txt
    sleep 1
done
