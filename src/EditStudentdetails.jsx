// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom'

// function Editstudentdetails(props) {
//     const [getStudentDataById, setStudentDataById] = useState([])

//     const [editStudentDataById, latestEdit] = useState({ name:'', position: '', location: '', salary: '', email: '', password: '' })

//     const id = props.match.params.id
//     console.log(id)



//     useEffect(() => {
//         const getDataById = async () => {
//             try {
//                 const result = await axios.get(`http://localhost:7500/api/registration/${id}`)
//                 setStudentDataById(result.data)
//                 console.log(result.data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getDataById()
//     }, [])


//     const handleChange = ({ target }) => {
//         const { name, value } = target

//         const newData = Object.assign({}, getStudentDataById, { [name]: value });
//         setStudentDataById(newData);

//         const latestData = Object.assign({}, editStudentDataById, { [name]: value })
//         latestEdit(latestData)
//     }

//     const handleSubmit = async e => {
//         e.preventDefault();
//         console.warn(editStudentDataById)
//         const editDataById = async () => {
//             try {
//                 const response = await axios.put(`http://http://localhost:7500/api/registration/${id}`, editStudentDataById)
//                 latestEdit(response.data)
//                 console.warn(response.data)
//             } catch (error) {
//                 console.warn(error)
//             }
//         }
//         editDataById()
//     }
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-4'>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label htmlFor="name">Name</label>
//                             <input type="text" name='name' value={getStudentDataById.name} onChange={handleChange} className="form-control" id="name"></input>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="position">Position</label>
//                             <input type="text" name='position' value={getStudentDataById.position} onChange={handleChange} className="form-control" id="position"></input>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="location">Location</label>
//                             <input type="text" name='location' value={getStudentDataById.location} onChange={handleChange} className="form-control" id="location"></input>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="salary">Salary</label>
//                             <input type="number" name='salary' value={getStudentDataById.salary} onChange={handleChange} className="form-control" id="salary"></input>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" name='email' onChange={handleChange} value={getStudentDataById.email} className="form-control" id="email"></input>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password">Password</label>
//                             <input type="password" name='password' onChange={handleChange} value={getStudentDataById.password} className="form-control" id="password"></input>
//                         </div>
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default withRouter(Editstudentdetails)
