const queries = {
    
    findContactById: 'SELECT * FROM contacts WHERE idContact = @idContact',
    addNewContact: 'INSERT INTO contacts (idContact,firstName,lastName,email,storeNro) VALUES(@idContact,@firstName, @lastName, @email,@storeNro)',
    updateContactById: 'update contacts set firstName =@firstName , lastName = @lastName , email=@email ,storeNro=@storeNro where idContact =@idContact',
// Tickets----------------------------------------------------------------

    findTicketById: 'SELECT * FROM tickets WHERE idTicket = @idTicket',

    updateById: "UPDATE tickets SET status = @status, category = @category,createdTime = CAST(CONCAT(@createdDate,' ',@createdTime) as datetime), closedTime = @closedTime, agentName = @agentName, classification  = @classification, methodofPayment  = @methodofPayment, storeName = @storeName  WHERE idTicket = @idTicket",

    
    createNewTicket: "INSERT INTO tickets (idTicket,ticketNumber,status,subject,createdTime,category,closedTime,storeName,agentName,webUrl,classification,methodofPayment,area) VALUES(@idTicket,@ticketNumber,@status,@subject,CAST(CONCAT(@createdDate,' ',@createdTime) as datetime),@category,@closedTime,@storeName,@agentName,@webUrl,@classification,@methodofPayment,@area)",

// ----------------------------------------------------------------

    findAgentById: 'SELECT * FROM agents WHERE idAgent = @idAgent',
    updateByIdAgent : 'UPDATE agents SET status = @status',
    addNewAgent: 'INSERT INTO agents (idAgent,zuid,firstName,lastName,emailId,status) VALUES(@idAgent,@zuid,@firstName,@lastName,@emailId,@status)'
    
}

module.exports = {queries}