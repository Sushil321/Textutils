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
                <label htmlFor="exampleFormControlTextarea1" className="mb-3 " >{props.heading}</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleChnage} rows="8" style={{backgroundColor: props.mode ==='dark'? 'gray':'white' , color :props.mode==='light'?'black':'white'  }}></textarea>
                <button className="btn btn-primary mt-2 mx-2" onClick={upperCase}>UpperCase</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={lowerCase}>LowerCase</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={clearText}>ClearText</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={capitalizeText} >CapitalizeText</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={copyText}>CopyText</button>
                <button className="btn btn-primary mt-2 mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
                

            </div>
            <div className="container mt-4">
                <h1>Your summary</h1>
                <p> <b>{text.split(" ").length} words</b> and <b>{text.length} characters</b> </p>
                <p>{0.008 * text.split(" ").length} Minutes for reading</p>
                <h2 className="mt-4">Preview</h2>
                <p>{text.length > 0 ? text : "Write somethinge to preview"}</p>

            </div>
            

        </div>
    )

}

export default TextForm;