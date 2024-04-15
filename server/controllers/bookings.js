exports.getAdmin = (req, res, next) => {
  // return an array of posts
  res.status(200).json({
    posts: [
      {
        title: "admin",
        content: "admin@123",
      },
    ],
  });
};
