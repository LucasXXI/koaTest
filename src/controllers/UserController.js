let users = [
  {
    name: "Lucas",
    age: "19",
    email: "lucas@gmail.com",
  },
  {
    name: "Rodrigo",
    age: "19",
    email: "rodrigo@gmail.com",
  },
  {
    name: "Pedro",
    age: "19",
    email: "pedro@gmail.com",
  },
  {
    name: "Gabriel",
    age: "19",
    email: "gabriel@gmail.com",
  },
  {
    name: "Matheus",
    age: "20",
    email: "matheus@gmail.com"
  }
];

export const getUsers = async ({ request, response }) => {
  const { page, quantity } = request.query;

  try {
    if (page || quantity) {
      if (page && quantity) {
        if (page > 0 && quantity > 0 && quantity <= users.length) {
          const usersArray = users.reduce((result, item, index) => {
            const quantityIndex = Math.floor(index / quantity);
            console.log(quantityIndex);

            if (!result[quantityIndex]) {
              result[quantityIndex] = []; // start a new page
            }
            result[quantityIndex].push(item);

            return result;
          }, []);

          response.status = 200;
          response.body = { users: usersArray[page - 1] };
        } else {
          response.status = 200;
          response.body = { users };
        }
      } else {
        response.status = 400;
        response.body = { error: "Missing one of params!" };
      }
    } else {
      response.status = 200;
      response.body = { users };
    }
  } catch (error) {
    response.status = 400;
    response.body = { error: "Couldn't find user in array." };
  }
};

export const getUser = async ({ request, response }) => {
  const { id } = request.params;

  try {
    if (users && id < users.length) {
      response.body = { user: users[id] };
    } else {
      throw new Error("Non existent index.");
      // response.status = 400;
      // response.body = { error: "Non existent Index" };
    }
  } catch (error) {
    response.status = 400;
    response.body = { error: error.message };
  }
};

export const createUser = async ({ request, response }) => {
  users.push(request.body);
  response.body = { users };
};

export const deleteUser = async ({ request, response }) => {
  const { id } = request.params;

  try {
    if (users && id < users.length) {
      users.splice(id, 1);
      response.body = { users };
    } else {
      response.status = 400;
      response.body = { error: "Non existent Index" };
    }
  } catch (error) {
    response.status = 400;
    response.body = { error: "Couldn't find user in array." };
  }
};

export const updateUser = async ({ request, response }) => {
  const { id } = request.params;
  const { body } = request;
  // const bitu = ['name', 'age', 'email']
  try {
    if (users && id < users.length) {
      for (let [key, value] of Object.entries(body)) {
        if (Object.keys(users[id]).includes(key)) {
          users[id][key] = value;
        }
      }

      response.body = { user: users[id] };
    } else {
      response.status = 400;
      response.body = { error: "Non existent Index" };
    }
  } catch (error) {
    response.status = 400;
    response.body = { error: "Couldn't find user in array." };
  }
};

//PARA AMANHA!!
//add logica p/ page ou quantity IGUAL a 0
//melhor logica de paginacao no geral
//consertar throw new error

