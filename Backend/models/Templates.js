const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TemplatesSchema = new Schema({
  templateImage: String,
  templateURL: String,
});

const Templates = mongoose.model("Templates", TemplatesSchema);

// const Templates = mongoose.model("Templates", TemplatesSchema, "Templates");
module.exports = Templates;
