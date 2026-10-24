const nodeInputs = [...document.querySelectorAll('input[name="node"]')];
const confirmation = document.querySelector('#confirm-node');
const confirmationLabel = document.querySelector('#confirm-label');
const action = document.querySelector('#install-action');
const selectedNode = document.querySelector('#selected-node');
const installButton = document.querySelector('#install-button');
const browserStatus = document.querySelector('#browser-status');

const nodeInfo = {
  a: { label: 'Nodo A', address: '1', peer: '2' },
  b: { label: 'Nodo B', address: '2', peer: '1' },
};

function selectedInput() {
  return nodeInputs.find((input) => input.checked);
}

function updateBrowserStatus() {
  if (!window.isSecureContext) {
    browserStatus.className = 'status error';
    browserStatus.textContent = 'Web Serial requiere HTTPS. Para una prueba local, usa localhost; no abras index.html directamente.';
    return;
  }

  if (!('serial' in navigator)) {
    browserStatus.className = 'status error';
    browserStatus.textContent = 'Este navegador no expone Web Serial. Usa Chrome o Edge de escritorio actualizado. iOS y el flujo móvil no son compatibles.';
    return;
  }

  browserStatus.className = 'status success';
  browserStatus.textContent = 'Navegador compatible con Web Serial. El dispositivo solo se comprobará después de que selecciones un puerto.';
}

function updateSelection() {
  const input = selectedInput();
  confirmation.checked = false;
  action.hidden = true;

  if (!input) {
    confirmation.disabled = true;
    confirmationLabel.textContent = 'Primero selecciona Nodo A o Nodo B.';
    installButton.removeAttribute('manifest');
    return;
  }

  const info = nodeInfo[input.value];
  confirmation.disabled = false;
  confirmationLabel.textContent = `Confirmo que esta placa será ${info.label}, dirección ${info.address}.`;
  selectedNode.textContent = `${info.label} · dirección ${info.address} · destinatario ${info.peer}`;
  installButton.setAttribute('manifest', input.dataset.manifest);
}

function updateConfirmation() {
  action.hidden = !confirmation.checked || !selectedInput();
}

nodeInputs.forEach((input) => input.addEventListener('change', updateSelection));
confirmation.addEventListener('change', updateConfirmation);
updateBrowserStatus();
updateSelection();
