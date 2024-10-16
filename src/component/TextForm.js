import { useState } from "react";

function TextForm(props){

    const  upperCase=()=>{

       setText(text.toUpperCase())
     
     

        
    }
    const lowerCase=()=>{

        setText(text.toLowerCase())
   
        
        
         
     }
     const clearText=()=>{

        setText("");
      
       
 
     }

     const capitalizeText=()=>{
        let te = text.split(" ");
        let newTe = "";
        for(let i = 0 ; i< te.length ; i++){
            newTe = newTe + te[i].charAt(0).toUpperCase() + te[i].slice(1,te[i].length)+" ";  
        }
       
        setText(newTe)
  
        
     }

     const copyText=()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();

        
     }

     const removeSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    
        
     }

    const handleChnage=(e)=>{
        setText(e.target.value)
       
        

    }
    const [text,setText] = useState("");

    return(
        <div className={`mb-5 text-${props.mode==='light'?'dark':'light'}`}>
            <div className="container mt-5 ">
                <label htmlFor="exampleFormControlTextarea1" className="mb-3 " style={{fontSize:"25px" , fontWeight:"600"}} >{props.heading}</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleChnage} rows="8" style={{
                        backgroundColor: props.mode === 'dark' ? '#00468b' : props.mode === 'gray' ? '#c0c0c0' : 'white',
                        color: props.mode === 'gray' ? 'white' : props.mode === 'white' ? 'black' : props.mode === 'dark' ? 'white' : 'black'
                    }}>
      
                </textarea>
                <button disabled={text.length===0} className="btn btn-primary mt-2 mx-2" onClick={upperCase}>UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 mx-2" onClick={lowerCase}>LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 mx-2" onClick={clearText}>ClearText</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 mx-2" onClick={capitalizeText} >CapitalizeText</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 mx-2" onClick={copyText}>CopyText</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
                

            </div>
            <div className="container mt-4">
                <h1>Your summary</h1>
                <p> <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</b> and <b>{text.length} characters</b> </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes for reading</p>
                <h2 className="mt-4">Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>

            </div>
            

        </div>
    )

}

export default TextForm;