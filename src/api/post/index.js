import { Router } from 'express'
import { middleware as query, Schema } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy, voteOn } from './controller'
import { schema ,votedOn , postId } from './model'
import Post from './model'
export  {Post , schema }

const schemaQuery = new Schema({
  topics: {
    type: [String],
  },
  keyWord: {
    type: [String],
  }
});

const router = new Router()
const { title, desc, porpostions, endAt, voters,  abstract, topics, keyWord} = schema.tree

/**
 * @api {post} /posts Create post
 * @apiName CreatePost
 * @apiGroup Post
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam title Post's title.
 * @apiParam desc Post's desc.
 * @apiParam porpostions Post's porpostions.
 * @apiParam endAt Post's endAt.
 * @apiParam voters Post's voters.
 * @apiSuccess {Object} post Post's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Post not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ title, desc, porpostions, endAt, abstract, topics, keyWord }),
  create)

router.post('/vote',
  token({ required: true }),
  body({ postId, votedOn }),
  voteOn)

/**
 * @api {get} /posts Retrieve posts
 * @apiName RetrievePosts
 * @apiGroup Post
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of posts.
 * @apiSuccess {Object[]} rows List of posts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(schemaQuery),
  index)

/**
 * @api {get} /posts/:id Retrieve post
 * @apiName RetrievePost
 * @apiGroup Post
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} post Post's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Post not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /posts/:id Update post
 * @apiName UpdatePost
 * @apiGroup Post
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam title Post's title.
 * @apiParam desc Post's desc.
 * @apiParam porpostions Post's porpostions.
 * @apiParam endAt Post's endAt.
 * @apiParam voters Post's voters.
 * @apiSuccess {Object} post Post's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Post not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ title, desc, porpostions, endAt, voters }),
  update)

/**
 * @api {delete} /posts/:id Delete post
 * @apiName DeletePost
 * @apiGroup Post
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Post not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
