const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./todoListModel");
const withAuth = require("./middleware");
const cors = require("cors");
const dotenv = require("dotenv");
const Picture = require("./photoModel");
const bcrypt = require("bcrypt");

const saltRounds = 10;
dotenv.config();

const app = express();

const validate = data => {
  let errors = {};
  if (data.status === "") errors.status = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/User",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${process.env.MONGODB_URL}`);
    }
  }
);

app.get("/api/home", function(req, res) {
  res.send("");
});

app.get("/api/secret", withAuth, function(req, res) {
  User.findOne({ email: req.email }, function(err, record) {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else {
      const { password, ...user } = record.toObject();

      res.send(`${user.firstName} ${user.lastName}`);
    }
  });
});

app.get("/api/picture", withAuth, function(req, res) {
  Picture.find({ email: req.email }, function(err, record) {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else {
      res.json({ record });
    }
  });
});

app.post("/api/status", withAuth, function(req, res) {
  const { errors, isValid } = validate(req.body);

  if (isValid) {
    User.findOneAndUpdate(
      { email: req.email },
      { status: req.body.status },
      function(err, record) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again"
          });
        } else {
          res.status(200).json({ message: "done" });
        }
      }
    );
  } else {
    res.status(400).json({ errors });
  }
});

app.get("/api/status", withAuth, function(req, res) {
  User.findOne({ email: req.email }, function(err, record) {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else {
      const { password, ...user } = record.toObject();
      res.send(user.status);
    }
  });
});

app.post("/api/avatar", withAuth, function(req, res) {
  User.findOneAndUpdate(
    { email: req.email },
    { avatar: req.body.data },
    function(err, record) {
      if (err) {
        res.status(500).json({
          error: "Internal error please try again"
        });
      } else {
        res.status(200).json({ message: "done" });
      }
    }
  );
});

app.get("/api/avatar", withAuth, function(req, res) {
  User.findOne({ email: req.email }, function(err, record) {
    if (err) {
      res.status(500).json({ error: "Internal error please try again later" });
    } else {
      const { password, ...user } = record.toObject();
      res.json({ user });
    }
  });
});

app.delete("/api/picture/:id", (req, res) => {
  Picture.findByIdAndRemove({ _id: req.params.id }, (err, r) => {
    if (err) {
      res.status(500).json({ error: "Can/t delete" });
    } else {
      res.send("deleted");
    }
  });
});

app.post("/api/picture", withAuth, function(req, res) {
  const picture = new Picture({
    email: req.email,
    image: req.body.data
  });
  picture.save(function(err) {
    if (err) {
      res.status(500).send("error while posting");
    } else {
      res.status(200).json({ message: "done" });
    }
  });
});

app.post("/api/register", function(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    password
  });
  user.save(function(err) {
    if (err) {
      res.status(500).send("Error registering new user please try again.");
    } else {
      const payload = { email };
      const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: "1h"
      });

      res.status(200).json({
        token
      });
    }
  });
});

app.post("/api/authenticate", function(req, res) {
  const { email, password } = req.body;

  User.findOne({ email }, function(err, user) {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again"
      });
    } else if (!user) {
      res.status(404).json({
        error: "Incorrect email or password"
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again"
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password"
          });
        } else {
          const payload = { email };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "1h"
          });

          res.status(200).json({
            token
          });
        }
      });
    }
  });
});

app.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../", "public", "index.html"));
// });

app.listen(process.env.PORT || 8080);
