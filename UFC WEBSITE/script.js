let fighterSearch = document.querySelector("#fighter-search");
let fighterbtn = document.querySelector("#submit-fighter");
let fighterspopup = document.querySelector(".fighter-popup")
let fighterName = document.querySelector("#fightername");
let fighterDivision = document.querySelector("#fighterdivision");
let fighterRecord = document.querySelector("#fighterrecord");
let fighterImage = document.querySelector("#fighterimage");
let ClosePop = document.querySelector(".close-popup");






let LightweightFighter = [

    {
        name: "Ilia Topuria",
        division: "Lightweight",
        record: "17 - 1 - 0",
        image: "https://static.abc.es/media/deportes/2020/10/08/hs-kzYF--1248x698@abc.jpg"
    },

    {
        name: "Arman Tsarukyan",
        division: "Lightweight",
        record: "23 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3IWwI8Vq3pjNI0fu1zmNn3ayEKz5ETegIc13Md74LA&s=10"
    },

    {
        name: "Charles Oliveira",
        division: "Lightweight",
        record: "37 - 11 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2V7kymfDxCIsHm6s5xYB2xouFCupRHXbO8kAC7vC6A&s=10"
    },

    {
        name: " Max Holloway",
        division: "Lightweight",
        record: "27 - 9 - 0",
        image: ""
    },

    {
        name: "Paddy Pimblett",
        division: "Lightweight",
        record: "23 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LedsjKHnHnCiqjVgMVce0YiCNdBY4DVHAFrj3X8TYw&s"
    },

    {
        name: "Mateusz Gamrot",
        division: "Lightweight",
        record: "25 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95xEFpBvqYEhB-kmVmKxbV5N5AFJkvSiuvaI2kM192A&s=10"
    },

    {
        name: "Renato Moicano",
        division: "Lightweight",
        record: "21 - 7 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrYfnTOlSSoVchXNracXMB1NVYQAoOS_XHAtUDAsl8A&s=10"
    },

    {
        name: "Benoît Saint Denis",
        division: "Lightweight",
        record: "15 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFb12mqPZPkk1RpjwrqcfAUPzpB1cZsG_wJqOINLld9A&s=10"
    },

    {
        name: "Quillan Salkilld",
        division: "Lightweight",
        record: "12 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX85xbq5s8RkeBD-SPiTIiWWwU9PEwvg8z4PtScFDmjg&s=10"
    },

    {
        name: "Mauricio Ruffy",
        division: "Lightweight",
        record: "14 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_OpYo2huBJToQxCj8rRQ_DJg5IPNf1OzraaqBhB4lw&s"
    }
];


let featherweightFighter = [

    {
        name: "Movsar Evloev",
        division: "Featherweight",
        record: "20 - 0 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAwppqIe_FaI9x8FEvN3nYqHyhbhqedbP3NCPTjQN3A&s=10"
    },

    {
        name: "Diego Lopes",
        division: "Featherweight",
        record: "27 - 8 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYi5wTNgatcLUAIv6e9L3hJO6NDp-ULIBgE8Vsfc1SXg&s"
    },

    {
        name: "Lerone Murphy",
        division: "Featherweight",
        record: "17 - 0 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQZZh9b0PAGkx6IN2vw-FIYfm8WPuXEaxErvKUguBhQ&s=10"
    },

    {
        name: "Aljamain Sterling",
        division: "Featherweight",
        record: "25 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYnFTO_zn6Nmx0Ft8df2l1TXkBD7BFXzwj4MqYGSYkg&s=10"
    },

    {
        name: "Arnold Allen",
        division: "Featherweight",
        record: "20 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikP01tiXsXGkU3Bp_9-UVFhIanEdhHpoOHCatbqMniw&s"
    },

    {
        name: "Jean Silva",
        division: "Featherweight",
        record: "17 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZ-0kwxBMMLn2jB-ZH36hrqnLZ_M2SPu2OpC0GuK7Yw&s=10"
    },

    {
        name: "Pat Sabatini",
        division: "Featherweight",
        record: "19 - 6 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIbD_5P6zSSk6RoWIDXn8Ks-BeMai6L6f_YI4__ia1g&s=10"
    },

    {
        name: "Youssef Zalal",
        division: "Featherweight",
        record: "18 - 5 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAN14h4S_JgSYOeSnpVmKf0MDBTXsOOb9RVjDk55EQ8A&s=10"
    },

    {
        name: "Nathaniel Wood",
        division: "Featherweight",
        record: "23 - 6 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvkG1xb_4ZU6DdNamylMXRznd1DgKFK4LemUAaAQ66w&s=10"
    },

    {
        name: "Kevin Vallejos",
        division: "Featherweight",
        record: "17 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fGK9pWkstkv8CweDj2G2dEtfi744uqlzzHIOxBDLwQ&s=10"
    }
];


let bantamweightFighter = [

    {
        name: "Merab Dvalishvili",
        division: "bantamweight",
        record: "21 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9Yh_K1pzspdE7WvQ3lmkYqJCHPva78mQt1-VzZgYKw&s=10"
    },

    {
        name: "Umar Nurmagomedov",
        division: "bantamweight",
        record: "20 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBussC6tqwttqaR8VTiamNqYDpnjwFbx0au18raew_A&s=10"
    },

    {
        name: "Sean O'Malley",
        division: "bantamweight",
        record: "19 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRF2Ms6D2f8muzf2XzuufGL22dO-eostqsfOK2tTIIxg&s"
    },

    {
        name: "Mario Bautista",
        division: "bantamweight",
        record: "18 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8BVXHF_3Pt56jsM8-SZL6NVWu60k1jB52S6m1TIwSQ&s"
    },

    {
        name: "Cory Sandhagen",
        division: "bantamweight",
        record: "18 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ2wvgx_yyZmWbmZRJHVbn5xs8GuL6XGmzV3OpuEW1w&s=10"
    },

    {
        name: "Song Yadong",
        division: "bantamweight",
        record: "23 - 9 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHDx-ZOxrdtlO71TnX35fCCjhqT2-MJkF6rRYa13D3A&s=10"
    },

    {
        name: "David Martinez",
        division: "bantamweight",
        record: "14 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUZotsPSii4O0xhnGCdvQFRYHVXAZyBod2TsQAjm1eg&s=10"
    },

    {
        name: "Raoni Barcelos",
        division: "bantamweight",
        record: "22 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWaXmMHl-ZS6Ydl1_SjhGvoytiKujzEfMo-hCx69KXg&s"
    },

    {
        name: "Farid Basharat",
        division: "bantamweight",
        record: "15 - 0 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSztwQ8Hgso70O8AEMVUqWNOFjJY1wPswlm24ZSg9tw&s"
    },

    {
        name: "Marcus McGhee",
        division: "bantamweight",
        record: "13 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqs0Ww5u509gGUvwVH7XNq9BLEewwMyKMxrv5lxYlEw&s"
    }
];


let flyweightFighter = [

    {
        name: "Alexandre Pantoja",
        division: "flyweight",
        record: "30 - 6 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJU0ASqQkzC-1yAoV5lO6Fd6EKd2RMN0v9EACS-4vZcg&s=10"
    },

    {
        name: "Manel Kape",
        division: "flyweight",
        record: "21 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6p3G9u6_AdN_I03UzRkbxQjgCq7pHwTQ0yPVe3Qa-g&s=10"
    },

    {
        name: "Brandon Royval",
        division: "flyweight",
        record: "17 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CC8m2paiPmjt2orLCV66NjrLpJa3OKwUxVDOFvffpg&s"
    },

    {
        name: "Tatsuro Taira",
        division: "flyweight",
        record: "18 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlppNektdMyLB3XBtmt130R8ggEH9dL9_pSC08tki0Pg&s=10"
    },

    {
        name: "Asu Almabayev",
        division: "flyweight",
        record: "22 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo431HjMjXdZrcuLWNE5fiUZl63zis5X2G3kPpuEbliQ&s=10"
    },

    {
        name: "Lone’er Kavanagh",
        division: "flyweight",
        record: "9 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8qwM_OfFLH4da3cmhJKIBPQHUzaBsk6xH7mUpUW9tA&s=10"
    },

    {
        name: "Ramazan Temirov",
        division: "flyweight",
        record: "19 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrakpIHOA2nGFZASLbthUyTAtjLYu0waKB0dObR248g&s"
    },

    {
        name: "Kyoji Horiguchi",
        division: "flyweight",
        record: "36 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDHpe4OvQxI_4sVSorU1lRgTcQe1uj7g67Gif1g5jXOQ&s=10"
    },

    {
        name: "Amir Albazi",
        division: "flyweight",
        record: "18 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cs2Wj3MeFJzvc5X3MwPEh7eRfG0z6mVY3NzDkb9mRg&s=10"
    },

    {
        name: "Brandon Moreno",
        division: "flyweight",
        record: "23 - 10 - 2",
        image: ""
    }
];



let welterweightFighter = [

    {
        name: "Carlos Prates",
        division: "welterweight",
        record: "23 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwg-X9yv6c-mxH8w9_L7CcqJPPOuOnGiertRXlE72ZuFnxVu_BQP5Dledb0k5Yp468hkhAHxkMCwnbcIKqfhWEC1GI0AcoE4NES0oHPv2wYA&s=10"
    },

    {
        name: "Ian Machado Garry",
        division: "welterweight",
        record: "16 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJcAGGddJRd-P8XfoxsOSokFn7cAu8vMTPmzMhiJqYA&s=10"
    },

    {
        name: "Michael Morales",
        division: "welterweight",
        record: "19 - 0 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1olkHG_coOTpmn-2OLg2BC3oA4Hz9lICieQoDNNmu4A&s=10"
    },

    {
        name: "Jack Della Maddalena",
        division: "welterweight",
        record: "18 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmru23Ql_F2VcDM-0M2eoSj-MZ6Fl_otFjrcFTRVRiVQ&s=10"
    },

    {
        name: "Sean Brady",
        division: "welterweight",
        record: "18 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EiBAQS2umzI0F8yWPP2teFIA7b4ONbn1KNesQ7z-YQ&s=10"
    },

    {
        name: "Gabriel Bonfim",
        division: "welterweight",
        record: "18 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdHq0Pzcr3Tq6kYzZPhkQsXZ7KAn-XNU3vasgV6rUVA&s"
    },

    {
        name: "Belal Muhammad",
        division: "welterweight",
        record: "24 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSeJdlOOxxib692hpxG02oKrD11AIJsnVtDfC2uAJDw&s=10"
    },

    {
        name: "Leon Edwards",
        division: "welterweight",
        record: "22 - 6 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiIxCX0yqA0GsSXnJNmowi6EQ56u03oaWB3iWHw1Z8Iw&s=10"
    },

    {
        name: "Joaquin Buckley",
        division: "welterweight",
        record: "21 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8uAKJx4bRofiupBpoBiYsqshpYxo1nr3xbe6rlVJsQ&s=10"
    },

    {
        name: "Uroš Medić",
        division: "welterweight",
        record: "12 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONz3GDfWU3FzkXfD1AYjASYqGFi5nhrQVZuRPrB3yXA&s"
    }

];


let middleweightFighter = [

    {
        name: "Khamzat Chimaev",
        division: "middleweight",
        record: "15 - 0 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CTXOS5J1XBUPRZbSetv6dHJR8gaVfbZfJy2omaiPtA&s=10"
    },

    {
        name: "Dricus Du Plessis",
        division: "middleweight",
        record: "23 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI55T-azXgQRQXVUjKcM6O8wmuf9nvHvE6le395jhxbg&s=10"
    },

    {
        name: "Nassourdine Imavov",
        division: "middleweight",
        record: "17 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGmgIJPBJqvbNS6-0AIivlNZuPpL0h3AGTTyyD5Gf0w&s=10"
    },

    {
        name: "Joe Pyfer",
        division: "middleweight",
        record: "15 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjEk2kEJJG54zk9PqCehEqDMlD6iSB5k2TjmHiTbx3A&s=10"
    },

    {
        name: "Brendan Allen",
        division: "middleweight",
        record: "25 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqGe5TgEziCukx9JDu2sWxvaNP7LK9tdMWVPqctfyiQ&s"
    },

    {
        name: "Caio Borralho",
        division: "middleweight",
        record: "18 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtZvNglxghOpyNkefmmAcQ9rHSXMFDkebYksGI0KW2Q&s=10"
    },

    {
        name: "Anthony Hernandez",
        division: "middleweight",
        record: "14 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5r3sjpD1jgzDzChTgLM794dR3lDwqEOj2OQyGSIk3OA&s=10"
    },

    {
        name: "Israel Adesanya",
        division: "middleweight",
        record: "24 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX92-YPsEY6-aGVCNQ1dF4VaIaaVZl-MaPr8Uqc0_8OQ&s=10"
    },

    {
        name: "Gregory Rodrigues",
        division: "middleweight",
        record: "17 - 7 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_-Ughjj0TwEhm4mGTveeRE_YZY7xpw-PuwblgP6Vmg&s"
    },

    {
        name: "Christian Leroy Duncan",
        division: "middleweight",
        record: "12 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec5F2NGeVmhjybdU32YRBCZYNXlK6hIJFV-81I_0KuQ&s"
    }

];


let lightHeavyweightFighter = [

    {
        name: "Magomed Ankalaev",
        division: "light heavyweight",
        record: "21 - 3 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0S7s2B34hDSAyqV6Wjs3-Dq4fB8D6du8Sk-HYox37w&s"
    },

    {
        name: "Jiří Procházka",
        division: "light heavyweight",
        record: "32 - 6 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hjQyzQK8L5wqHU-FCFPRRvhEEMP6pXGqw5NEPkaMTw&s"
    },

    {
        name: "Paulo Costa",
        division: "light heavyweight",
        record: "15 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAeON6HO4BdHp2YeuuivrbB5UNYo7sFOMwtB7lwwiXg&s=10"
    },

    {
        name: "Jamahal Hill",
        division: "light heavyweight",
        record: "12 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzgzFRUe4qW7F2YmwGvnytXl2yd1JtHWtDqogdxzFVA&s=10"
    },

    {
        name: "Khalil Rountree Jr.",
        division: "light heavyweight",
        record: "14 - 6 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBL1yyl66HFEfLbYfC9ZWY_-IqTKYG0jxTfUSGcOUBw&s=10"
    },

    {
        name: "Navajo Stirling",
        division: "light heavyweight",
        record: "6 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfazPkpr_35mMXeN6fXRMe0bqgVKiGz2iAp7RjsiYueA&s"
    },

    {
        name: "Dominick Reyes",
        division: "light heavyweight",
        record: "16 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tZpQVUc91j__2FmRRza3YCTB8OoNbUyUVh1nEwO65A&s=10"
    },

    {
        name: "Azamat Murzakanov",
        division: "light heavyweight",
        record: "15 - 0 - 0",
        image: "https://ufc.com/images/styles/athlete_bio_full_body/s3/2026-04/MURZAKANOV_AZAMAT_L_04-11.png?itok=mqQa9nra"
    },

    {
        name: "Bogdan Guskov",
        division: "light heavyweight",
        record: "17 - 4 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQ3SoQCfB0MCgeIQPHQmhB60tUFqkQiy6q4HaEvWfHA&s=10"
    },

    {
        name: "Robert Whittaker",
        division: "light heavyweight",
        record: "27 - 8 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpNiZn6AEdwk9xXLlvdWlONmN6uFRFLboQ6jCqU9JOA&s"
    }

];


let heavyweightFighter = [

    {
        name: "Ciryl Gane",
        division: "heavyweight",
        record: "14 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hWAd_Fw8XEfgJm0hNb01-lmQcDH_skEjecPnf3Uthg&s=10"
    },

    {
        name: "Alexander Volkov",
        division: "heavyweight",
        record: "38 - 11 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnML1BZetgeNHgGfUuguw3EPn8q-Elb_7KoPfIpw61g&s=10"
    },

    {
        name: "Sergei Pavlovich",
        division: "heavyweight",
        record: "19 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzPrtMw6u5Wm15gAdq_q0xn4tRWSOQN1wvEsdnpn-Sw&s"
    },

    {
        name: "Alex Pereira",
        division: "heavyweight",
        record: "13 - 3 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ3qSxjjquPfWENxfLMRtqkbf_nKEYA_HJAfahnt3Pw&s=10"
    },

    {
        name: "Rizvan Kuniev",
        division: "heavyweight",
        record: "14 - 0 - 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKZOutfbmOgtrsnGqdF0AEUTv7hC_tl6gJIK2XYMhgw&s"
    },

    {
        name: "Josh Hokit",
        division: "heavyweight",
        record: "6 - 0 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROX_1NQgUjS_nU99XIT_z9rbR4upiA6EyUT3eFun-IQ&s=10"
    },

    {
        name: "Waldo Cortes Acosta",
        division: "heavyweight",
        record: "15 - 2 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bMVlqFkB6YTLuXunXIHwj5P6RRGAwjLRyWaBW-NUAQ&s=10"
    },

    {
        name: "Valter Walker",
        division: "heavyweight",
        record: "15 - 1 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAsYn185QFknDVJlC-I5nMERyh3YIFzfTxP8o57vuEw&s"
    },

    {
        name: "Serghei Spivac",
        division: "heavyweight",
        record: "18 - 5 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ThDzRVPV6Xu8noV2mDaDx1jZxkb4d7ehWHjaJ9bhXQ&s"
    },

    {
        name: "Curtis Blaydes",
        division: "heavyweight",
        record: "19 - 6 - 0",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PeKFINk7TpakehbX1WeRVMUrG2a7DN_lo9gNNYfa1g&s"
    }

];




function showfighter() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = LightweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}
// Lightweight 

showfighter();


ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})


// Featherweight 

function showfighter1() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = featherweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter1();


ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})


// bantamweight 


function showfighter2() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = bantamweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter2();


ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})

// flyweeight
function showfighter3() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = flyweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter3();

// welterweight 

ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})


function showfighter4() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = welterweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter4();



ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})

// middleweight 

function showfighter5() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = middleweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter5();


ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})


// lightHeavyweight

function showfighter6() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = lightHeavyweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter6();


ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})


// heavyweight 

function showfighter7() {
    fighterbtn.addEventListener("click", () => {
        let value = fighterSearch.value;

        let fighter = heavyweightFighter.filter(function (fighter) {
            return value === fighter.name;
        });

        // console.log(fighter);

        //         console.log(fighterName);
        // console.log(fighterDivision);
        // console.log(fighterRecord);

        fighterName.textContent = fighter[0].name;
        fighterDivision.textContent = fighter[0].division;
        fighterRecord.textContent = fighter[0].record;
        fighterImage.src = fighter[0].image;


        fighterspopup.style.display = "block";

    });
}

showfighter7();


ClosePop.addEventListener("click", () => {
    fighterspopup.style.display = "none";

})



