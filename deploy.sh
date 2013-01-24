scp index.html humans.txt robots.txt root@www.sugendran.com:/var/local/webserver
scp -r styles root@www.sugendran.com:/var/local/webserver
scp -r scripts root@www.sugendran.com:/var/local/webserver
scp -r images root@www.sugendran.com:/var/local/webserver
ssh root@www.sugendran.com "chown -R root:www-data /var/local/webserver"
