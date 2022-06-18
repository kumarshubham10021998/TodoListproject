import React from 'react'
import './Todolist.css'
const Todolist = () => {
    const [tags, setTags] = React.useState([]);

    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            //props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return (
        <div >
            <div className='color'><h3 className='date' style={{
                width: "73px",
                height: "84px",
               
                
            }}>12</h3><span className='date1' style={{
                width: "20px",
                height: "30px",
                position:"absolute",
                top:"40px",left:"100px"
            }}>th</span>
            </div>
            <p className='jan'>Jan, 2021</p>
            <p className='status'>Status</p>
            <div className='task'>Total Tasks:</div><span className='count'>12</span>
            <div className='task1'>Completed Tasks: </div><span className='count1'>5</span>
            <p className='task2'>Pending Tasks: </p><span className='count2'>7</span>

            <div className="tags-input card-body card dropstart shadow-lg p-3 mb-5 bg-white rounded " style={{ width: "50%", position: "absolute", left: "350px", top: "50px" }}>
                <p>My <span style={{ color: " #E33E5A" }}>To</span>-do List</p>
                <input
                    type="text"
                    onKeyUp={event => addTags(event)}
                    placeholder="search tasks here..."
                    style={{
                        width: "290px",
                        height: " 34px",
                    }}
                />
                <input
                    type="text"
                    onKeyUp={event => addTags(event)}
                    placeholder="Add new task"
                    style={{
                        width: "180px",
                        height: " 18px", position: "absolute", left: "50px", top: "100px"
                    }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{ position: "absolute", left: "15px", top: "100px" }} >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>

                <h5 className='dropdown-toggle' style={{ paddingTop: "35px" }}>Lorem ipsum</h5>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <span>{tag}</span>

                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onKeyUp={event => addTags(event)}
                    placeholder="Add new task"
                    style={{
                        width: "180px",
                        height: " 18px", position: "absolute", left: "50px", top: "160px"
                    }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{ position: "absolute", top: "160px", left: "15px" }} >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <h5 className='dropdown-toggle' style={{ paddingTop: "20px", paddingLeft: "30px" }}>Lorem ipsum</h5>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <span>{tag}</span>

                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onKeyUp={event => addTags(event)}
                    placeholder="Add new task"
                    style={{
                        width: "180px",
                        height: " 18px", position: "absolute", left: "70px", top: "230px"
                    }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{ position: "absolute", top: "230px", left: "45px" }} >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <h5 className='dropdown-toggle' style={{ paddingTop: "15px", paddingLeft: "40px" }}>Lorem ipsum</h5>
                <h5 className='dropdown-toggle' style={{ paddingTop: "15px", paddingLeft: "40px" }}>Lorem ipsum</h5>
                <h5 className='dropdown-toggle' style={{ paddingTop: "20px", paddingLeft: "40px" }}>Lorem ipsum</h5>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <span>{tag}</span>

                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onKeyUp={event => addTags(event)}
                    placeholder="Add new task"
                    style={{
                        width: "180px",
                        height: " 18px", position: "absolute", left: "80px", top: "370px"
                    }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{ position: "absolute", top: "370px", left: "55px" }} >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>

                <h5 className='dropdown-toggle' style={{ paddingTop: "20px", paddingLeft: "50px" }}>Lorem ipsum</h5>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <span>{tag}</span>

                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onKeyUp={event => addTags(event)}
                    placeholder="Add new task"
                    style={{
                        width: "180px",
                        height: " 18px", position: "absolute", left: "90px", top: "430px"
                    }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{ position: "absolute", top: "430px", left: "65px" }} >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </div>
        </div>

    )
}

export default Todolist
