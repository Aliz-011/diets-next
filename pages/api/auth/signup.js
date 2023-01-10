import bcryptjs from 'bcryptjs';
import db from '../../../utils/db';
import User from '../../../models/User';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const { username, firstName, lastName, email, password } = req.body;

  if (
    !username ||
    !firstName ||
    !lastName ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(422).json({ message: 'User exists already!' });
    await db.disconnect();
    return;
  }

  const newUser = new User({
    firstName,
    lastName,
    email,
    username,
    password: bcryptjs.hashSync(password, 10),
  });

  const user = await newUser.save();
  await db.disconnect();
  return res.status(201).json({ ...user, message: 'user created' });
}

export default handler;
