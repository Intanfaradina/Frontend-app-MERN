import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers= async() => {
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    }

    const deleteUser = async (id) =>{
        try{
            await axios.delete(`http://localhost:5000/users/delete/${id}`);
            getUsers();
        }catch (error){
            console.log(error);
        }
    }
    return ( 
        <div className="columns">
            <div className="column is-half">
                <Link to="add" className='button is-success'>Tambah Data</Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>NIM</th>
                            <th>Kelas</th>
                            <th>Semester</th>
                            <th>Jenis Kelamin</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.nim}</td>
                                <td>{user.kelas}</td>
                                <td>{user.semester}</td>
                                <td>{user.jeniskelamin}</td>
                                <td>{user.alamat}</td>
                                <td>
                                    <Link to={`edit/${user._id}`} className='button is-info is-small'>Edit</Link>
                                    <button onClick={() => deleteUser(user._id)} className='button is-danger is-small'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList