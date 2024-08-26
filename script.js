const parcelas = [
    { numero: 1, vencimento: '2024-09-10', situacao: 'Pago', comprovante: 'comprovantes/comprovante1.pdf' },
    { numero: 2, vencimento: '2024-10-10', situacao: 'Não Pago', comprovante: null },
    // Continue adicionando as parcelas
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
            link.textContent = 'Ver Comprovante';
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
