import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
  try {

    // get the token from the frontend header
    const token  = req.headers.authorization.split(' ')[1];

    if (token) {
      // With decodedToken we know which user is logged in
      const decodedToken = jwt.verify(token, '1234');

      // This is how we get the userId from the decodedToken
      req.userId = decodedToken?.id;
    }

    // When an action is triggered we check something and then we do something next.
    next();

  } catch (error) {
    console.log(error);
  }
}

export default authentication;