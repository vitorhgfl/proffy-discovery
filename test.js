const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue ={
        name: "Vitor Hugo", 
        avatar: "https://avatars.githubusercontent.com/u/44691047?s=400&u=40bc0f8d43a7456e0f2f8051aef3faf18f767ae0&v=4", 
        whatsapp: "11993678727", 
        bio: "Apenas um teste."
    }

    classValue = {
        subject: "Química", 
        cost: "20"
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220   
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220   
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM  proffys")
    //console.log(selectedProffys)

    //Consultar as classes de um determinado professor
    //e trazer junto os dados dele
    const selectClassAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassAndProffys)

    //O horário que a pessoa trabalha, por exemplo é das 8h - 18h
    //Horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)


})