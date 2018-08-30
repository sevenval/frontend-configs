#!/usr/bin/env bash

RED='\033[0;31m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

PACKAGE=""

function inquirePackage {
  echo "Which package do you want to release?"
  select yn in "eslint-config-sevenval" "tslint-config-sevenval" "stylelint-config-sevenval"; do
      case $yn in
          eslint-config-sevenval ) PACKAGE="eslint-config-sevenval"; break;;
          tslint-config-sevenval ) PACKAGE="tslint-config-sevenval"; break;;
          stylelint-config-sevenval ) PACKAGE="stylelint-config-sevenval"; break;;
      esac
  done
}

function inquire {
  echo "$1"
  select yn in "Yes" "No"; do
      case $yn in
          Yes ) break;;
          No ) echo -e "${RED}Aborting...${NC}"; exit;;
      esac
  done
}

inquirePackage
echo ''
echo -e "Continuing with ${CYAN}${PACKAGE}${NC}"
echo ''
inquire 'Did you increase the version number in "package.json" according to SemVer?'
echo ''
echo -e "Continuing with ${CYAN}${PACKAGE}${NC}"
echo ''

inquire 'Did you add the release logs to "CHANGELOG.md"?'

echo ''
echo -e "${CYAN}Starting the release process...${NC}"
echo ''

# Only proceed when tests are passing
yarn test

cd "packages/${PACKAGE}/" \
  && npm publish; ret=$?; cd -; exit $ret
