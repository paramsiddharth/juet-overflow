import { all, allThreads } from '../../../../data/forums';

export default async function forumId(req, res) {
  const { id: forumID, threadID } = req.query;
  res.json({
    ...allThreads[forumID].find(t => t.id == threadID),
    forumName: all.find(a => a.id === forumID).name
  });
}