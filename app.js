const pharmReagent = require("./pharmReagent");


const invokeAction = async ( {id, action, name, description}) => {
  switch (action) {
    case "list":
      console.log("hello");
      const allReagent = await pharmReagent.getAll();
      return console.log(allReagent);

    case "add":
      console.log(name);
      const addNewReagent = await pharmReagent.addReagent(name, description);

      return console.log(addNewReagent);

    case "getById":
      const findById = await pharmReagent.getById(id);
      return console.log(findById);

    default:
      break;
  }
};

// invokeAction({action:"list"})
// invokeAction({action:"add", name:"h2o", description : 'water'})
invokeAction({action:"getById",id: "RTsWkh5oBXFjjWsuqEI1I"})
