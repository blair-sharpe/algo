#!/usr/bin/env bash
source config.sh
docker build --target $TARGET -qf ./Dockerfile -t algorithms .
# file to test
HOST_FILE_PATH=$(find "$PWD/solutions/$USERNAME" -name $FILE)
FILE_PATH=$(find "./solutions/$USERNAME/" -name $FILE)
FILE_PATH="${FILE_PATH:1}"
# test file
HOST_TEST_FILE_PATH=$(find "$PWD/tests/$USERNAME" -name $TEST_FILE)
TEST_FILE_PATH=$(find "./tests/$USERNAME/" -name $TEST_FILE)
TEST_FILE_PATH="${TEST_FILE_PATH:1}"
docker run -e FILE_PATH=$FILE_PATH \
           -e TEST_FILE_PATH=$TEST_FILE_PATH \
           -it \
           -v $HOST_FILE_PATH:/code/$FILE_PATH \
           -v $HOST_TEST_FILE_PATH:/code/$TEST_FILE_PATH \
           --rm algorithms \
