#!/bin/bash

RESULT=$(($1 * ($2 + $3)))

PATHS=(src dest test)

OUTPUT=""
for i in ${PATHS[*]}; do
	for j in index.js util.js; do
		OUTPUT=(${OUTPUT[*]} project-${RESULT}/${i}/${j})
	done
done
echo ${OUTPUT[*]}
