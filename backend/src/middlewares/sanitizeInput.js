import sanitizeHtml from 'sanitize-html';

export default (req, res, next) => {
  if (req.body.message) {
    req.body.message = sanitizeHtml(req.body.message, {
      allowedTags: [],
      allowedAttributes: {},
    });
  }
  next();
};
