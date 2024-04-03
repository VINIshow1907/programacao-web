import chevettao from '../src/assets/chevetao.jpeg';
import vmveiculos from'./assets/vmveiculos.png';
import './App.css';
function App() {
  return (
    
    <div className="App">
        <div className='nomeempresa'>
  <p id='nomeempresa' className='nomeempresa'> <strong>VM Veiculos</strong></p>
</div>
      
      <header className="App-header">
        <img src={vmveiculos} className="App-vmveiculos" alt="vmveiculos" />
        <p className='App-chevetao'>
         <strong>Venda De Veiculos</strong>
        </p>
        <a>Procurando por um veículo novo de excelente qualidade? Você encontrou o site que fornecerá o veículo dos seus sonhos.
        </a>
        <p></p>
        <button className='App-button'> BUSCAR</button>
        <p></p>
      </header>
      <p></p>
      <footer className='rodape'>
                <div className='redes-sociais'>
                    <a href="facebook.com" target="_blank"></a>
                    <img src={require('../src/assets/facebook.png')} alt='Facebook'/>
                    <a href="twitter.com" target="_blank"></a>
                    <img src={require('../src/assets/twitter.jpeg')} alt='Twitter'/>
                    <a href="instagram.com" target="_blank"></a>
                    <img src={require('../src/assets/instagram.png')} alt='Instagram'/>
                </div>
                <div className='logo'>
                    <img src={require('../src/assets/logovmveiculos.png')} alt='Logo VMveiculos' />
                </div>
                <div className='desenvolvido'>
                    <p>Desenvolvido por Vinicius</p>
                </div>
        </footer>
    </div>
  );
}

export default App;
