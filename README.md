# Front

# Configuration de Xampp pour l'environnement local :

1) aller dans le répertoire : C:\xampp\apache\conf\extra
2) ouvrir le fichier "httpd-vhosts.conf", et copier coller le texte ci-dessous :

```
<VirtualHost *:80>
    ServerName prj-TMS-web-front.fr
    DocumentRoot "C:/xampp/htdocs/projet/projet_TMS/Front"
</VirtualHost>
```
/!\ attention le path décrit est un exemple /!\
le path à écrire commencera forcément par : "C:/xampp/htdocs/" + l'arborescence de projet cloné sur votre machine

3) ouvrir bloc note en tant qu'administrateur
4) ouvrir le fichier "C:\Windows\System32\drivers\etc\.hosts", et copier coller le texte ci-dessous :
```
127.0.0.1	prj-tms-web-front.fr
```
