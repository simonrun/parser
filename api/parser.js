// api/parser.js
const Mercury = require('@postlight/mercury-parser');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: 'Missing ?url=' });
    return;
  }

  try {
    const result = await Mercury.parse(url, { contentType: 'text' });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
