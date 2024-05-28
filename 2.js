const student ={
    khabib:{
        name:"Khabib Shrestha ",
        address:{
            permanent:"Dagestan, Russia",
            temporary:"Mid-Baneshwor,Kathmandu"
        },
        number:{
            mobile:"9860504398",
            home:"5576844"
        },
        email:"khabib@gmail.com"
    },

    manny:{
        name:"Manny Poudel",
        address:{
            permanent:"General Santos, Philippines",
            temporary:null
        },
        number:{
            mobile:"9801244554",
            home:null
        },
        email:"manny@yahoo.com"
    },

    connor:{
        name:"Connor Maharjan",
        address:{
            permanent:null,
            temporary:"Khasibazar, Kathmandu"
        },
        number:{
            mobile:null,
            home:"5564990 "
        },
        email:"connor@hotmail.com"
    },

    buakaw: {
        name:"Buakaw Rajbanshi ",
        address:{
            permanent:"Pattaya, Thailand",
            temporary:"Pepsicola, Bhaktapur"
        },
        number:{
            mobile:" 9841546433",
            home:"4428767"
        },
        email:"r.buakaw@gmai.com"
    },

    paddy: {
        name:"Paddy Pahadi",
        address:{
            permanent:undefined,
            temporary:"Mid-Thimi, Bhaktapur"
        },
        number:{
            mobile:null,
            home:"4456477"
        },
        email:"paddy@protonmail.ch"
    },
};


console.log("Khabib’s home phone number", student.khabib.number.home);
console.log("Manny’s Permanent address", student.manny.address.permanent);
console.log("Connor’s Temporary address", student.connor.address.temporary);
console.log("Buakaw’s Temporary address", student.buakaw.address.temporary);
console.log("Buakaw’s email", student.buakaw.email);
console.log("Paddy’s permanent address", student.paddy.address.permanent);
console.log("Connor’s Permanent", student.connor.address.permanent); 
