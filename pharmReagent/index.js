const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const path = require("path");

const reagentPath = path.join(__dirname, "pharmReagent.json");

const getAll = async () => {
  const readList = await fs.readFile(reagentPath);
  const parseList = JSON.parse(readList);
  return parseList;
};

const addReagent = async (name, description) => {
  const newReagent = {
    id: nanoid(),
    name,
    description,
  };
  const data = await getAll();
  data.push(newReagent);
  await fs.writeFile(reagentPath, JSON.stringify(data, null, 2));

  return newReagent;
};

const getById = async (id) => {
  const data = await getAll();
  const index = data.findIndex((item) => item.id=== id);
return data[index]  
};

module.exports = {
  getAll,
  addReagent,
  getById,
};
