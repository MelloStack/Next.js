// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST"){

    const con = mysql.createConnection({  
      port: 3308,
      host: "localhost",  
      user: "root",  
      password: "password",
      database: "root"
    });  


    con.connect(function(err) {  
      if (err) throw err;  
      console.log("Connected!");  

      con.query("SELECT * FROM accounts", function (err, result, fields) {
        if (err) throw err; 

          const NameRaw = JSON.stringify(result)
          const CleanName = JSON.parse(NameRaw)

          if(req.body.name === CleanName[0].name && req.body.password === CleanName[0].password){
              res.status(200).json({isCorrect: true})
          }else{
            res.status(404).json({isCorrect: false})
          } 
      })        
    });  

    console.log(req.body.name)
  }
}