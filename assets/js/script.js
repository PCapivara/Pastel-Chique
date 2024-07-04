document.querySelector('.btn_compra').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const lancheName = document.getElementById('lancheName').value;
    const endereco = document.getElementById('endereco').value;
    const tributo = document.getElementById('tributo').value;
    const capivara = document.getElementById('capivara').value;

    const mensagem = `Pedido de compra:%0A
      Nome do guloso: ${name}%0A
      Lanche escolhido: ${lancheName}%0A
      Endereço de entrega: ${endereco}%0A
      Forma de pagamento: ${tributo}%0A
      Capivara é o Melhor animal?: ${capivara}`;


    const whatsappLink = `https://api.whatsapp.com/send?phone=+5511934672509&text=${mensagem}`;
    window.open(whatsappLink, '_blank');
  });