# LBDL LoRa Messenger — Instalador web

Vista previa pública del instalador mediante ESP Web Tools para los nodos A y B de LBDL LoRa Messenger.

## Estado

Esta versión es exclusivamente de prueba. El firmware todavía no ha sido validado físicamente con ESP32, LoRa, BLE ni teléfonos reales. Selecciona cuidadosamente el nodo correcto antes de instalar.

## Uso

Abre el sitio con Chrome o Edge de escritorio, conecta el ESP32 por USB, elige el nodo A o B y confirma la selección antes de iniciar la instalación.

Los binarios publicados se generaron desde la versión `1.0.0-pre.1+a8ed8db`.

## Aplicación Android

El sitio enlaza la APK release firmada de LBDL LoRa Messenger `1.0.0+1`,
publicada como asset de la
[GitHub Release android-v1.0.0](https://github.com/labuhardilladelloco/LBDL-LoRa-Messenger-Installer/releases/tag/android-v1.0.0).
El APK no se versiona dentro de este repositorio.

- Paquete: `com.labuhardilladelloco.lbdl_messenger`
- Tamaño: 54.496.705 bytes
- SHA-256: `85B686685C8B71E5F3EB23A126E8ACF5A6179298ABEACE40DCA10D2A752BC393`

Una instalación debug anterior puede ser incompatible con la firma release.
Antes de desinstalarla, se debe conservar el historial local que resulte
necesario.

## Integridad

- `firmware/node-a-merged.bin`: `DC305918EE9F9B14FCE010E18C83D6D62BC765764E2EDBCC3EAF3EDF7D6FD5C2`
- `firmware/node-b-merged.bin`: `A8215209CA20B90B0C35D72DE2152BBABBB61821F911C6C4D3C129644B886C8F`

## Privacidad y procedencia

Este repositorio contiene únicamente los archivos necesarios para desplegar el instalador. No incluye el código fuente, el historial ni información interna del repositorio privado de desarrollo.
