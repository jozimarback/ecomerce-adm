import { CategoriasPage } from './categorias.po';

describe('workspace-project categorias', () => {
    let pagina: CategoriasPage;

    beforeEach(() => {
        pagina = new CategoriasPage();
    });


    it('deve navegar para categoria', () => {
        pagina.navegarParaCategorias();
        expect(pagina.obterParagrafoPaginaCategorias()).toEqual('Categorias');
    });

});
