const express = require('express');
const router = express.Router();
const axios = require("axios");


router.get("/", (req, res, next) => {
  const recipesApi = {
  baseURL: `http://www.recipepuppy.com/api`
  }
  let recipe = [];
  let allRecipes = [];
  for (let i = 1; i <= 50; i++) {
    allRecipes.push(axios.get(`?p=${i}`, recipesApi));
  }
  Promise.all(allRecipes)
  .then(value => {
    for (let i = 0; i < value.length; i++) {
        recipe = [...recipe, ...value[i].data.results];
        
      }
      res.json(recipe);
    })
    .catch(error => res.json(error));
  });
  

module.exports = router;