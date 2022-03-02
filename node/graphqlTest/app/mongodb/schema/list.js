//mongodb/schema/list.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ListSchema = new Schema({
  title: String,
  desc: String,
  date: String,
  id: String,
  checked: Boolean,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

ListSchema.pre('save', function (next) {// 每次保存之前都插入更新时间，创建时插入创建时间
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }
  next()
})
mongoose.model('List', ListSchema)