# data-transfer-channels


Esta es una implementación de un servidor de sockets que permite la transferencia de datos entre nodos en un canal específico.

Está pensado para transferir datos entre nodos usando identificadores de canales

## Puertos

Es importante configurar el servidor de manera que el puerto 3000 esté habilitado por el firewall.

### Inbound

|Type|Protocol|Port Range|Sources|
|---|---|---|---|
|Custom|TCP|3000|All IPv4 All IPv6|

## 1 Instalación de dependencias

```bash
mkdir ~/mi-servidor-servo
cd ~/mi-servidor-servo
```

```bash
npm init -y
npm install express socket.io
```

## 2 Ejecución del servidor con PM2

```bash
sudo npm install pm2 -g
pm2 start index.js --name "servidor-sockets"
```

para verificar el estado del servidor 

```bash
pm2 status
```


Detenerlo: 
```bash
pm2 stop servidor-sockets
```

Reiniciarlo: 
```bash
pm2 restart servidor-sockets
```
