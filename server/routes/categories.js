const express = require('express')
const config = require('config')
const Router = express.Router()
const conn = require('../utils/db')

//grabs all categories and subcategories
Router.get('/categories', (req, res, next) => {
  const sql = `SELECT * FROM categories `


  let data = {
      title: 'Home'
  }

  conn.query(sql, (error, results, fields) => {

    data.categories = results.filter(r => r.parent_id === null)
    data.categories.map(e => {
      let subcat = results.filter(s => {
       if(s.parent_id === e.id) {
         return s
       } 
      }) 

      e.subcat = subcat

    })
    console.log(data)
    res.json(data)
  })
})

//grabs subcategory listing data
Router.get('/listings/:id', (req,res, next) => {
  const sql = `SELECT listings.id, listings.listing_name, listings.cover_photo, listings.category_id, categories.name, categories.slug
  FROM listings 
  LEFT JOIN categories 
  ON listings.category_id = categories.id  WHERE listings.id=?OR categories.id = ?`

  conn.query(sql, [req.params.id, req.params.id], (error, results, fields) => {
    res.json(results)
  })
})


//grabs all category listing data
Router.get('/all/results/:id', (req, res, next) => {
  const sql = `SELECT categories.parent_id, listings.listing_name,listings.cover_photo,listings.id
  FROM listings
  LEFT JOIN categories ON listings.category_id = categories.id
  WHERE parent_id = ?
`



  conn.query(sql, [req.params.id], (err, results, fields) => {
    res.json(results)
  })
})

//grabs single category

Router.get('/listing/:id', (req, res, next) => {
  const sql = `SELECT listings.listing_name,listings.cover_photo, listings.id
  FROM listings
 WHERE listings.id= ?`

 conn.query(sql, [req.params.id], (error, results, fields) => {
  res.json(results)
 })
})



Router.post('/listings', (req, res, next) => {
    const sql = `
    INSERT INTO listings (listing_name, category_id, cover_photo) 
    VALUES (?, ?, ?)`

    const values = [req.body.name, req.body.id, req.body.cover_photo]

    conn.query(sql, values, (error, results, fields) => {
      console.log(results)
      res.json({message: 'listing added'})
    })
})

 
module.exports = Router