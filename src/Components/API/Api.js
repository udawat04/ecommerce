const API_URL = "https://jsonplaceholder.typicode.com";

export const submitForm=async(formData)=>{
    try{
        const response = await fetch(`${API_URL}/posts`,{
           method:"POST",
           body:JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1,
           }),
           headers:{
            'Content-type':'application/json;charset=UTF-8',
           },
        //    body:JSON.stringify(formData)
        });
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    }
   catch (error) {
    console.error('Error submitting form:', error);
    // throw error
    return { error: 'Failed to submit form' };
}
};