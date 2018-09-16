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

    it('deve existir tabela categorias',() => {
        expect(pagina.obterTabelaCategorias().isPresent()).toEqual(true);
    })

    
    it('existem categorias cadastradas' ,() => {
        expect(pagina.existemCategoriasCadastradas()).toBe(true);
        
    })
});
