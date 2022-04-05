#!/usr/bin/env bash
##############################################
#                                            #
#   Commit all files add a tag and push.     #
#                                            #
#   Errors:                                  #
#                                            #
#     1 = No tag provided                    #
#     2 = No message provided                #
#                                            #
##############################################

TAG=$1
MESSAGE=$2

if [ -z "$TAG" ]
then
    echo "Missing Tag"
    exit 1
fi

if [ -z "$MESSAGE" ]
then
    echo "Missing Message"
    exit 2
fi

git add .
git commit -m "$MESSAGE"
git tag -a "$TAG" -m "$MESSAGE"
git push
git push --tags


