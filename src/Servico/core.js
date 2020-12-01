import Card from "../Components/Card.jsx";
import { getDataByMasterKey } from './servico';

export async function getLocalKey (setMasterData, setMKey) {
    const key = localStorage.getItem("master-key");
    if (key) {
        console.log(key)
        setMKey(key);
        const data = await getDataByMasterKey(key);
        if(data) {
            setMasterData(data.data.infos);
        }else {
            console.error("Deu errado")
        }
    } 
}

export const getLocalKeyData = async (setMasterData, key) => {
    const data = await getDataByMasterKey(key);
    console.log(data);
    setMasterData(data.data.infos);   
}

export const setLocalKey = (newKey) => localStorage.setItem("master-key", newKey);

export function copiesLoader(copies) {
    return copies.map((e, i) => {
        return (
            <div key={i}>
                <Card text={e.value} index={i+1}/>
            </div>
        );
    })

}

export const copy = (index) => {
    if(index){
      var copyText = document.getElementById(`copy-${index}`);
      var textField = document.createElement('textarea')
      textField.innerText = copyText.value
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
      alert(`O texto: ${copyText.value} foi copiado!`)
    }
  }