import { browser, by, element } from 'protractor';

export class CategoriasPage{
    navegarParaCategorias() {
        return browser.get('/categorias');
    }

    obterParagrafoPaginaCategorias() {
        return element(by.css('app-categorias h2')).getText();
    }

    obterTabelaCategorias(){
        return element(by.css('app-categorias table'));
    }

    existemCategoriasCadastradas(){
        return element(by.css('app-categorias table tbody tr')).isPresent();
    }
}