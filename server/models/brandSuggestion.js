const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  name: String,
  logo: String,
  website: String,
  category: String,
  globalBrand: String,
  reason: String,
  portfolio: String,
  certifications: String,
  approved: { type: Boolean, default: false }
});

module.exports = mongoose.model("BrandSuggestion", suggestionSchema);