function calcular(tipo, valor) {
    if (tipo === 'acao') {
        var resultado = document.getElementById('texto').value

        if (valor === 'c') {
            // limpar o valor da calculadora
            document.getElementById('texto').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor === '*') {
            document.getElementById('texto').value += valor
        }

        if (valor === '.') {
            if (resultado === '') {
                document.getElementById('texto').value += ('0' + valor)
            } else {
                document.getElementById('texto').value += valor
            }
        }

        if (valor === '=') {
            if (resultado === '') {
                document.getElementById('texto').value = ''
            } else {
                // transformando a string em algo que o interpretador do JavaScript consiga calcular
                document.getElementById('texto').value = eval(resultado)
            }
        }

    } else if (tipo === 'valor') {

        document.getElementById('texto').value += valor

    }
}