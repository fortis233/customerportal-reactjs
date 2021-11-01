import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8081/api/v1/customers";

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL,this.getTokenHeader());
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL, customer,this.getTokenHeader());
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId,this.getTokenHeader());
    }

    updateCustomer(customer, customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerId, customer,this.getTokenHeader());
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId,this.getTokenHeader());
    }

    getTokenHeader(){
        return {
            headers: {
              'Authorization': 'Bearer ' + sessionStorage.getItem("bearer_token")
            }
          };
        
    }
}

export default new CustomerService()

