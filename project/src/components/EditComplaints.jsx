import React from 'react'

import { motion } from "framer-motion"

import { styles } from '../styles';


import { fadeIn,textVariant } from '../utils/motion'


export default function EditComplaints({handleEditSubmit,SelectedEditData}) {
    return(
        <>
        <div>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Edit Complaint</h2>
            </motion.div>
        </div>
        <br/>
        <br/>
        <div className="bg-black-100 p-8 rounded-2xl flex items-center flex-wrap justify-around">
            <div>
                <br/>
                <br/>
                <form onSubmit={(e) => handleEditSubmit(e,SelectedEditData.complaint_id)}>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Case Category</span>
                    <select defaultValue={SelectedEditData.category} type="text" name="category" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'>
                        <option></option>
                        <option id="case">Domestic Violence</option>
                        <option id="case">Family Violence</option>
                        <option id="case">Sexual Violence and Harassment</option>
                        <option id="case">Non physical form of abuse</option>
                    </select>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Date & Time of Incident</span>
                        <input defaultValue={SelectedEditData.date_time} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' type="datetime-local" name="date_time"></input>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Location of Incident</span>
                        <input defaultValue={SelectedEditData.location} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' name="location" type="text" placeholder="Coimbatore"></input>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Description</span>
                        <textarea defaultValue={SelectedEditData.description} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' name="description" cols="100" rows="30"></textarea>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Evidence Format</span>
                        <textarea defaultValue={SelectedEditData.evi_format} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' name="evi_format"  cols="50" rows="8" placeholder="pdf, mp3, mp4 etc.."></textarea>
                    </label>
                    <br/><br/>
                    <label className='flex flex-col'><span className='text-white font-medium mb-4 text-[22px]'>Upload ( i.e. Evidence )</span>
                    <   input defaultValue={SelectedEditData.evidence} type="file" name="evidence" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
                    </label>
                    <br/><br/>
                    <button type="submit" class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[18px]">EDIT</button>
                    <br/><br/>
                 </form>
            </div>
        </div>
        </>
    )
}