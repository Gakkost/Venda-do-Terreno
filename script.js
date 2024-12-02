const parcelas = [
    { numero: 1, vencimento: '10-04-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante1.pdf' },
    { numero: 2, vencimento: '09-05-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante2.pdf' },
    { numero: 3, vencimento: '09-06-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante3.pdf' },
    { numero: 4, vencimento: '23-06-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante4.pdf' },
    { numero: 5, vencimento: '26-07-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante5.pdf' },
    { numero: 6, vencimento: '26-08-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante6.pdf' },
    { numero: 7, vencimento: '28-09-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante7.pdf' },
    { numero: 8, vencimento: '28-11-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante8.pdf' },
    { numero: 9, vencimento: '23-12-2023', situacao: 'Pago', comprovante: 'comprovantes/comprovante9.pdf' },
    { numero: 10, vencimento: '10-01-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante10.pdf' },
    { numero: 11, vencimento: '10-02-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante11.pdf' },
    { numero: 12, vencimento: '11-03-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante12.pdf' },
    { numero: 13, vencimento: '10-04-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante13.pdf' },
    { numero: 14, vencimento: '10-05-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante14.pdf' },
    { numero: 15, vencimento: '10-06-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante15.pdf' },
    { numero: 16, vencimento: '10-07-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante16.pdf' },
    { numero: 17, vencimento: '10-08-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante17.pdf' },
    { numero: 18, vencimento: '10-09-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante18.pdf' },
    { numero: 19, vencimento: '10-10-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante19.pdf' },
    { numero: 20, vencimento: '10-11-2024', situacao: 'Pago', comprovante: 'comprovantes/comprovante20.pdf' },
    { numero: 21, vencimento: '10-12-2024', situacao: 'Não Pago', comprovante: null },
    { numero: 22, vencimento: '10-01-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 23, vencimento: '10-02-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 24, vencimento: '10-03-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 25, vencimento: '10-04-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 26, vencimento: '10-05-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 27, vencimento: '10-06-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 28, vencimento: '10-07-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 29, vencimento: '10-08-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 30, vencimento: '10-09-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 31, vencimento: '10-10-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 32, vencimento: '10-11-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 33, vencimento: '10-12-2025', situacao: 'Não Pago', comprovante: null },
    { numero: 34, vencimento: '10-01-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 35, vencimento: '10-02-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 36, vencimento: '10-03-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 37, vencimento: '10-04-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 38, vencimento: '10-05-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 39, vencimento: '10-06-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 40, vencimento: '10-07-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 41, vencimento: '10-08-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 42, vencimento: '10-09-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 43, vencimento: '10-10-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 44, vencimento: '10-11-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 45, vencimento: '10-12-2026', situacao: 'Não Pago', comprovante: null },
    { numero: 46, vencimento: '10-01-2027', situacao: 'Não Pago', comprovante: null },
    { numero: 47, vencimento: '10-02-2027', situacao: 'Não Pago', comprovante: null },
    { numero: 48, vencimento: '10-03-2027', situacao: 'Não Pago', comprovante: null },
    { numero: 49, vencimento: '10-04-2027', situacao: 'Não Pago', comprovante: null },
    { numero: 50, vencimento: '10-05-2027', situacao: 'Não Pago', comprovante: null },
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
