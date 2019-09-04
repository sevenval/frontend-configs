#!/usr/bin/env bash
set -eu
pushd ${BASH_SOURCE%/*}/packages

RED='\033[0;31m'
CYAN='\033[0;36m'
# YELLOW='\033[1;33m'
NC='\033[0m'

function inquire {
  echo "$1"
  select yn in "Yes" "No"; do
    case $yn in
      Yes ) break;;
      No ) echo -e "${RED}Aborting...${NC}"; exit;;
    esac
  done
}

echo "Which package do you want to release?"
select PACKAGE in *; do break; done
echo -e "\nContinuing with ${CYAN}${PACKAGE}${NC}\n"

inquire 'Did you increase the version number in "package.json" according to SemVer?'

inquire 'Did you add the release logs to "CHANGELOG.md"?'

echo -e "\n${CYAN}Running tests...${NC}\n"
yarn test

echo -e "\n${CYAN}Starting the release process...${NC}\n"
(cd "$PACKAGE" && npm publish)
