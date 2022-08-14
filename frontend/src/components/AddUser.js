import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AddUser = () => {
const [name, setName] = useState("");
const [nim, setNim] = useState("");
const [kelas, setKelas] = useState("");
const [semester, setSemester] = useState("");
const [jeniskelamin, setJenisKelamin] = useState("Laki-Laki");
const [alamat, setAlamat] = useState("");
const navigate = useNavigate();
const saveUser = async(e) => {
    e.preventDefault();
    try{
        await axios.post('http://localhost:5000/users',{
            name,
            nim,
            kelas,
            semester,
            jeniskelamin,
            alamat
        });
        navigate("/")
    }catch (error){
        console.log(error);
    }
}

  return (
    <div className="columns">
        <div className="column is-half">
            <form onSubmit={saveUser}>
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
                        <button type='submit' className='button is-success'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser
