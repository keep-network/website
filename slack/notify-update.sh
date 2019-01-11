git diff --stat --name-status HEAD^ | grep slack/

if [ $? == 0 ]; then
  echo "Notifying guardian..."
  curl -XPOST --data "" $GUARDIAN_UPDATE_ENDPOINT
else
  echo "No Slack updates detected in diff, not issuing a notification."
  git --no-pager diff --stat --name-status HEAD^
fi
