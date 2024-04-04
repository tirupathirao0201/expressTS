import jwt from 'jsonwebtoken'
import constats from '../common/constants'
class JwtService {
  generateJwtToken(payload: any) {
    const token = jwt.sign(payload, constats.jwtSecretKey)
    return token
  }

  verifyJwtToken(token: string) {
    const payload = jwt.verify(token, constats.jwtSecretKey)
    return payload
  }
}

export default JwtService
