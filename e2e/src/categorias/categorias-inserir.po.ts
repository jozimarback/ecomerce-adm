import { browser, by, element } from 'protractor';


export class CategoriasInserirPage{
    
    navegarParaCadastroCategorias() {
        return browser.get('/categorias/inserir');
    }
    obterParagrafoPaginaCadastroCategorias() {
        return element(by.css('app-categoria-form h2')).getText();
    }
    selecionarOpcaoStatus(opcao:string){
        this.campoStatus.all(by.css('option[value="' + opcao + '"]')).click();
    }
    obterElementoSelecionado = () => browser.driver.switchTo().activeElement();

    esperar = (milisegundos:number) => {
        browser.sleep(milisegundos);
    }
    campoCodigo =  element(by.name('codigo'));
    campoNome =  element(by.name('nome'));
    campoStatus =  element(by.id('status'));
    botaoSalvar = element(by.buttonText('Salvar'));
}