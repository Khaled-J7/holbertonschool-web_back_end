export default function createReportObject(employeesList) {
    const dict = { ...employeesList };
    const getNumberOfDepartments = () => Object.keys(dict).length;
  
    return { allEmployees: dict, getNumberOfDepartments };
  }