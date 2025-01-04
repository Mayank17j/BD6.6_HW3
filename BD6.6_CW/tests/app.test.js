const request = require('supertest');
const { getAllEmployees, getEmployeesById } = require('../controllers');
const { app } = require('../index.js');
const http = require('http');

jest.mock('../controllers', () => ({
  ...jest.requireActual('../controllers'),
  getAllEmployees: jest.fn(),
  getEmployeesById: jest.fn(),
}));

let server;
beforeAll(async () => {
  server = http.createServer(app);
  server.listen(3001);
});
afterAll(async () => {
  server.close();
});

//TEST FUNCIONS
describe('Controller function tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //Exercise 5: Mock the Get All Employees Function
  it('should return all employees', () => {
    let mockedEmployees = [
      {
        id: 1,
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        departmentId: 1,
        roleId: 1,
      },
    ];
    getAllEmployees.mockReturnValue(mockedEmployees);
    let result = getAllEmployees();
    expect(result).toEqual(mockedEmployees);
    expect(result.length).toBe(1);
  });
});

//TEST API
describe('API Endpoint tests', () => {
  //Exercise 3: Test Retrieve All Employees
  it('GET /employees should get all employees', async () => {
    const res = await request(server).get('/employees');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      employees: [
        {
          id: 1,
          name: 'Rahul Sharma',
          email: 'rahul.sharma@example.com',
          departmentId: 1,
          roleId: 1,
        },
      ],
    });
    expect(res.body.employees.length).toBe(1);
  });

  //Exercise 4: Test Retrieve Employee by ID
  it('GET /employees/details/:it should get all employee by Id', async () => {
    getEmployeesById.mockReturnValue({
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      departmentId: 1,
      roleId: 1,
    });
    const res = await request(server).get('/employees/details/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      employee: {
        id: 1,
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        departmentId: 1,
        roleId: 1,
      },
    });
  });
});
