#!/bin/bash

pm2 reload DB-start --watch
pm2 reload Account_Server-start --watch
pm2 reload Server-start --watch
