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
Router.get('/listings', (req,res, next) => {
  const sql = `SELECT * FROM listings WHERE category_id=?`

  conn.query(sql, [req.query.catId], (error, results, fields) => {
    res.json(results)
  })
})


//grabs all category listing data
Router.get('/listings/results', (req, res, next) => {
  const sql = `SELECT listings.id, listings.listing_name 
  FROM categories
  LEFT JOIN listings ON listings.category_id = categories.id AND categories.parent_id = ?
  WHERE listing_name IS NOT NULL;  `



  conn.query(sql, [req.query.catId], (error, results, fields) => {
    
    res.json(results)
  })

  console.log(results)
})



Router.post('/listings', (req, res, next) => {
  const sql = `
  INSERT INTO listings (listing_name, category_id, cover_photo) 
  VALUES (?, ?, ?)`

  const values = [req.body.listingName, req.body.catId, req.body.coverPhoto]

  conn.query(sql, values, (err, results, fields) => {
    console.log(results)
    res.json({message: 'listing added'})
  })
})

 
module.exports = Router