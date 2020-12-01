import axios from 'axios';

export const getDataByMasterKey = (key) => {
    return axios.get(`https://control-c-project.herokuapp.com/control-c-project/paste-master-key/${key}`)
    .then(response =>{
        return response;
    }).catch(saida => {
        console.error(saida)
        console.error("Falha ao realizar a requisição");
    })
}

export const getDataByMasterKeyDirect = (key, setAlert, setAlertMessage) => {
    return axios.get(`https://control-c-project.herokuapp.com/control-c-project/paste-master-key/${key}`)
    .then(response =>{
        setAlertMessage(`Chave ${key}`);
        setAlert("sucesso");
        return response;
    }).catch(saida => {
        alertError(setAlert, setAlertMessage);
        console.error("Falha ao realizar a requisição");
    })
}

export const createAutoMasterKey = (name) => {
    const date = new Date().toString();
    return axios.post(`https://control-c-project.herokuapp.com/control-c-project/create-master-key/${date}`)
    .then(response =>{
        return response.data;
    }).catch(saida => {
        console.error("Falha ao realizar a requisição");
    })
}

export const createMasterKey = (name, setAlert, setAlertMessage) => {
    return axios.post(`https://control-c-project.herokuapp.com/control-c-project/create-master-key/${name}`)
    .then(response =>{
        return response.data;
    }).catch(saida => {
        alertError(setAlert, setAlertMessage, "Não foi possível criar a chave");
        console.error("Falha ao realizar a requisição");
    })
}

export const copyToKey = (key, value, setAlert, setAlertMessage) => {
    return axios.post(`https://control-c-project.herokuapp.com/control-c-project/copy-to-key/${key}/${value}`)
    .then(response =>{
        setAlertMessage(`"${value}" copiado para chave ${key}`);
        setAlert("sucesso");
        return response;
    }).catch(saida => {
        alertError(setAlert, setAlertMessage);
        console.error("Falha ao realizar a requisição");
    })
}

export const copyLimited = (value, setAlert, setAlertMessage) => {
    return axios.post(`https://control-c-project.herokuapp.com/control-c-project/copy-limited/${value}`)
    .then(response =>{
        setAlertMessage(`"${value}" copiado de forma limitada em ${response.data}`);
        setAlert("sucesso");
        return response;
    }).catch(saida => {
        alertError(setAlert, setAlertMessage);
        console.error("Falha ao realizar a requisição");
    })
}

export const copy = (value, setAlert, setAlertMessage) => {
    return axios.post(`https://control-c-project.herokuapp.com/control-c-project/copy/${value}`)
    .then(response =>{
        return response;
    }).catch(saida => {
        alertError(setAlert, setAlertMessage);
        console.error("Falha ao realizar a requisição");
    })
}

export const paste = (key, setAlert, setAlertMessage) => {
    return axios.get(`https://control-c-project.herokuapp.com/control-c-project/paste/${key}`)
    .then(response =>{
        setAlertMessage(`${response.data}`);
        setAlert("copia");
    }).catch(saida => {
        alertError(setAlert, setAlertMessage);
        console.error("Falha ao realizar a requisição");
    })
}

const alertError = (setAlert, setAlertMessage, customMsg) =>{
    setAlertMessage(customMsg || `Este item não existe :/`);
    setAlert("erro");
}