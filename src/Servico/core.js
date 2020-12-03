import Card from "../Components/Card.jsx";
import { getDataByMasterKey,createAutoMasterKey } from './servico';

export async function getLocalKey (setMasterData, setMKey) {
    const key = localStorage.getItem("master-key");
    if (key) {
        setMKey(key);
        const data = await getDataByMasterKey(key);
        if(data) {
            setMasterData(data.data.infos);
        }else {
            console.error("Deu errado")
        }
    } else {
        const newKey = await createAutoMasterKey();
        setMKey(newKey);
        setLocalKey(newKey);
    }
}

export const getLocalKeyData = async (setMasterData, key) => {
    const data = await getDataByMasterKey(key);
    setMasterData(data ? data.data.infos : []);  
}

export const setLocalKey = (newKey) => localStorage.setItem("master-key", newKey);

export function copiesLoader(copies, setAlert, setAlertMessage) {
    return copies.map((e, i) => {
        return (
            <div key={i}>
                <Card text={e.value} index={i+1} setAlert={setAlert} setAlertMessage={setAlertMessage}/>
            </div>
        );
    })

}

export const copy = (index, setAlert, setAlertMessage) => {
    if(index){
        var copyText = document.getElementById(`copy-${index}`);
        var textField = document.createElement('textarea')
        textField.innerText = copyText.value
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        setAlert('copia');
        setAlertMessage(`${copyText.value} foi copiado para transferência`);
        textField.remove()
    }
  }

  export const copyFromButton = (value) => {
    if(value){
      var textField = document.createElement('textarea')
      textField.innerText = value
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
  }