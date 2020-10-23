#!/bin/sh

if [ "$NODE_ENV" == "production" ] ; then
  npm run db:migrate
  npm run start
else
  npm run db:migrate
  npm run db:seed:all
  npm run start
fi