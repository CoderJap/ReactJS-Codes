function TodoItem2(){

  let todoName = 'Go to College';
  let todoDate = '4/10/2023';


  return (

    <div className="items-conatiner">

    <div className="row my-2">
          <div className="col-6">
            {todoName}
            </div>
          <div className="col-4">
           {todoDate}
            </div>
          <div className="col-2">
            <button class="btn btn-danger">Delete </button>
            
            </div>

        </div>
        </div>
  );


}

export default TodoItem2;
