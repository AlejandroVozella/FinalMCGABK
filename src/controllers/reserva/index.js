const reservaEsquema = require ("../../models/reserva");

const getReservas = async (req,res)=>{
    try {
        const response = await reservaEsquema.find();
        return res.status(200).json ({
            data:response,
            error:false,
        });
    }catch (error){
        return res.status(400).json({
            error:true,
            message:"Reserva no Encontrada",
        });
    }
};

const getReservaById = async (req,res)=>{
    try{
        const response = await reservaEsquema.findOne({
            _id:req.params.reservaId,
        });

        if (!response || response.length===0){
            return res.status(404).json({
                error:true,
                message: "Reserva no Encontrada",
            });
        }
        return res.status(200).json({
            data:response,
            error:false,
        });
    }catch (error){
        return res.status(400).json({
            error:true,
            message:error
        });
    }
};

const addReserva = async (req, res) => {
    try {
      const reserva = new reservaEsquema(req.body);
      const newReserva = await reserva.save();
  
      return res.status(201).json({
        data: newReserva,
        error: false,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error,
      });
    }
  };

  const deleteReservaById = async (req, res) => {
    try {
      const response = await reservaEsquema.findOneAndRemove({
        _id: req.params.reservaId,
      });
      if (!response || response.length === 0) {
        return res.status(404).json({
          error: true,
          message: "Reserva No Encontrada",
        });
      }
      return res.status(202).json({
        data: response,
        error: false,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error,
      });
    }
  };

  const updateReservaById = async (req, res) => {
    console.log(req.params.id);
    try {
      const response = await reservaEsquema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!response) {
        return res.status(400).json({
          error: true,
          message: "No se Pudo Actualizar Reserva",
        });
      }
      return res.status(200).json({
        data: response,
        error: false,
        message: "Reserva atualizada con exito",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error,
      });
    }
  };


module.exports={
    getReservas,
    getReservaById,
    addReserva,
    deleteReservaById,
    updateReservaById
};