import {Request, Response} from 'express-serve-static-core'
import {User} from '../entities/user.entity'
import {dataSource} from '../config/db.config'
import JwtService from '../services/jwt.service'
export async function getUsers(_: Request, res: Response) {
  const queryRunner = dataSource.createQueryRunner()
  try {
    await queryRunner.connect()
    const users = await queryRunner.manager.find(User)
    res.status(200).json({status: 'success', data: users})
  } catch (error) {
    console.log("errro",error)
    res.status(404).json({status: 'failure', errorMsg: 'Unable to fetch users'})
  } finally {
    await queryRunner.release()
  }
}

export async function getUserById(req: Request<{id: string}>, res: Response) {
  const queryRunner = dataSource.createQueryRunner()
  try {
    await queryRunner.connect()
    const user = await queryRunner.manager.findOneByOrFail(User, {userId: req.params.id})
    res.status(200).json({status: 'success', data: user})
  } catch (error) {
    console.log("errro",error)
    res.status(404).json({status: 'failure', errorMsg: `User not found with id ${req.params.id}`})
  } finally {
    await queryRunner.release()
  }
}

export async function createUser(req: Request, res: Response) {
  const queryRunner = dataSource.createQueryRunner()
  try {
    if (req.body) {
      await queryRunner.connect()
      const userRecord = await queryRunner.manager.insert(User, {...req.body})
      if (userRecord) {
        res
          .status(201)
          .json({status: 'SUCCESS', data: {userId: userRecord?.identifiers[0]?.userId}})
      }
    }
  } catch (error) {
    console.log('error', error)
    res.status(400).json({status: 'FAILURE', errorMsg: 'Unable to create user'})
  } finally {
    await queryRunner.release()
  }
}

export async function loginUser(req: Request<{}, {}, {email: string}>, res: Response) {
  const queryRunner = dataSource.createQueryRunner()
  try {
    await queryRunner.connect()
    const user = await queryRunner.manager.findOneByOrFail(User, {email: req.body.email})
    const jwtService = new JwtService()
    if (user) {
      res.status(200).json({
        status: 'SUCCESS',
        data: {
          token: jwtService.generateJwtToken(JSON.stringify(user)),
        },
      })
    }
  } catch (error) {
    console.log('error', error)
    res.status(401).json({status:'FAILURE', errorMsg:`User not found with id ${req.body.email}`})
  }
}
