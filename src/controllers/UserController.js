let users = [{
        name: "Lucas",
        age: "19",
        email: "lucas@gmail.com"
    }]
;

export const getUsers = async (ctx) => {
    ctx.body = users;
    ctx.status = 200;
}

export const getUser = async (ctx) => {
    const { id } = ctx.params;

    try {
        if (users && id < users.length){
            ctx.body = users[id]
        }
        else {
            ctx.response.status = 400;
            ctx.body = { error: "Non existent Index" }
        }
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = { error: "Couldn't find user in array." }
    }
}
export const createUser =  async (ctx) => {
    users.push(ctx.request.body); 
    ctx.body = users;
};

export const deleteUser = async (ctx) => {
    const { id } = ctx.params;
    try {
        if (users && id < users.length){
            users.splice(id, 1);
            ctx.body = users
        }
        else {
            ctx.response.status = 400;
            ctx.body = { error: "Non existent Index" }
        }
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = { error: "Couldn't find user in array." }
    }
    
};

export const updateUser = async (ctx) => {
    const { id } = ctx.params;
    const { name, age, email } = ctx.request.body

    try {
        if (users && id < users.length){
            if (name){
                users[id].name = name
            }
            if (age){
                users[id].age = age
            }
            if (email){
                users[id].email = email
            }

            ctx.body = users[id]
        }
        else {
            ctx.response.status = 400;
            ctx.body = { error: "Non existent Index" }
        }
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = { error: "Couldn't find user in array." }
    }
}
