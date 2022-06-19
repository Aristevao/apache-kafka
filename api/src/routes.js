import express from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = express.Router();

routes.post('/certifications', async (req, res) => {
  const message = {
    user: { id: 1, name: 'Barry Allen' },
    course: 'Kafka with Node.js',
    grade: 10,
  };

  // Call microservice
  await req.producer.send({
    topic: 'issue-certificate',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(message) },
      { value: JSON.stringify({ ...message, user: { ...message.user, name: 'Bruce Wayne' } }) },
    ],
  })

  return res.json({ ok: true });
});

export default routes;
