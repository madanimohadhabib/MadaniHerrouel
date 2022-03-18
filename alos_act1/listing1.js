{
    individuals:[
    '{{repeat(100)}}',
      {
      id: '{{index()}}',
      name: '{{firstName()}} ',
      surname: ' {{surname()}}',
      gender: '{{gender()}}',
      age: '{{integer(19, 50)}}',
      address:'{{street()}}, {{city()}},{{state()}},{{country()}}',
      email:'{{email()}}',
      phone: '+1 {{phone()}}',
      speciality: '{{random("Web developer","mobile developer","investors", "graphic designer", "database manager", "marketing")}}'
    }

   ]
   }