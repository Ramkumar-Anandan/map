const state =document.getElementById("state");
const button =document.getElementsByClassName("button");

const mapFill=document.getElementById("map-fill");
const mapEmpty=document.getElementById("map-empty");
const showMap=document.getElementById("show-map");

var staticGK=[
    {
      state:"Andhra Pradesh",
      number:1 ,
    capital:"Amaravati",
    governor:"Shri Biswa Bhusan Harichandan",
    cheifMinister:"Shri YS Jagan Mohan Reddy"
    },
    {
      state:"Arunachal Pradesh",
      number:2 ,
    capital:"Itanagar",
    governor:"Brig. (Dr.) B. D. Mishra (Retd.)",
    cheifMinister:"Shri Pema Khandu"
    },
    {
      state:"Assam",
      number:3 ,
    capital:"Dispur",
    governor:"Prof. Jagdish Mukhi",
    cheifMinister:"Shri Sarbananda Sonowal"
    },
    {
      state:"Bihar",
      number:4 ,
    capital:"Patna" ,
    governor: "Shri Phagu Chauhan",
    cheifMinister:"Shri Nitish Kumar"
    },
    {
      state:"Chhattisgarh",
      number:5 ,
    capital:"Raipur"  ,
    governor:"Sushri Anusuiya Uikey",
    cheifMinister:"Shri Bhupesh Baghel"
    },
    {
      state:"Goa",
      number:6 ,
    capital:"Panaji" ,
    governor: "Shri Bhagat Singh Koshyari",
    cheifMinister:"Shri Pramod Sawant"
    },
    {
      state:"Gujarat",
      number:7 ,
    capital:"Gandhinagar",
    governor:  "Shri Acharya Dev Vrat",
    cheifMinister:"Shri Vijaybhai R. Rupani"
    },
    {
      state:"Haryana",
      number:8 ,
    capital:"Chandigarh"  ,
    governor:"Shri Satyadeo Narain Arya",
    cheifMinister:"Shri Manohar Lal"
    },
    {
      state:"Himachal Pradesh",
      number:9 ,
    capital:"Shimla"  ,
    governor:"Shri Bandaru Dattatraya",
    cheifMinister:"Shri Jairam Thakur"
    },
    {
      state:"Jharkhand",
      number:10,
    capital:"Ranchi"  ,
    governor:"Shrimati Droupadi Murmu",
    cheifMinister:"Shri Hemant Soren"
    },
    {
      state:"Karnataka",
      number: 11,
    capital:"Bengaluru" ,
    governor: "Shri Vajubhai Vala",
    cheifMinister:"Sri B. S. Yediyurappa"
    },
    {
      state:"Kerala",
      number:12 ,
    capital:"Thiruvananthapuram"  ,
    governor:"Shri Arif Mohammed Khan",
    cheifMinister:"Shri Pinarayi Vijayan"
    },
    {
      state:"Madhya Pradesh",
      number:13 ,
    capital:"Bhopal"  ,
    governor:"Smt. Anandiben Patel",
    cheifMinister:"Shri Shivraj Singh Chouhan"
    },
    {
      state:"Maharashtra",
      number:14 ,
    capital:"Mumbai"  ,
    governor:"Shri Bhagat Singh Koshyari",
    cheifMinister:"Shri Uddhav Thackeray"
    },
    {
      state:"Manipur",
      number:15 ,
    capital:"Imphal"  ,
    governor:"Dr. Najma Heptulla",
    cheifMinister:"Shri N. Biren Singh"
    },
    {
      state:"Meghalaya",
      number:16 ,
    capital:"Shillong" ,
    governor: "Shri Satya Pal Malik",
    cheifMinister:"Shri Conrad Kongkal Sangma"
    },
    {
      state:"Mizoram",
      number:17 ,
    capital:"Aizawl"  ,
    governor:"Shri P.S. Sreedharan Pillai",
    cheifMinister:"Shri Pu Zoramthanga"
    },
    {
      state:"Nagaland",
      number:18 ,
    capital:"Kohima"  ,
    governor:"Shri R. N. Ravi",
    cheifMinister:"Shri Neiphiu Rio"
    },
    {
      state:"Odisha",
      number:19 ,
    capital:"Bhubaneswar" ,
    governor: "Prof. Ganeshi Lal",
    cheifMinister:"Shri Naveen Patnaik"
    },
    {
      state:"Punjab",
      number:20 ,
    capital:"Chandigarh" ,
    governor: "Shri V.P. Singh Badnore",
    cheifMinister:"Shri Capt. Amarinder Singh"
    },
    {
      state:"Rajasthan",
      number:21 ,
    capital:"Jaipur"  ,
    governor:"Shri Kalraj Mishra",
    cheifMinister:"Shri Ashok Gehlot"
    },
    {
      state:"Sikkim",
      number: 22,
    capital:"Gangtok"  ,
    governor:"Shri Ganga Prasad",
    cheifMinister:"Shri PS Golay"
    },
    {state:"Tamil Nadu",
    number:23 ,
    capital:"Chennai",
    governor:"Shri Banwarilal Purohit",
    cheifMinister:"Thiru Edappadi K. Palaniswami"
    },
    {
      state:"Telangana",
      number:24 ,
    capital:"Hyderabad"  ,
    governor:"Dr. Tamilisai Soundararajan",
    cheifMinister:"Shri K Chandrasekhar Rao"
    },
    {
      state:"Tripura",
      number:25 ,
    capital:"Agartala"  ,
    governor:"Shri Ramesh Bais",
    cheifMinister:"Shri Biplab Kumar Deb"
    },
    {
      state:"Uttar Pradesh",
      number:26 ,
    capital:"Lucknow"  ,
    governor:"Smt. Anandiben Patel",
    cheifMinister:"Shri Yogi Aditya Nath"
    },
    {
      state:"Uttarakhand",
      number:27 ,
    capital:"Dehradun (Winter) Gairsain (Summer)" ,
    governor: "Smt. Baby Rani Maurya",
    cheifMinister:"Shri Trivendra Singh Rawat"
    },
    {
      state:"West Bengal",
      number:28 ,
    capital:"Kolkata"  ,
    governor:"Shri Jagdeep Dhankhar",
    cheifMinister:"Km. Mamata Banerjee"
    }
]


randomise();
function randomise(){
    var i = Math.round(Math.random() * 28);
state.innerHTML=staticGK[i].state;

for(let j=0;j<28;j++){

    button[j].onclick=()=>{
        if (j==i){
            button[j].style.backgroundColor="green";
            randomise ();

        }else{
            button[j].style.backgroundColor="red";
        }
    }

}
}

var mapStatus="off";
showMap.onclick=()=>{
    if(mapStatus==="off"){
        mapEmpty.style.display="none";
    mapFill.style.display="block";
    mapStatus="on";
showMap.style.backgroundColor="green";
    }else{
        mapEmpty.style.display="block";
        mapFill.style.display="none";
        mapStatus="off";
    showMap.style.backgroundColor="grey";

    }
   
}






