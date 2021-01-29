console.clear();

// People dropping off a form(Action Creator)
const createPolicy = (name, amount) =>{
  return{
    //Action(a form in our analogy)
    type:"CREATE_POLICY",
    payload:{
      name:name,
      amount:amount
    }
  }
}

//Deleting a policy
const deletePolicy=(name) =>{
  return{
    type:"DELETE_POLICY",
    payload:{
      name,
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) =>{
  return {
    type:"CREATE_CLAIM",
    payload:{
      name:name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}

//Reducers(Departments)
//2 arguments
//if it is undefined we set a default array
const claimsHistory =(oldListOfClaims=[],action) =>{
 if(action.type==="CREATE_CLAIM"){
   //we care about this action(FORM!)
   //create a new array and adding a new element
   //we are not allowed to modify the existing data structure
   return [...oldListOfClaims, action.payload];
 }  
  //we don't care about the action(form)
  return oldListOfClaims;
}

const accounting =(bagOfMoney = 100, action)=>{
  if(action.type==="CREATE_CLAIM"){
    return bagOfMoney -action.payload.amountOfMoneyToCollect;
  }else if(action.type === "CREATE_POLICY"){
    return bagOfMoney +action.payload.amount;
  }
  
  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) =>{
  if(action.type === "CREATE_POLICY"){
    return [...listOfPolicies, action.payload.name]
  }else if(action.type ==="DELETE_POLICY")
    return listOfPolicies.filter(name => name !== action.payload.name)
  return listOfPolicies;
}

const {createStore, combineReducers} =Redux;

//wire up all the reducers
const ourDepartments = combineReducers({
  accounting:accounting,
  claimsHIstory: claimsHistory, 
  policies: policies
})

//represents the entire redux application, contains all the data of the application
const store = createStore(ourDepartments);

const action = createPolicy("Alex", 20 );
// console.log(action)

store.dispatch(action);
store.dispatch(createPolicy("Jim",30));
store.dispatch(createPolicy("Bob",40));
console.log(store.getState());

store.dispatch(createClaim("Alex", 120))
store.dispatch(createClaim("Jim",40))

store.dispatch(deletePolicy("Bob"))

console.log(store.getState());
