
const fromObject = document.querySelector('#fromData');
const startObject = document.querySelector('#startData');
const form = document.querySelector('#form');
const _data = document.querySelector("#myData")


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var dates = "";
    var res1 = "";
    var res2 = "";
    var ec2 = "";
    var RDS = "";
    const fromDate = fromObject.value;
    const toDate = startObject.value;


    fetch('./data.json')
        .then(response => response.json())
        .then(data => {





            data.forEach((object) => {

                if (dateFns.isWithinRange(new Date(object.date), new Date(fromDate), new Date(toDate))) {



                    document.querySelector('.ec2-conta').innerHTML += `     <div class="row ">
                        <div class="m-item orange">
                           ${dateFns.format(new Date(object.date), 'DD-MM-YYYY')}
                </div>
                        <div class="m-item">
                           ${object.EC2}
                </div>
                    </div>`


                    document.querySelector('.rds-conta').innerHTML += `     <div class="row">
                        <div class="m-item orange">
                           ${dateFns.format(new Date(object.date), 'DD-MM-YYYY')}
                </div>
                        <div class="m-item">
                           ${object.RDS}
                </div>
                    </div>`





                    // ec2+='<tr>';
                    // ec2+= '<td>' + dateFns.format(new Date(object.date), 'DD-MM-YYYY')  + '</td>';
                    //ec2+= '<td>' + object.EC2 + '</td>';
                    // ec2+='</tr>';

                    // RDS+='<tr>';
                    // RDS+= '<td>' + dateFns.format(new Date(object.date), 'DD-MM-YYYY') + '</td>';
                    // RDS+= '<td>' + object.RDS + '</td>';
                    // RDS+='</tr>';

                    // dates += dateFns.format(new Date(object.date), 'DD-MM-YYYY') + "\t";
                    // res1 += object.EC2 + "\t";
                    // res2 += object.RDS + "\t";


                    //  const myh1 = document.createElement('h1');
                    //  myh1.innerText = "Ec2:"+ object.EC2 + " " + "RDS:" +object.RDS;
                    //  document.getElementsByTagName('body')[0].appendChild(myh1);

                }


            })

            // console.log(res1);
            // document.getElementById("ec2-date").innerHTML = dates;
            // document.getElementById("ec2-data").innerHTML = res1;
            // document.getElementById("RDS-data").innerHTML = res2;
            // document.getElementById("RDS-date").innerHTML = dates;

            // $('#ec2-table').append(ec2);
            // $('#RDS-table').append(RDS);



        });






})


// function handleFormSubmit(){
//     alert("hey")
// }