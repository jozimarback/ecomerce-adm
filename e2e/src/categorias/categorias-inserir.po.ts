import { browser, by, element, protractor, $ } from 'protractor';


export class CategoriasInserirPage {

    navegarParaCadastroCategorias() {
        return browser.get('/categorias/inserir');
    }
    obterTextoParagrafoPaginaCadastroCategorias() {
        return element(by.css('app-categoria-form h2')).getText();
    }
    campoCodigo = element(by.name('codigo'));
    campoNome = element(by.name('nome'));
    campoStatus = element(by.id('status'));
    selecionarOpcaoStatus(opcao: string) {
        this.campoStatus.all(by.css('option[value="' + opcao + '"]')).click();
    }

    botaoSalvar = element(by.buttonText('Salvar'));

    obterElementoSelecionado = () => browser.driver.switchTo().activeElement();

    esperar = (milisegundos: number) => {
        browser.sleep(milisegundos);
    }
    mensagemCategoriaCadastradaComsucesso() {
        var alertaSucesso = element(by.id('alerta-sucesso'));
        return alertaSucesso;
    }
}