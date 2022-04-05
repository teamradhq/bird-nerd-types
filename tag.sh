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
source ./.env

TAG=$1
MESSAGE=$2
DIR=$(pwd)

# Get the remote for this github repo
get_github_remote() {
    awk '/^\[.*\]$/{obj=$0}/=/{print obj $0}' .git/config \
      | grep origin \
      | grep url \
      | sed 's/.*=//'
}

update_types() {
    echo "Committing types and tagging"
    git add .
    git commit -m "$MESSAGE"
    git tag -a "$TAG" -m "$MESSAGE"
    git push
    git push --tags
}

update_project_types() {
    local path=$1

    if [ -z "$path" ]
    then
        echo "No Path..."
        return
    fi

    cd "$path" || return
    echo "Updating project repo:: $(pwd)"

    npm i "$REMOTE#$TAG"

    git add package*
    git commit -m "Update types package"
    git tag -a "types-$TAG" -m "Update types package"
    git push --tags

    cd "$DIR" || return
}

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

REMOTE=$(get_github_remote)
update_types
update_project_types "$APP_PATH"
update_project_types "$API_PATH"
