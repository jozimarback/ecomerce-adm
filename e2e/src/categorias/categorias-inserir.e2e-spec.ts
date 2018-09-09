import { CategoriasInserirPage } from './categorias-inserir.po';

describe('workspace-project categorias', () => {
    let pagina: CategoriasInserirPage;

    beforeEach(() => {
        pagina = new CategoriasInserirPage();
    });

    it('deve navegar para cadastro categorias', () => {
        pagina.navegarParaCadastroCategorias();
        expect(pagina.obterParagrafoPaginaCadastroCategorias()).toEqual('Categorias');
    });

    it('deve preencher formulário', () => {
        pagina.campoCodigo.sendKeys('0482740');

        pagina.selecionarOpcaoStatus('0');
        pagina.campoNome.sendKeys('Calçados');
        expect(pagina.campoCodigo.getAttribute('value')).toEqual('0482740');
        expect(pagina.campoNome.getAttribute('value')).toEqual('Calçados');
        expect(pagina.campoStatus.getAttribute('value')).toEqual('0');
        
        
    })

    it('devesalvar dados',() => {
        pagina.botaoSalvar.click();
        pagina.esperar(5000);
        expect(pagina.campoCodigo.getAttribute('value')).toEqual('');
        expect(pagina.campoCodigo.getId()).toEqual(pagina.obterElementoSelecionado().getId())
        expect(pagina.campoNome.getAttribute('value')).toEqual('');
    })
})