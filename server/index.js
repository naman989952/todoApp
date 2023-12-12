const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

// Error handler middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// app.post("/createUser", async (req, res) => {
//   try {
//     const user = await UserModel.create(req.body);
//     console.log("User created:", user);
//     res.status(201).json(user);
//   } catch (err) {
//     console.error("Error creating user:", err);
//     res.status(500).json({ error: "Failed to create user" });
//   }
// });

// app.get("/", async (req, res) => {
//   try {
//     const users = await UserModel.find({});
//     console.log("Users retrieved:", users);
//     res.status(200).json(users);
//   } catch (err) {
//     console.error("Error retrieving users:", err);
//     res.status(500).json({ error: "Failed to retrieve users" });
//   }
// });

// app.get("/getUser/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await UserModel.findById(id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (err) {
//     console.error("Error retrieving user:", err);
//     res.status(500).json({ error: "Failed to retrieve user" });
//   }
// });

// app.put("/updateUser/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedUser = await UserModel.findByIdAndUpdate(id, {
//       name: req.body.name,
//       email: req.body.email,
//       age: req.body.age,
//     });
//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     console.error("Error updating user:", err);
//     res.status(500).json({ error: "Failed to update user" });
//   }
// });

// app.delete("/deleteUser/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const deletedUser = await UserModel.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting user:", err);
//     res.status(500).json({ error: "Failed to delete user" });
//   }
// });

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((user) => {
      console.log("User created:", user);
      res.status(201).json(user);
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Failed to create user" });
    });
});

app.get("/", (req, res) => {
  UserModel.find({})
    // (req.body)
    .then((user) => {
      console.log("User created:", user);
      res.status(201).json(user);
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      res.status(500).json({ error: "Failed to create user" });
    });
  console.log("server is Running");
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json({ message: "User deleted successfully" });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
