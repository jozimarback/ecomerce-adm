import { CategoriasInserirPage } from './categorias-inserir.po';

describe('workspace-project categorias', () => {
    let pagina: CategoriasInserirPage;

    beforeEach(() => {
        pagina = new CategoriasInserirPage();
    });

    it('deve navegar para cadastro categorias', () => {
        pagina.navegarParaCadastroCategorias();
        expect(pagina.obterTextoParagrafoPaginaCadastroCategorias()).toEqual('Categorias');
    });

    it('deve preencher formulário', () => {
        pagina.campoCodigo.sendKeys('0482740');
        pagina.campoNome.sendKeys('Calçados');
        pagina.selecionarOpcaoStatus('0');

        expect(pagina.campoCodigo.getAttribute('value')).toEqual('0482740');
        expect(pagina.campoNome.getAttribute('value')).toEqual('Calçados');
        expect(pagina.campoStatus.getAttribute('value')).toEqual('0');
    })

    it('deve salvar dados',() => {
        pagina.botaoSalvar.click();
        pagina.esperar(2000);
        expect(pagina.campoCodigo.getAttribute('value')).toEqual('');
        expect(pagina.campoCodigo.getId()).toEqual(pagina.obterElementoSelecionado().getId())
        expect(pagina.campoNome.getAttribute('value')).toEqual('');
    })

    it('categoria cadastrada com sucesso' ,() => {
        expect(pagina.mensagemCategoriaCadastradaComsucesso().isPresent()).toBe(true);
        
    })
})