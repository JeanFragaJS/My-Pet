const {PeopleServices} = require('../services')
const peopleServices = new PeopleServices('People')

class PeopleControllers {

  static async createPeople (req, res) {
    const shape = req.body
    try {
      const newData = await peopleServices.criar(shape)
      return res.status(201).json(newData) 
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async getAllPeople (req, res) {
      try{
        const allPeople =  await peopleServices.pegarTodos()
        return res.status(200).json(allPeople)
      }catch (err) {
        console.log(err.message)
        return res.status(500).json(err.message)
      }
  }

  static async getOnePeople (req, res) {
    const {peopleId} = req.params
    try{
      const onePeople = await peopleServices.pegarUm(Number(peopleId))
      return res.status(200).json(onePeople)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async resetPeople ( req, res) {
    const  { peopleId } =  req.params
    const infosBody = req.body
    try {
      const peopleUpdated=  await peopleServices.atualizarPeople(infosBody, Number(peopleId))
       return res.status(200).json(peopleUpdated)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async removePeople(req, res ) {
     const {peopleId} = req.params
     try{
          await peopleServices.deletar(Number(peopleId))
          res.status(204).json({message: `O Cliente de id  ${peopleId}  foi deletado com sucesso`})
     }catch (err) {
       console.log(err) 
       return res.status(500).json(err)
     }
}

}

module.exports = PeopleControllers 