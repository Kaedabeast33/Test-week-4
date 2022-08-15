let baseid=6;
const fortune = [
    {id:1, 
    fortuneStr:"if you give your Dama to a Llama then everything will be ok"
  },
    {id:2, 
    fortuneStr:"You will have a good day today"
  }, 
    {id: 3, 
    fortuneStr:"You will have a bad day today"
  },
    {id:4,
    fortuneStr:"You will make your mamma proud in 10 years"
  },
    {id:5,
    fortuneStr:"Someone left your fridge open"}]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {

        randomfortuneindex = Math.floor(Math.random() * fortune.length)
        randomFortune = fortune[randomfortuneindex].fortuneStr
        console.log()
        res.status(200).send(randomFortune)
    },
    getAll:(req,res)=>{
      
        res.status(200).send(fortune)
    },
    addFortune:(req,res)=>{
      
     
      let {fortuneStr} = req.body;
      fortune.push({id:baseid,
      fortuneStr:fortuneStr});
      baseid++;
   
      res.status(200).send(req.body)
    },
    deleteFortune:(req,res)=>{
      let theFortuneId = req.params
      fortune.splice(theFortuneId,1)
      res.status(200).send(fortune)
    }
}