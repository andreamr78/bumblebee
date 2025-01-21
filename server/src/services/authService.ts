import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

// Define the AuthService class
class AuthService {
  // Define the signUp method
  async signUp(username: string, email: string, password: string) {
    // Hash the password from the request
    const hashedPassword = await this.hashPassword(password);
    // Create a new user with the hashed password
    const newUser = await User.create({ username, email, password: hashedPassword });
    return newUser;
  }

  // Define the login method
  async login(email: string, password: string) {
    try {
      // Find a user with the given email
      const user = await User.findOne({ where: { email } });

      // If no user is found or the password is incorrect, throw an error
      if (!user || !(await this.comparePasswords(password, user.password))) {
        throw new Error('Invalid credentials');
      }

      // If the user is found and the password is correct, generate a token
      const parsedId = String(user.id);
      const token = this.generateToken(parsedId);

      return { user, token };

    } catch (error) {  
      // If an error occurs, throw an error with a message
      if (error instanceof Error) {
        throw new Error(`Login failed: ${error.message}`);
      } else {
        throw new Error('Login failed: An unknown error occurred');
      }
    }
  }

  // Define the hashPassword method
  private async hashPassword(password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  // Define the comparePasswords method
  private async comparePasswords(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  // Define the generateToken method
  private generateToken(userId: string) {
    const secret = process.env.JWT_SECRET;

    // If the JWT_SECRET environment variable is not set, throw an error
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set.');
    }

    // Generate a token with the user ID and a 1-hour expiration
    return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
  }

}

export default new AuthService();