// dynamic components - {}

function Hello(){

  let myName = 'Japjot Singh';
  let number = 7
  let fullName = () =>{
    return 'Japjot Singh Nanda';
  }


  return <h3>Message No: {number} - Hello this is {fullName()} </h3>
}

export default Hello;

