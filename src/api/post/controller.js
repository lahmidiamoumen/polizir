import { success, notFound, authorOrAdmin } from '../../services/response/'
const ObjectID = require("mongodb").ObjectID

import { Post } from '.'
import { resolve } from 'bluebird'

export const create = ({ user, bodymen: { body } }, res, next) => {
  if(body.endAt) {
    body.endAt.setUTCHours(23,59,59,999);
  }
  Post.create({ ...body, createdBy: user })
    .then((post) => post.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ user, query: {id}, querymen: { query, select, cursor } }, res, next) =>
{ const post = id && ObjectID.isValid(id)? Post.find(query, select, cursor).where('createdBy').equals(id) : Post.find(query, select, cursor)
  Post.count(query)
    .then(count => 
      post
      .populate('createdBy')
      .then((posts) => ({
        count,
        rows: posts.map((post) => post.view(user))
      }))
    )
    .then(success(res))
    .catch(next)
}

export const voteOn = ({ user, bodymen: { body } }, res, next) =>{
  // Post.findById();
  console.log(body.postId);
  // console.log(body.votedOn);
  console.log(user);

  let voters = { userid: user._id, votedOn: body.votedOn };
  let foundIndex;
  let foundVoteCountIndex;

  Post.findById(body.postId)
    .populate('createdBy')
    .then(notFound(res))
    .then((post) => {
      console.log(post)
      if (post) { 
        foundIndex = post.voters.findIndex(x => x.userid == String(user._id));
        if (foundIndex === -1) {
          post.voters.push(voters);
          foundVoteCountIndex = post.porpostions.findIndex(x => x._id == body.votedOn);
          post.porpostions[foundVoteCountIndex].voteCount += 1;
          post.save();
          return post.view(user);
        } else {
          res.status(401).json({
            message: 'You can vote once only'
          })
          return null;
        }
      } else {
        // res.status(401).json({
        //   message: 'A problem has been accured'
        // })
        return null
      }
    })
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Post.findById(params.id)
    .populate('createdBy')
    .then(notFound(res))
    .then((post) => post ? post.view() : null)
    .then(success(res))  
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Post.findById(params.id)
    .populate('createdBy')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((post) => post ? Object.assign(post, body).save() : null)
    .then((post) => post ? post.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Post.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((post) => post ? post.remove() : null)
    .then(success(res, 204))
    .catch(next)
