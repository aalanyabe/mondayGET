

const { getConnection, sql } = require("../database/connection")
const { queries } = require("../database/query")

const getTicketByID = async (id) => {
    try {
        const pool = await getConnection()
        return await pool.request()
            .input("idTicket", sql.VarChar, id)
            .query(queries.findTicketById)
    } catch (error) {
        console.log("error en getByid ", error)
    }
}

const updateTicket = async (idTicket, updateTicket) => {
    try {
    
        const pool = await getConnection()
        return await pool.request()
            .input("idTicket", sql.VarChar, idTicket)
            .input("status", sql.VarChar, updateTicket.status)
            .input("category", sql.VarChar, updateTicket.category)
            .input("createdDate", sql.VarChar, updateTicket.createdDate)
            .input("createdTime", sql.VarChar, updateTicket.createdTime)
            .input("closedTime", sql.DateTime, updateTicket.closedTime)
            .input("agentName", sql.VarChar, updateTicket.agent)
            .input("classification", sql.VarChar, updateTicket.classification)
            .input("methodofPayment", sql.VarChar, updateTicket.methodPayment)
            .input("storeName", sql.VarChar, updateTicket.store)
            .query(queries.updateById)

    } catch (error) {
        console.log("error en updated", error)
    }
}

const createNewTicket = async (newTicket) => {
    try {
        const responseGetTBY = await getTicketByID(newTicket.ticketNumber)
        const ticket = await newTicket.ticketNumber

        const pool = await getConnection()
        if (!responseGetTBY.recordset || responseGetTBY.rowsAffected[0] === 0) {
            return await pool.request()
                .input("idTicket", sql.VarChar, newTicket.ticketNumber)
                .input("ticketNumber", sql.VarChar, newTicket.ticketNumber)
                .input("status", sql.VarChar, newTicket.status)
                .input("subject", sql.VarChar, newTicket.subject)
                .input("createdDate", sql.VarChar, updateTicket.createdDate)
                .input("createdTime", sql.VarChar, updateTicket.createdTime)
                .input("category", sql.VarChar, newTicket.category)
                .input("closedTime", sql.DateTime, newTicket.closedTime)
                .input("agentName", sql.VarChar, newTicket.agent)
                .input("storeName", sql.VarChar, newTicket.store)
                .input("webUrl", sql.VarChar, newTicket.url)
                .input("classification", sql.VarChar, newTicket.classification)
                .input("methodofPayment", sql.VarChar, newTicket.methodPayment)
                .input("area", sql.VarChar, newTicket.area)
                .query(queries.createNewTicket)
        } else {
            const responseUpdateCBI = await updateTicket(newTicket.ticketNumber, newTicket)
            console.log("updated existing tickets")
        }
    } catch (error) {
        console.log("error en el create new ticket ", error)
    }
}

module.exports = { createNewTicket }