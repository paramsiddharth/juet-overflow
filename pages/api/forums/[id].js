import { all, allThreads } from '../../../data/forums';

export default async function forumId(req, res) {
  const { id } = req.query;
  res.json({
    forum: all.find(i => i.id === id),
    threads: allThreads[id]
  });
}