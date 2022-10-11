
import './App.css';
import { useState } from 'react';


const App = () => {

	const [firstName, setFirstName] = useState("James")
	const [age, setAge] = useState(0)

	const [colors, setColors] = useState(["blue", "red"])
	const [color, setColor] = useState("")


  return (
    <div className="App">
      <header className="App-header">
				First Name: {firstName}
				<br/>
				Age: {age}
				<br/>
				Colors: {colors}
				{/* <button onClick={()=>{
					console.log("Before: ", firstName)
					setFirstName("Ginny")
					console.log("After: ", firstName)
				}}>Set First Name</button> */}
				<input type="text" onChange={(e)=>{
					setFirstName(e.target.value + "98124")
				}}/>
				<button onClick={()=>{
					setAge(age + 1)
				}}>Increment Age</button>

				<br/>
				Color input:
				<input type="text" onChange={(e)=>{
					setColor(e.target.value)
				}}/>
				<button onClick={()=>{
					const updatedColors = [ ...colors, color ]
					setColors(updatedColors)
				}}>Add Color</button>

				<br/>
				Colors:
				{colors.map((color, index)=>{
					return (
						<div key={index} style={{color: color}}>
							{color}
						</div>
					)
				})}

				<div className={`random-text-${color}`}>
					Some Random Text
				</div>


				{/* <br/>
				{blogs.map((blog, index)=>{
					return (
						<div key={index}>
							<p>Title: {blog.title}</p>
							<p>Author: {blog.author}</p>
						</div>
					)
				})}

				<button onClick={()=>{
					const newBlog = {
						...initialBlogs[0],
						title: "My new blog",
						author: "James"
					}
					console.log(newBlog)
					const updatedBlogs = [ ...blogs, newBlog]
					setBlogs(updatedBlogs)
				}}>Add Blog</button> */}
      </header>
    </div>
  );
}

export default App;
