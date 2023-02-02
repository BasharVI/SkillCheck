const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      status: {
        type: String,
        enum: ["in-progress", "completed"],
        default: "in-progress",
      },
    },
  ],
  certificates: [
    {
      certificateId: {
        type: Schema.Types.ObjectId,
        ref: "Certificate",
      },
      dateIssued: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
