const Contract = require("../models/ContractModel")

const CreateOrder = async(Data)=>{
    const createData = await Contract.create(Data)
    return createData
}

const getContractDetailByOrderNo = async(OrderNo)=>{
    const data = await Contract.findOne({
        OrderNo: OrderNo
    })
    return data
}

const putAContract = async(filter,update)=>{
    const data = await Contract.findOneAndUpdate(filter,update)
    return data
}

const getListContract = async()=>{
    const data = await Contract.find()
    return data
}

const getContractFilter = async(a)=>{
    const data = await Contract.find(a)
    return data
}

const getContractbyCustomerID = async(CustomerID)=>{
    const data = await Contract.find({
        CustomerID: CustomerID
    })
    return data
}

const contractAggregate = async(a)=>{
   const data =  Contract.aggregate(a)
   return data
}

module.exports= {
    CreateOrder,
    getContractDetailByOrderNo,
    putAContract,
    getListContract,
    getContractbyCustomerID,
    getContractFilter,
    contractAggregate
}