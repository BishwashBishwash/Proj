let myStorage = window.localStorage;

// add item to local storage
const getcustomerDetails = () => {
    let DetailsInterface = myStorage.getItem('cust-details');
    return JSON.parse(DetailsInterface);
};

// get item from local storage
const setcustomerDetails = (DetailsInterface) => {
    myStorage.setItem('cust-details', JSON.stringify(DetailsInterface));
};

// delete item from local storage
const deletecustomerDetails = () => {
    myStorage.removeItem('cust-details');
};

export default{
    getcustomerDetails,setcustomerDetails,deletecustomerDetails
}