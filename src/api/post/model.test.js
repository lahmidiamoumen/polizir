import { Post } from '.'
import { User } from '../user'

let user, post

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  post = await Post.create({ createdBy: user, title: 'test', desc: 'test', porpostions: 'test', endAt: 'test', voters: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = post.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(post.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.title).toBe(post.title)
    expect(view.desc).toBe(post.desc)
    expect(view.porpostions).toBe(post.porpostions)
    expect(view.endAt).toBe(post.endAt)
    expect(view.voters).toBe(post.voters)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = post.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(post.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.title).toBe(post.title)
    expect(view.desc).toBe(post.desc)
    expect(view.porpostions).toBe(post.porpostions)
    expect(view.endAt).toBe(post.endAt)
    expect(view.voters).toBe(post.voters)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
