import mongoose, { Schema } from 'mongoose'
//const encrypt = require('mongoose-encryption');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;

const required =  {
  type: String,
  required: true
}

export const postId = { type: Schema.ObjectId, required: true };
export const votedOn = {type: Schema.ObjectId, required: true};

const requiredUser =  {
  type: Schema.ObjectId,
  ref: 'User',
  required: true
}

const postSchema = new Schema({
  createdBy: requiredUser,
  title: { type: String},
  picture: { type: String},
  desc: { type: String},
  profession: { type: String},
  abstract: { type: String},
  topics: {type: String},
  fileList: [{type: String}],
  keyWord: [{type: String}],
  porpostions: [{
    text: {type: String},
    voteCount: {type: Number, default: 0}
  }],
  endAt: { type: Date },
  voters: [{
    userid : requiredUser ,
    votedate : { type: Date, default: Date.now },
    votedOn: requiredUser
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})


const encKey = process.env.B_32BYTE_BASE64_STRING;
//var sigKey = process.env.B_64BYTE_BASE64_STRING;

//postSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['voters'] });
postSchema.plugin(mongooseFieldEncryption, { fields: ["voters"], secret: encKey });

postSchema.plugin(require('mongoose-keywords'), {paths: ['title', 'desc','keyWord']});



postSchema.methods = {
  view (user) {
    if(this.voters === undefined) 
      this.voters = []
    const view = {
      // simple view
      id: this.id,
      createdBy: this.createdBy.view(user),
      title: this.title,
      desc: this.desc,
      abstract: this.abstract,
      porpostions: this.porpostions,
      endAt: this.endAt,
      voteCount: this.voters.length,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    if(!user && !user?._id)
     return view;
    
    const uid = user._id
    let voteIndex = this.voters !== [] ? this.voters.findIndex(x => String(x.userid) === String(uid)) : -1;
    //console.log(user.following !== [] &&  String(this.createdBy._id) === String(user.following[0]))
    return uid ? {
      ...view,
      follow: String(uid) !== String(this.createdBy._id) && (user.following !== [] && user.following.findIndex(x => String(x) === String(this.createdBy._id)) > -1 ? false: true),
      //voters: this.voters.map(({dropAttr1, dropAttr2, ...keepAttrs}) => keepAttrs),
      voted: voteIndex !== -1 ? this.voters[voteIndex] : undefined 
    } : view
  }
}

const model = mongoose.model('Post', postSchema)

export const schema = model.schema
export default model
