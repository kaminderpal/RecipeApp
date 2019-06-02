const RecipeModel = require('../database/models/Recipe');

const resolvers = {
  Query: {
    getAllRecipes : async () => {
      try{
        return await RecipeModel.find({});
      }catch(err){
        throw err;
      };
    }
  },
  Mutation: {
    addRecipe : async (
      root,
      {
        name,
        category,
        description,
        instructions,
        username
      }
    ) => {
      const newRecipe = await new RecipeModel({
        name,
        category,
        description,
        instructions,
        username
      });
      return newRecipe.save().then((result) => {
        return result._doc;
      }).catch((err) => {
        throw err;
      });;
    }
  }
};

module.exports = resolvers;
