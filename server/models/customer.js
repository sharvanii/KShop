const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS customers (
    customer_id INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(255) NOT NULL UNIQUE,
    customer_email VARCHAR(255) NOT NULL UNIQUE,
    customer_password VARCHAR(255),
    customer_confirmpassword VARCHAR(255),
    CONSTRAINT customer_pk PRIMARY KEY(customer_id)
  )`;
  await con.query(sql);
}
createTable();

//function to get all customers
let getCustomers = async () => {
    const sql = `SELECT * FROM costumors`;
  return await con.query(sql);
};

async function getCustomers(user) {
    let sql;
    if(customer.customerId) {
      sql = `SELECT * FROM customers
        WHERE customer_id = ${customer.customerId}
      `;
    } else {
      sql = `SELECT * FROM customers
        WHERE username = "${customer.username}"
      `;
    }
    return await con.query(sql);
  }

  async function login(username, password) {
    const user = await userExists(username);
    if(!user[0]) throw Error('User not found')
    if(customer[0].customer_password !== password) throw Error("Password is incorrect");
  
    return user[0];
  }
  
  async function register(customer) {
    const u = customerExists(customer.username);
    if(u.length>0) throw Error("Username already exists");
  
    const sql = `INSERT INTO users (username, user_password)
      VALUES ("${customer.username}", "${customer.password}")
    `;
  
    const insert = await con.query(sql);
    const newCustomer = await getUser(customer);
    return newCustomer[0];
  }
  
  async function deleteCustomer(customerId) {
    const sql = `DELETE FROM customers
      WHERE customer_id = ${customerId}
    `;
    await con.query(sql);
   
  }
  
  async function customersExists(username) {
    const sql = `SELECT * FROM customers
      WHERE username = "${username}"
    `;
    return await con.query(sql);
  }
  
  async function editCustomer(customer) {
    const sql = `UPDATE customers SET
      username = "${user.userName}"
      WHERE user_id = ${user.userId}
    `;
    const update = await con.query(sql);
    const newUser = await getCustomers(user);
    return newUser[0];
  }
  
  
  module.exports = { getCustomers, login, register, deleteUser, editUser, getUser, createTable };
  