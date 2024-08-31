const parcelas = [
    { numero: 1, vencimento: '09-03-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante1.pdf' },
    { numero: 2, vencimento: '10-04-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante2.pdf' },
    { numero: 3, vencimento: '09-05-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante3.pdf' },
    { numero: 4, vencimento: '09-06-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante4.pdf' },
    { numero: 5, vencimento: '23-06-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante5.pdf' },
    { numero: 6, vencimento: '26-07-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante6.pdf' },
    { numero: 7, vencimento: '26-08-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante7.pdf' },
    { numero: 8, vencimento: '28-09-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante8.pdf' },
    { numero: 9, vencimento: '28-11-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante9.pdf' },
    { numero: 10, vencimento: '23-12-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante10.pdf' },
    { numero: 11, vencimento: '10-01-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante11.pdf' },
    { numero: 12, vencimento: '10-02-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante12.pdf' },
    { numero: 13, vencimento: '11-03-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante13.pdf' },
    { numero: 14, vencimento: '10-04-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante14.pdf' },
    { numero: 15, vencimento: '10-05-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante15.pdf' },
    { numero: 16, vencimento: '10-06-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante16.pdf' },
    { numero: 17, vencimento: '10-07-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante17.pdf' },
    { numero: 18, vencimento: '10-08-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante18.pdf' },
    { numero: 19, vencimento: '10-09-2024', situacao: 'Não Pago', comprovante: null },
];


const valorPorParcela = 600;
const valorTotalTerreno = 30000;
const percentualDevolucao = 0.25;

function loadParcelas() {
    const tableBody = document.getElementById('parcelTable');
    let valorPagoTotal = 0;
    tableBody.innerHTML = '';

    parcelas.forEach(parcela => {
        const row = document.createElement('tr');

        const numeroCell = document.createElement('td');
        numeroCell.textContent = parcela.numero;
        numeroCell.className = 'numero-parcela';
        row.appendChild(numeroCell);

        const vencimentoCell = document.createElement('td');
        vencimentoCell.textContent = parcela.vencimento;
        row.appendChild(vencimentoCell);

        const situacaoCell = document.createElement('td');
        situacaoCell.textContent = parcela.situacao;
        row.appendChild(situacaoCell);

        const comprovanteCell = document.createElement('td');
        if (parcela.comprovante) {
            const link = document.createElement('a');
            link.href = parcela.comprovante;
            link.textContent = 'Comprovante';
            link.className = 'button-link';
            link.target = '_blank';
            comprovanteCell.appendChild(link);
        } else {
            comprovanteCell.textContent = 'N/A';
        }
        row.appendChild(comprovanteCell);

        if (parcela.situacao === 'Pago') {
            valorPagoTotal += valorPorParcela;
        }

        tableBody.appendChild(row);
    });

    const valorDevolucao = valorPagoTotal * percentualDevolucao;

    document.getElementById('valorPago').textContent = `R$ ${valorPagoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    document.getElementById('valorDevolucao').textContent = `R$ ${valorDevolucao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

document.addEventListener('DOMContentLoaded', loadParcelas);
