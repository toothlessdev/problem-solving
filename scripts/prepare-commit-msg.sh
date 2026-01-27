#!/bin/sh
# Algorithm repo – commit message = staged file names

COMMIT_MSG_FILE="$1"

# 이미 메시지가 있으면 건드리지 않음
# (git commit -m, amend, rebase 보호)
if [ -s "$COMMIT_MSG_FILE" ]; then
  exit 0
fi

FILES=$(git diff --cached --name-only)

# 파일 없으면 기본 메시지
if [ -z "$FILES" ]; then
  echo "update" > "$COMMIT_MSG_FILE"
  exit 0
fi

# 줄바꿈 → ", " 로 변환
MESSAGE=$(echo "$FILES" | tr '\n' ', ' | sed 's/, $//')

echo "$MESSAGE" > "$COMMIT_MSG_FILE"