import { browser, by, element } from 'protractor';

export class CategoriasPage{
    navegarParaCategorias() {
        return browser.get('/categorias');
    }

    obterParagrafoPaginaCategorias() {
        return element(by.css('app-categorias h2')).getText();
    }
}