var submit_ans1 = click;

function click () {

  var ans1 = ".container {\ndisplay: flex;\njustify-content: center;\n}";

  var Ans1 = document.getElementById('ans1').value;

  if (ans1 == Ans1) 
  {
    Swal.fire('Correct Answer!','You Earned +25 Exp Points!','success');
    submit_ans1 = clicked;
  }

  else 
  {
    Swal.fire({icon: 'error', title: 'Oops...', text: 'It seems that something is missing on your code. Make sure to double check before Submitting your Answers.'})
  }

  function clicked() {
    Swal.fire({ title: '<strong>You Already Finished This Exercise.</strong>', icon: 'info'})
  }

}