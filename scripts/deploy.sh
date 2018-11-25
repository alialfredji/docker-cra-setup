# this script is meant to be executed remotely to fetch the current branch
# and rebuild the solution

# git pull
humble build

# reboot services
humble down
humble up -d

# cleanup images
# docker image prune -a -f
