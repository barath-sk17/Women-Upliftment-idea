import axios from "axios";

export function getcomplaint(){
    return axios.get('http://127.0.0.1:8000/complaint/')
    .then(res => {
        return res.data
    })}

    
export function addcomplaint(complaint){
return axios.post('http://127.0.0.1:8000/complaint/',
{
    category: complaint.target.category.value,
    date_time: complaint.target.date_time.value,
    location: complaint.target.location.value,
    description: complaint.target.description.value,
    evi_format: complaint.target.evi_format.value,
    evidence: complaint.target.evidence.files,
})
.then(res => {
    return res.data
})}

//export function editcomplaint(id, complaint){
//    return axios.put('http://127.0.0.1:8000/complaint/'+id+'/',
//    {
//        category: complaint.target.category.value,
//        date_time: complaint.target.date_time.value,
//        location: complaint.target.location.value,
//        description: complaint.target.description.value,
//        evi_format: complaint.target.evi_format.value,
//        evidence: complaint.target.evidence.files,
//    })
//    .then(res => {
//        return res.data
//    })}

//export function deletecomplaint(id){
//    return axios.delete('http://127.0.0.1:8000/complaint/'+id+'/')
//    .then(res => {
//         return res.data
//    })}


export function getsuggestion(){
    return axios.get('http://127.0.0.1:8000/suggestion/')
    .then(res => {
        return res.data
    })
}

export function addsuggestion(suggestion){
    return axios.post('http://127.0.0.1:8000/suggestion/',
    {
        suggestion_id: null,
        first_name: suggestion.first_name.value,
        last_name: suggestion.last_name.value,
        suggestion: suggestion.suggestion.value,
    })
    .then(res => {
        return res.data
    })
}

export function editsuggestion(id, suggestion){
    return axios.put('http://127.0.0.1:8000/suggestion/'+id+'/',
    {
        first_name: suggestion.first_name.value,
        last_name: suggestion.last_name.value,
        suggestion: suggestion.suggestion.value,
    })
    .then(res => {
        return res.data
    })
}

export function deletesuggestion(id){
    return axios.delete('http://127.0.0.1:8000/suggestion/'+id+'/')
    .then(res => {
        return res.data
    })
}