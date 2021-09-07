import './App.css';

function App() {
  return(
    <div className="form-group">
    <label class="font-weight-bold display-4" htmlFor="title">Status</label>
            <input readonly type="text" className="form-control-plaintext text-success lead" id="title" placeholder="Expense Title" value="Approved" />
			<pre><button><h3>SUBMIT</h3></button>    <button><h3>CANCEL</h3></button></pre>
    </div>
  );
}

export default App;
