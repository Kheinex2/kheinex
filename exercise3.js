var submit_ans3 = click;

function click () {

  var ans3 = "list.reverse()\nprint(list);";

  var Ans3 = document.getElementById('ans3').value;

  if (ans3 == Ans3) 
  {
    Swal.fire('Correct Answer!','You Earned +25 Exp Points!','success');
    submit_ans3 = clicked;
  }

  else 
  {
    Swal.fire({icon: 'error', title: 'Oops...', text: 'It seems that something is missing on your code. Make sure to double check before Submitting your Answers.'})
  }

  function clicked() {
    Swal.fire({ title: '<strong>You Already Finished This Exercise.</strong>', icon: 'info'})
  }

}