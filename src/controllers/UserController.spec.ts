import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from 'express';

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        deleteUser: jest.fn(),
        getAllUsers: jest.fn(() => [
            { id: 1, name: 'User 1', email: 'user1@example.com' },
            { id: 2, name: 'User 2', email: 'user2@example.com' }
        ])
    };

    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockReq = {
            body: {
                name: 'Duda',
                email: 'Duda@teste.com'
            }
        } as Request;
        const mockRes = makeMockResponse();
        
        userController.createUser(mockReq, mockRes);
        
        expect(mockRes.state.json).toMatchObject({ message: 'User created.' });
    });

    it('Deve retornar um erro se o usuário não informar um nome', () => {
        const mockReq = {
            body: {
                name: ''
            }
        } as Request;
        const mockRes = makeMockResponse();
        
        userController.createUser(mockReq, mockRes);
        
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Invalid name.' });
    });

    it('Deve retornar um erro se o usuário não informar um email', () => {
        const mockReq = {
            body: {
                name: 'djen',
                email: ''
            }
        } as Request;
        const mockRes = makeMockResponse();
        
        userController.createUser(mockReq, mockRes);
        
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Invalid email.' });
    });

    it('Deve deletar um usuário', () => {
        const mockReq = {
            body: {
                name: 'Joana',
                email: 'Joana@dio.com'
            }
        } as Request;
        const mockRes = makeMockResponse();
        
        userController.deleteUser(mockReq, mockRes);
        
        expect(mockRes.state.json).toMatchObject({ message: 'User deleted.' });
    });

    it('Deve retornar um erro se o usuário não informar um nome', () => {
        const mockReq = {
            body: {
                name: ''
            }
        } as Request;
        const mockRes = makeMockResponse();
        
        userController.deleteUser(mockReq, mockRes);
        
        expect(mockRes.state.json).toMatchObject({ message: 'Bad request: Invalid name.' });
    });

    it('Deve verificar se a função getAllUsers está sendo chamada e retornar os usuários', () => {
        const mockReq = {} as Request;
        const mockRes = makeMockResponse();
        
        userController.getAllUsers(mockReq, mockRes);
        
        expect(mockUserService.getAllUsers).toHaveBeenCalled(); 
        expect(mockRes.state.json).toMatchObject([
            { id: 1, name: 'User 1', email: 'user1@example.com' },
            { id: 2, name: 'User 2', email: 'user2@example.com' }
        ]);
    });
});
