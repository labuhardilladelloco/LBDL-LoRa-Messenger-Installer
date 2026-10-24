# LBDL LoRa Messenger — Instalador web

Instalador web y documentación de construcción de los nodos A y B de LBDL LoRa Messenger. Incluye cableado, puesta en marcha, descarga Android y ayuda técnica.

## Estado

Los firmwares de los dos nodos se han instalado correctamente desde el navegador sobre placas reales, según las pruebas realizadas por el responsable del proyecto. La APK release también se ha instalado y verificado en teléfonos reales. Quedan pendientes la revisión final de las condiciones radioeléctricas aplicables y las pruebas de reproducción por terceros. Selecciona cuidadosamente el nodo correcto antes de instalar.

## Uso

Abre el sitio con Chrome o Edge de escritorio, conecta el ESP32 por USB, elige el nodo A o B y confirma la selección antes de iniciar la instalación.

Los binarios publicados se generaron desde la versión `1.0.0-pre.1+a8ed8db`.

## Aplicación Android

La APK release `1.0.0+2` se distribuye como asset de GitHub Releases y no se
versiona dentro de este repositorio. Se comprobó su actualización e instalación
en un Samsung SM-S911U1, la conexión al nodo y un envío de texto hasta el otro
móvil.

Descarga:
https://github.com/labuhardilladelloco/LBDL-LoRa-Messenger-Installer/releases/download/android-v1.0.0/LBDL-LoRa-Messenger-1.0.0%2B2-release.apk

- Paquete: `com.labuhardilladelloco.lbdl_messenger`
- Tamaño: 54.513.089 bytes
- SHA-256: `D276EA460A921B52DC8D8769DCD986E7B7F11F087F76896F6C830F3E46FB46CC`

Una instalación debug anterior puede ser incompatible con la firma release.
Antes de desinstalarla, se debe conservar el historial local que resulte
necesario.

## Integridad

- `firmware/node-a-merged.bin`: `DC305918EE9F9B14FCE010E18C83D6D62BC765764E2EDBCC3EAF3EDF7D6FD5C2`
- `firmware/node-b-merged.bin`: `A8215209CA20B90B0C35D72DE2152BBABBB61821F911C6C4D3C129644B886C8F`

## Privacidad y procedencia

Este repositorio contiene únicamente los archivos necesarios para desplegar el instalador. No incluye el código fuente, el historial ni información interna del repositorio privado de desarrollo.
