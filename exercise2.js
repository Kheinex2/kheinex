var submit_ans2 = click;

function click () {

  var ans2 = "<p>Smartphone</p>";

  var Ans2 = document.getElementById('ans2').value;

  if (ans2 == Ans2) 
  {
    Swal.fire('Correct Answer!','You Earned +15 Exp Points!','success');
    submit_ans2 = clicked;
  }

  else 
  {
    Swal.fire({icon: 'error', title: 'Oops...', text: 'It seems that something is missing on your code. Make sure to double check before Submitting your Answers.'})
  }

  function clicked() {
    Swal.fire({ title: '<strong>You Already Finished This Exercise.</strong>', icon: 'info'})
  }

}