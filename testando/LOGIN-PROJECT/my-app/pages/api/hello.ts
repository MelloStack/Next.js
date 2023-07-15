// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'

const url = "http://localhost:3000/"

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
              res.json({isCorrect: true})
          }else{
            res.json({isCorrect: false})
          } 
      })        
    });  

    console.log(req.body.name)
  }
}