<template>
    <div class="wrapper">
        <div class="imgCont">
            <img src="../../../public/Images/About.svg" class="img"/>
        </div>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="textAbout p-5 d-flex justify-content-center">
                    <div class="textHolder mt-5">
                        <h2 class="text">The Pinnacle Operating System Inc.</h2><br>
                        <text class="text">
                            At PINNACLE, we deliver each project by working together with passion and dedication.<br>
                            Our quality works and services are produced and strengthened by innovation.<br><br>

                            Our Objective is to provide first-class, high-quality service to each client and commit to<br>
                            providing the best software and hardware solutions in all circumstances.<br><br>

                            The Pinnacle Operationg Systems Inc., offers an innovation services for companies.<br>
                            We bring our expertise in quality assurance by providing software testing of<br>
                            highest level to ensure that your business runs on secured and reliable<br>
                            software, giving you confidence and peace of mind.<br>
                        </text>
                    </div>
                </div>
            </div>
        </div>
        <div class="team d-flex justify-content-center">
            <div class="teamCont">
                <h1 class="text">OUR TEAM</h1>
                <div class="left col-lg mt-5">
                    <div class="upper col-lg">
                        <div class="icon">
                            <img src="../../../public/Images/Juny.png" class="profile"/>
                        </div>
                        <div class="textIcon col-lg">
                            <b class="text">Juny Jago, Programmer<br></b>juny@gmail.com | 09123456789
                            <br><br>
                            <text class="text">
                                Lorem ipsum dolor sit amet, consectetur<br>
                                elit, sed do eiusmod tempor incididunt<br>
                                aliquip ex ea commodo consequat.
                            </text>
                        </div>
                    </div>
                    <div class="lower col-lg">
                        <div class="icon col-lg">
                            <img src="../../../public/Images/Marvin.png" class="profile"/>
                        </div>
                        <div class="textIcon col-lg">
                            <b class="text">Marvin Reyes, Programmer<br></b>marvin@gmail.com | 09123456789
                            <br><br>
                            <text class="text">
                                Lorem ipsum dolor sit amet, consectetur<br>
                                elit, sed do eiusmod tempor incididunt<br>
                                aliquip ex ea commodo consequat.
                            </text>
                        </div>
                    </div>
                </div>
                <div class="right col-lg mt-5">
                    <div class="upper col-lg">
                        <div class="icon col-lg">
                            <img src="../../../public/Images/Jester.png" class="profile"/>
                        </div>
                        <div class="textIcon col-lg">
                            <b class="text">Jester Longakit, QA Associate<br></b>jester@gmail.com | 09123456789
                            <br><br>
                            <text class="text">
                                Lorem ipsum dolor sit amet, consectetur<br>
                                elit, sed do eiusmod tempor incididunt<br>
                                aliquip ex ea commodo consequat.
                            </text>
                        </div>
                    </div>
                    <div class="lower col-lg">
                        <div class="icon col-lg">
                            <img src="../../../public/Images/Genesis.png" class="profile"/>
                        </div>
                        <div class="textIcon col-lg">
                            <b class="text">Genesis Cruz, QA Associate<br></b>genesis@gmail.com | 09123456789
                            <br><br>
                            <text class="text">
                                Lorem ipsum dolor sit amet, consectetur<br>
                                elit, sed do eiusmod tempor incididunt<br>
                                aliquip ex ea commodo consequat.
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex justify-content-center" style="height:300px;">
            <div class="row d-flex justify-content-center" style="margin:auto;">
                <div class="cntct d-flex justify-content-center">
                    <h2 class="text font-weight-bold">Need more details? Contact us<br>
                    <p class="text cstM">
                        We are here to assist. Contact us by phone, email or via our social media channels.
                    </p></h2>
                    <button class="cstmBtn">Contact Us</button>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AboutUs',
    }
</script>
<style scoped>
    
    .imgCont{
        background-color:green;
        justify-content: center;
    }

    .textAbout{
        height:500px;
        background: url(../../../public/Images/watermark.png);
        background-size: 800px;
        background-repeat: no-repeat;
        background-position: 120% 70%;
    }

    .textHolder{
        margin-left:-380px;
        text-align: left;
    }

    .text{
        letter-spacing: 2px;
    }

    .team{
        background-color: #FFFAFE;
        padding:20px;
        height:650px;
    }

    .teamCont{
        width:80%;
        text-align: left;
        height:auto;
    }

    .img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .profile{
        height: 100px;
        width: 100px;
        margin-right: 10px;
    }

    .left{
        float:left;
        height: 200px;
    }

    .right{
        float:right;
        height: 200px;
        margin-right:100px;
    }

    .icon{
        width: 100px;
        position:relative;
        display:block;
        float:left;
    }

    .textIcon{
        position:relative;
        display:block;
        float:right;
        margin-top:30px;
        margin-left:25px;
    }

    .lower{
        margin-top:250px;
    }

    .cntct{
        text-align: left;
        height:100px;
    }

    .cstM{
        font-size: 15px;
    }

    .cstmBtn{
        height:50px;
        width: 200px;
        border-radius: 10px;
        margin-left:30px;
        margin-top:10px;
        border:none;
        color:white;
        background-color: #A52B7A;
    }

</style>