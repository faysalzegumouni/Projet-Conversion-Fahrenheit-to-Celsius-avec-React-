import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// (C × 9/5) + 32 = F
function App() {
  const[error,setError]=useState(false);
  const[celesius,setCelius]=useState(0);
  const[fahrenhiet,setFathrenhiet]=UseState(32);
  //Fath to celisieus
  function fath2cel(e){
    const fah=e.target.value
    let cel=(fah-32)*5/9;
    setFathrenhiet(fah)
    setCelius(fah===""?"":cel)
  }

  //celisieus to fath
  function cel2fath(e){
    const cel=e.target.value
    if(!isNaN(cel)  || cel===""){
       let fah=32+cel*9/5;
       setCelius(cel)
       setFathrenhiet(cel===""?"":fah)
       setError(false)
    }else{
      setError(true);
    }
  }
  return (
    <div className="container mt-4">
      <h2>C/F Converter</h2>
      {error && <div class="alert alert-danger"> Invalid input ...</div>}
      <input onChange={fath2cel} class="form-control mt-4" type="text" value={celesius}/>
      <input onChange={cel2fath} class="form-control mt-4" type="text" value={fahrenhiet}/>
  </div>
  );
}

export default App;
