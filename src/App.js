import {useState, useEffect} from 'react';
import logo from './Assets/logo.png';
import './App.css';
import Button from './Components/Button.jsx';
import MasterKey from './Components/MasterKey';
import Alerts from './Components/Alerts';
import {copiesLoader, getLocalKey, setLocalKey, getLocalKeyData} from './Servico/core.js';
import "tailwindcss/tailwind.css";
import './styles/main.css';
import { paste, copyLimited, createMasterKey, copyToKey, getDataByMasterKeyDirect} from './Servico/servico';

function App() {

  const [value, setValue] = useState('');
  const [mKey, setMKey] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [alert, setAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(()=>{
    getLocalKey(setMasterData, setMKey);
  }, []);

  const criarChave = async () => {
    const newKey =  await createMasterKey(value, setAlert, setAlertMessage);
    getLocalKeyData(setMasterData, mKey);
    setLocalKey(newKey); 
    setMKey(newKey);
    setValue('');
  } 

  const guardar = async () => {
    await copyToKey(mKey, value, setAlert, setAlertMessage);
    getLocalKeyData(setMasterData, mKey);
  }

  const getPaste = async () => {
    paste(value, setAlert, setAlertMessage)
  }

  const makeLimitedCopy = async () => {
    copyLimited(value, setAlert, setAlertMessage )
  }

  const getByMasterKey = () => {
    getDataByMasterKeyDirect(value, setAlert, setAlertMessage);
  }

  return (
    <div id="app" className="relative bg-gray-300 p-5">
      <MasterKey mKey={mKey} />
      <img src={logo} width="80" alt="copy_my_stuff"/>    
      <div id="inputs" className="mt-5">
        <Alerts tipo={alert} msg={alertMessage} setAlert={setAlert}/>
        <input 
          type="search" 
          name="serch" 
          placeholder="Conteúdo ou chave" 
          value={value}
          className="bg-white h-11 px-5 pr-10 rounded-full text-sm focus:outline-none" 
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="btn-g">
          <Button msg="Único uso" func={makeLimitedCopy} value={value} tipo="copia"/>
          <Button msg="Resgatar cópia" func={getPaste} value={value} tipo="copia" />
          <Button msg="Guardar" func={guardar} value={value} />
          <Button msg="Criar chave" func={criarChave} value={value} />
          <Button msg="Trocar chave" func={getByMasterKey} value={value} />
        </div>
      </div>
      <div className="mt-20 cards">
        {copiesLoader(masterData)}
      </div>
      <div className="rodape">
      ® Esse é um aplicativo para realizar cópias e guardar informações em hash. Por: @andrefilho99 e @danielleiros
      </div>
    </div>
  );
}

export default App;
