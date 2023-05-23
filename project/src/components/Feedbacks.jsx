import React, { useEffect, useState } from "react";
import { getcomplaint, addcomplaint} from "../services/ApiService";
//import { getcomplaint, addcomplaint, editcomplaint, deletecomplaint } from "../services/ApiService";
import { SectionWrapper } from "../hoc";

import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"

import { styles } from '../styles';
import { services } from '../constants';

import { fadeIn,textVariant } from '../utils/motion'
import AddComplaints from "./AddComplaints";
import EditComplaints from "./EditComplaints";


const Feedbacks = () => {

  const [complaints, setComplaints] = useState([])
  const [showAddComplaintForm, setShowAddComplaintForm] = useState(false)
  const [showEditComplaintForm, setShowEditComplaintForm] = useState(false)
  const [SelectedEditData, setSelectedEditData] = useState()

  useEffect(() => {
    let mount = true
    getcomplaint()
    .then(res => {console.log("res from api",res)
      setComplaints(res)
      return() => mount = false
    })
  },[])

const handleAddSubmit = (e) => {
  addcomplaint(e.target)
  .then(res => {
  setComplaints(res)
  })
}

const handleEditBtn = (complaint) => {
  setSelectedEditData(complaint)
  setShowEditComplaintForm(true)
  setShowAddComplaintForm(false)
}

const handleDeleteBtn = (id) => {
  deletecomplaint(id)
  .then(res => {
    setComplaints(complaints.filter(p=>p.patient_id !== id))
  })
}


const handleEditSubmit = (e,id) => {
  editcomplaint(id, e.target)
  .then(res => {
    setComplaints(res)
  })
}

  return(
    <>

      <div class="flex flex-col">
        
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Complaint List</h2>
        </motion.div>
        <br/>
        <br/>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="table-auto">
                <thead class="bg-black-100 p-8 rounded-2xl text-[22px]">
                  <tr>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Case Category</th>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Date & Time of Incident</th>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Location of Incident</th>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Description</th>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Evidence Format</th>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Uploaded File</th>
                    {/*
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Edit</th>
                    <th scope="col" class="whitespace-nowrap px-6 py-4 font-medium">Delete</th>*/}
                  </tr>
                </thead>
                <tbody className="text-[18px]">
                {complaints.map(complaint => {
                      return <tr key={complaint.complaint_id} class="bg-tertiary">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{complaint.category}</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{complaint.date_time}</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{complaint.location}</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{complaint.description}</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{complaint.evi_format}</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{complaint.evidence}</td>
                        {/*}
                        <td class="whitespace-nowrap px-6 py-4 font-medium"><button onClick={()=>handleEditBtn(complaint)} class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[18px]">Edit</button></td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium"><button onClick={()=>handleDeleteBtn(complaint.complaint_id)} class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[18px]">Delete</button></td>
                    */}</tr> 
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <button class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[22px]" onClick={()=>setShowAddComplaintForm(true)}>Add New Complaint</button>
      {showAddComplaintForm && <AddComplaints handleAddSubmit={handleAddSubmit}/>}
      {showEditComplaintForm && <EditComplaints handleEditSubmit={handleEditSubmit} SelectedEditData = {SelectedEditData}/>}
    </>
  )

}

export default SectionWrapper(Feedbacks,"feedbacks")