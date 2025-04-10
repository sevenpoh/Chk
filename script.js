document.getElementById('start').addEventListener('click', () => {
  const lista = document.getElementById('lista').value.trim().split('\n');
  const respostas = document.getElementById('respostas');
  respostas.innerHTML = '';

  lista.forEach((cartao, index) => {
    setTimeout(() => {
      respostas.innerHTML += `<p>Testando: ${cartao}</p>`;
    }, index * 500);
  });
});

document.getElementById('stop').addEventListener('click', () => {
  alert('Parando testes... (função a ser implementada)');
});
