import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const EditUser = () => {
const [name, setName] = useState("");
const [nim, setNim] = useState("");
const [kelas, setKelas] = useState("");
const [semester, setSemester] = useState("");
const [jeniskelamin, setJenisKelamin] = useState("Laki-Laki");
const [alamat, setAlamat] = useState("");
const navigate = useNavigate();
const {id} = useParams();

useEffect(() =>{
    getUserById();
}, []);

const getUserById = async() => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setNim(response.data.nim);
    setKelas(response.data.kelas);
    setSemester(response.data.semester);
    setJenisKelamin(response.data.jeniskelamin);
    setAlamat(response.data.alamat);

}

const updateUser = async(e) => {
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:5000/users/update/${id}`,{
            name,
            nim,
            kelas,
            semester,
            jeniskelamin,
            alamat
        });
        navigate("/");
    }catch (error){
        console.log(error);
    }
}

  return (
    <div className="columns">
        <div className="column is-half">
            <form onSubmit={updateUser}>
                <div className="field">
                    <label className='label'>Name</label>
                    <div className="control">
                        <input type="text" className='input' value={name} onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Nim</label>
                    <div className="control">
                        <input type="number" className='input'  value={nim} onChange={(e) => setNim(e.target.value)} placeholder='nim' />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Kelas</label>
                    <div className="control">
                        <input type="text" className='input'  value={kelas} onChange={(e) => setKelas(e.target.value)} placeholder='kelas' />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Semester</label>
                    <div className="control">
                        <input type="number" className='input'  value={semester} onChange={(e) => setSemester(e.target.value)} placeholder='semester' />
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Jenis Kelamin</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select  value={jeniskelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className='label'>Alamat</label>
                    <div className="control">
                        <input type="text" className='input'  value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder='alamat' />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button type='submit' className='button is-primary'>Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser
