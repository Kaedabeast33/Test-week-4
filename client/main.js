

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneContainer = document.getElementById("divContainer")
const addallbtn = document.getElementById("getallbtn")

const fortuneForm=document.querySelector("form")


const newDiv = document.createElement("div")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = ()=>{
    axios.get("http://localhost:4000/api/fortune/")
        .then(res=>{
            alert(res.data)
        })
    }
const getAll = ()=>{
    axios.get("http://localhost:4000/api/")
    .then(res=>{
       
        array=res.data
       
        fortuneContainer.innerHTML = "" 
       array.forEach(fortune =>{
            const fortuneCard = makeFortuneCard(fortune)
            fortuneContainer.innerHTML+=fortuneCard
        

       
        })
    })
    
}  
const addFortune =(body)=>{
    axios.post("http://localhost:4000/api/fortune/",body);
   
        axios.get("http://localhost:4000/api/")
        .then(res=>{
            console.log(res.data)
            array=res.data
            fortuneContainer.innerHTML = ""
           array.forEach(fortune =>{
                const fortuneCard = makeFortuneCard(fortune)
                fortuneContainer.innerHTML+=fortuneCard
            
    
           
            })
        })
        
    }  
    const deleteFortune = (id)=>{
        axios.delete(`http://localhost:4000/api/${id}`)
        .then(res=>{
            console.log(res.data)
            array=res.data
            fortuneContainer.innerHTML = ""
           array.forEach(fortune =>{
                const fortuneCard = makeFortuneCard(fortune)
                fortuneContainer.innerHTML+=fortuneCard
            
    
           
            })
        }) 
    }



function makeFortuneCard(fortune){
    let {id, fortuneStr}=fortune
    fortuneCard = `
    <div class = "card">   
        <h2>${id}<h2>
        <h3>${fortuneStr}<h3>
        <p>Kaeden's Fortune cookie<p>
        <button onclick="deleteFortune(${fortune.id})">delete</button>
    </div>`
  
    return fortuneCard
}
function formInput(e){
    e.preventDefault()
    const newFortune = document.querySelector("#addFortuneInput")
    
    let bodyObj ={
        fortuneStr:newFortune.value
    }
    addFortune(bodyObj)
    newFortune.value=''
}

fortuneForm.addEventListener("submit",formInput)
addallbtn.addEventListener('click', getAll)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener("click",getFortune)