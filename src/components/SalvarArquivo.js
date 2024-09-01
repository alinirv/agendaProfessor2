import React from "react";
import{saveAs} from "file-saver"


function SalvarArquivo(){
    const [text, setText] = useState('');

    const handleSavefile=()=>{
        const blob = new Blob([text],{type: 'text/plain,charset=utf-8'});
        saveAs(blob, 'arquivo.txt');
    }

    return(
        <div>
            <h2>Observações</h2>
            <textarea 
            value={text} 
            onChange={(e)=>setText(e.target.value)}
            rows="10"
            cols="50"/>
            <button onClick={handleSavefile}>Salvar</button>
        </div>
    )
}

export default SalvarArquivo;