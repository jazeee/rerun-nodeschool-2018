#! /bin/bash

items=(${*:2:2})
items=("I am ${items[*]} and ${*:4:1}")

echo "${items[*]}"
