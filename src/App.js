
import './App.css';
import { useState } from 'react';


const App = () => {
	const [firstName, setFirstName] = useState("Brennan")
	const [age, setAge] = useState(0)


	return (
		<div className="App">
			<p>{firstName}</p>
			<p>{age}</p>
			<input type="text" onChange={(event)=>{
				const value = event.target.value
				setFirstName(value)
			}}/>
			
			<button onClick={()=>{
				setAge(age + 1)
			}}>Set Age</button>
		</div>
	);
}

export default App;
