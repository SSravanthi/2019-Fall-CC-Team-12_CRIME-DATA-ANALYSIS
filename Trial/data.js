var app = angular.module("data", []);

app.controller("control",function ($scope,$http) {

    $scope.genderf = function () {


        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=sex%20as%20s,count(report_no)&$group=s%20limit%20150000").then(function (value) {
                $scope.gender2017 = value.data;
                $scope.m1=parseInt($scope.gender2017[2].count_report_no);
                $scope.f1=parseInt($scope.gender2017[1].count_report_no);
                $scope.u1=parseInt($scope.gender2017[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=sex%20as%20s,count(report_no)&$group=s%20limit%20150000").then(function (value) {
                $scope.gender2018 = value.data;
                $scope.m2=parseInt($scope.gender2018[1].count_report_no);
                $scope.f2=parseInt($scope.gender2018[0].count_report_no);
                $scope.u2=parseInt($scope.gender2018[2].count_report_no);

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=sex%20as%20s,count(report_no)&$group=s%20limit%20150000").then(function (value) {
                    $scope.gender2019 = value.data;
                    $scope.m3=parseInt($scope.gender2019[2].count_report_no);
                    $scope.f3=parseInt($scope.gender2019[1].count_report_no);
                    $scope.u3=parseInt($scope.gender2019[3].count_report_no);

                    drawgender($scope.m1, $scope.m2, $scope.m3, $scope.f1, $scope.f2, $scope.f3,$scope.u1, $scope.u2, $scope.u3,'genderchart');

        });
        });
        });

               
    };

    $scope.racef = function () {
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=race%20as%20r,count(report_no)&$group=r%20limit%20150000").then(function (value) {
            $scope.race2017 = value.data;
            $scope.b1=parseInt($scope.race2017[2].count_report_no);
            $scope.u1=parseInt($scope.race2017[5].count_report_no);
            $scope.w1=parseInt($scope.race2017[6].count_report_no);
            $scope.a1=parseInt($scope.race2017[1].count_report_no);
            $scope.i1=parseInt($scope.race2017[3].count_report_no);
            $scope.p1=parseInt($scope.race2017[4].count_report_no);

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=race%20as%20r,count(report_no)&$group=r%20limit%20150000").then(function (value) {
            $scope.race2018 = value.data;
            $scope.b2=parseInt($scope.race2018[1].count_report_no);
            $scope.u2=parseInt($scope.race2018[4].count_report_no);
            $scope.w2=parseInt($scope.race2018[5].count_report_no);
            $scope.a2=parseInt($scope.race2018[0].count_report_no);
            $scope.i2=parseInt($scope.race2018[2].count_report_no);
            $scope.p2=parseInt($scope.race2018[3].count_report_no);

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=race%20as%20r,count(report_no)&$group=r%20limit%20150000").then(function (value) {
            $scope.race2019 = value.data;
            $scope.b3=parseInt($scope.race2019[1].count_report_no);
            $scope.u3=parseInt($scope.race2019[2].count_report_no);
            $scope.w3=parseInt($scope.race2019[4].count_report_no);
            $scope.a3=parseInt($scope.race2019.count_report_no);
            $scope.i3=parseInt($scope.race2019[3].count_report_no);
            $scope.p3=parseInt($scope.race2019.count_report_no);

            drawrace($scope.b1,$scope.b2, $scope.b3, $scope.u1, $scope.u2, $scope.u3, $scope.w1, $scope.w2, $scope.w3, $scope.a1,$scope.a2, $scope.a3, $scope.i1, $scope.i2, $scope.i3, $scope.p1, $scope.p2, $scope.p3, 'racechart');
        });
        });
        });

    };

    $scope.firearmf = function () {
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=firearm_used_flag%20as%20f,count(report_no)&$group=f%20limit%20150000").then(function (value) {
            $scope.firearm2017 = value.data;
            $scope.y1=parseInt($scope.firearm2017[1].count_report_no);
            $scope.n1=parseInt($scope.firearm2017[0].count_report_no);

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=firearm_used_flag%20as%20f,count(report_no)&$group=f%20limit%20150000").then(function (value) {
            $scope.firearm2018 = value.data;
            $scope.y2=parseInt($scope.firearm2018[1].count_report_no);
            $scope.n2=parseInt($scope.firearm2018[0].count_report_no);

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=firearm_used_flag%20as%20f,count(report_no)&$group=f%20limit%20150000").then(function (value) {
            $scope.firearm = value.data;
            $scope.y3=parseInt($scope.firearm[1].count_report_no);
            $scope.n3=parseInt($scope.firearm[0].count_report_no);

            drawfirearm($scope.y1,$scope.y2,$scope.n1,$scope.n2,$scope.y3,$scope.n3, 'firearmchart');


        });
        });
        });

    };

    $scope.zipcodef = function () {

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=zip_code,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Stealing%20From%20Auto%22%20or%20description=%20%22Auto%20Theft%22%20or%20description=%20%22Non%20Agg%20Assault%20Dome%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Stealing%20Shoplifting%22%20or%20description=%20%22Possesion%47Sale%47Dist%47%22%20&$group=zip_code%20&$order=count(report_no)%20DESC%20limit%207").then(function (value) {
            $scope.zip2017 = value.data;
            console.log(value.data);
            $scope.z1 = parseInt($scope.zip2017[0].count_report_no);
            $scope.z2 = parseInt($scope.zip2017[1].count_report_no);
            $scope.z3 = parseInt($scope.zip2017[2].count_report_no);
            $scope.z4 = parseInt($scope.zip2017[3].count_report_no);
            $scope.z5 = parseInt($scope.zip2017[4].count_report_no);
            console.log($scope.z1);
            drawzipcode($scope.z1, $scope.z2, $scope.z3, $scope.z4, $scope.z5, 'zipcodechart');

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=zip_code,count(report_no)%20where%20description=%22Property%20Damage%22%20or%20description=%20%22Stealing%20From%20Auto%22%20or%20description=%20%22Auto%20Theft%22%20or%20description=%20%22Non%20Agg%20Assault%20Dome%22%20or%20description=%20%22Burglary%20-%20Residence%22%20or%20description=%20%22Stealing%20Shoplifting%22%20or%20description=%20%22PossesionGSaleGDistG%22%20&$group=zip_code%20&$order=count(report_no)%20DESC%20limit%207").then(function (value) {
            $scope.zip2018 = value.data;
            $scope.l1 = parseInt($scope.zip2018[0].count_report_no);
            $scope.l2 = parseInt($scope.zip2018[3].count_report_no);
            $scope.l3 = parseInt($scope.zip2018[2].count_report_no);
            $scope.l4 = parseInt($scope.zip2018[1].count_report_no);
            $scope.l5 = parseInt($scope.zip2018[4].count_report_no);
            drawzipcode1($scope.l1, $scope.l2, $scope.l3, $scope.l4, $scope.l5, 'zipcodechart1');

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=zip_code,count(report_no)%20where%20description=%22Vandalism/Destruction%20of%20Property%22%20or%20description=%20%22Motor%20Vehicle%20Theft%22%20or%20description=%20%22Theft%20From%20Motor%20Vehicle%22%20or%20description=%20%22Simple%20Assault%22%20or%20description=%20%22Burglary/Breaking%20and%20Entering%22%20or%20description=%20%22Shoplifting%22%20or%20description=%20%22All%20Other%20Offenses%22%20&$group=zip_code%20&$order=count(report_no)%20DESC%20limit%207").then(function (value) {
            $scope.zip2019 = value.data;
            $scope.k1 = parseInt($scope.zip2019[1].count_report_no);
            $scope.k2 = parseInt($scope.zip2019[5].count_report_no);
            $scope.k3 = parseInt($scope.zip2019[2].count_report_no);
            $scope.k4 = parseInt($scope.zip2019[3].count_report_no);
            $scope.k5 = parseInt($scope.zip2019[6].count_report_no);
            drawzipcode2($scope.k1, $scope.k2, $scope.k3, $scope.k4, $scope.k5, 'zipcodechart2');
        });
        });
        });
    };

    $scope.top10crimes = function () {

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
            $scope.desc2017 = value.data;
            $scope.c1 = parseInt($scope.desc2017[0].count_report_no);
            $scope.c2 = parseInt($scope.desc2017[1].count_report_no);
            $scope.c3 = parseInt($scope.desc2017[2].count_report_no);
            $scope.c4 = parseInt($scope.desc2017[3].count_report_no);
            $scope.c5 = parseInt($scope.desc2017[4].count_report_no);
            $scope.c6 = parseInt($scope.desc2017[5].count_report_no);
            $scope.c7 = parseInt($scope.desc2017[6].count_report_no);
            $scope.c8 = parseInt($scope.desc2017[7].count_report_no);
            $scope.c9 = parseInt($scope.desc2017[8].count_report_no);
            $scope.c10 = parseInt($scope.desc2017[9].count_report_no);
            drawdesc($scope.c1, $scope.c2, $scope.c3, $scope.c4, $scope.c5, $scope.c6, $scope.c7, $scope.c8, $scope.c9, $scope.c10,'descchart');

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
            $scope.desc2018 = value.data;
            $scope.d1 = parseInt($scope.desc2018[0].count_report_no);
            $scope.d2 = parseInt($scope.desc2018[1].count_report_no);
            $scope.d3 = parseInt($scope.desc2018[2].count_report_no);
            $scope.d4 = parseInt($scope.desc2018[3].count_report_no);
            $scope.d5 = parseInt($scope.desc2018[4].count_report_no);
            $scope.d6 = parseInt($scope.desc2018[5].count_report_no);
            $scope.d7 = parseInt($scope.desc2018[6].count_report_no);
            $scope.d8 = parseInt($scope.desc2018[7].count_report_no);
            $scope.d9 = parseInt($scope.desc2018[8].count_report_no);
            $scope.d10 = parseInt($scope.desc2018[9].count_report_no);
            drawdesc1($scope.d1, $scope.d2, $scope.d3, $scope.d4, $scope.d5, $scope.d6, $scope.d7, $scope.d8, $scope.d9, $scope.d10,'descchart1');


        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
            $scope.desc2019 = value.data;
            $scope.e1 = parseInt($scope.desc2019[0].count_report_no);
            $scope.e2 = parseInt($scope.desc2019[1].count_report_no);
            $scope.e3 = parseInt($scope.desc2019[2].count_report_no);
            $scope.e4 = parseInt($scope.desc2019[3].count_report_no);
            $scope.e5 = parseInt($scope.desc2019[4].count_report_no);
            $scope.e6 = parseInt($scope.desc2019[5].count_report_no);
            $scope.e7 = parseInt($scope.desc2019[6].count_report_no);
            $scope.e8 = parseInt($scope.desc2019[7].count_report_no);
            $scope.e9 = parseInt($scope.desc2019[8].count_report_no);
            $scope.e10 = parseInt($scope.desc2019[9].count_report_no);
            drawdesc2($scope.e1, $scope.e2, $scope.e3, $scope.e4, $scope.e5, $scope.e6, $scope.e7, $scope.e8, $scope.e9, $scope.e10,'descchart2');
        });
        });
        });
    };

    $scope.topcrimes = function () {

        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
            $scope.desc2017 = value.data;
            console.log(value.data);
            $scope.c1 = parseInt($scope.desc2017[0].count_report_no);
            $scope.c2 = parseInt($scope.desc2017[1].count_report_no);
            $scope.c3 = parseInt($scope.desc2017[2].count_report_no);
            $scope.c4 = parseInt($scope.desc2017[3].count_report_no);
            $scope.c5 = parseInt($scope.desc2017[4].count_report_no);
            $scope.c6 = parseInt($scope.desc2017[7].count_report_no);
            $scope.c7 = parseInt($scope.desc2017[8].count_report_no);

        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
                $scope.desc2018 = value.data;
            console.log(value.data);
                $scope.d1 = parseInt($scope.desc2018[0].count_report_no);
                $scope.d2 = parseInt($scope.desc2018[1].count_report_no);
                $scope.d3 = parseInt($scope.desc2018[3].count_report_no);
                $scope.d4 = parseInt($scope.desc2018[2].count_report_no);
                $scope.d5 = parseInt($scope.desc2018[6].count_report_no);
                $scope.d6 = parseInt($scope.desc2018[7].count_report_no);
                $scope.d7 = parseInt($scope.desc2018[8].count_report_no);

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$select=description%20as%20d,count(report_no)&$group=d&$order=count(report_no)%20DESC%20limit%2015").then(function (value) {
                    $scope.desc2019 = value.data;
            console.log(value.data);
                    $scope.e1 = parseInt($scope.desc2019[3].count_report_no);
                    $scope.e2 = parseInt($scope.desc2019[4].count_report_no);
                    $scope.e3 = parseInt($scope.desc2019[6].count_report_no);
                    $scope.e4 = parseInt($scope.desc2019[1].count_report_no);
                    $scope.e5 = parseInt($scope.desc2019[5].count_report_no);
                    $scope.e6 = parseInt($scope.desc2019[7].count_report_no);
                    $scope.e7 = parseInt($scope.desc2019[8].count_report_no);

                    drawtopcrimes($scope.c1, $scope.c2, $scope.c3, $scope.c4, $scope.c5, $scope.c6, $scope.c7, $scope.d1, $scope.d2, $scope.d3, $scope.d4, $scope.d5, $scope.d6, $scope.d7, $scope.e1, $scope.e2, $scope.e3, $scope.e4, $scope.e5, $scope.e6, $scope.e7,'topcrimeschart');
        });
        });
        });
    };

    $scope.age_try = function () {
        var graphicData;
        var age0_10=0,age10_20=0,age20_30=0,age30_40=0,age40_50=0,age50_60=0,age60_70=0,age70_80=0,age80_90=0,age90_100=0;
        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            console.log(graphicData);
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['age'] < 10 && graphicData[i]['age'] > 0){
                    age0_10++;
                }
                else if(graphicData[i]['age'] < 20 && graphicData[i]['age'] > 10){
                    age10_20++;
                }
                else if(graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    age20_30++;
                }
                else if(graphicData[i]['age'] < 40 && graphicData[i]['age'] > 30){
                    age30_40++;
                }
                else if(graphicData[i]['age'] < 50 && graphicData[i]['age'] > 40){
                    age40_50++;
                }
                else if(graphicData[i]['age'] < 60 && graphicData[i]['age'] > 50){
                    age50_60++;
                }
                else if(graphicData[i]['age'] < 70 && graphicData[i]['age'] > 60){
                    age60_70++;
                }
                else if(graphicData[i]['age'] < 80 && graphicData[i]['age'] > 70){
                    age70_80++;
                }
                else if(graphicData[i]['age'] < 90 && graphicData[i]['age'] > 80){
                    age80_90++;
                }
                else if(graphicData[i]['age'] < 100 && graphicData[i]['age'] > 90){
                    age90_100++;
                }
            }
            console.log(age20_30);
            drawage_try(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart);
        });
        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            console.log(graphicData);
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['age'] < 10 && graphicData[i]['age'] > 0){
                    age0_10++;
                }
                else if(graphicData[i]['age'] < 20 && graphicData[i]['age'] > 10){
                    age10_20++;
                }
                else if(graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    age20_30++;
                }
                else if(graphicData[i]['age'] < 40 && graphicData[i]['age'] > 30){
                    age30_40++;
                }
                else if(graphicData[i]['age'] < 50 && graphicData[i]['age'] > 40){
                    age40_50++;
                }
                else if(graphicData[i]['age'] < 60 && graphicData[i]['age'] > 50){
                    age50_60++;
                }
                else if(graphicData[i]['age'] < 70 && graphicData[i]['age'] > 60){
                    age60_70++;
                }
                else if(graphicData[i]['age'] < 80 && graphicData[i]['age'] > 70){
                    age70_80++;
                }
                else if(graphicData[i]['age'] < 90 && graphicData[i]['age'] > 80){
                    age80_90++;
                }
                else if(graphicData[i]['age'] < 100 && graphicData[i]['age'] > 90){
                    age90_100++;
                }
            }
            console.log(age20_30);
            drawage_try1(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart2);
        });

        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            console.log(graphicData);
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['age'] < 10 && graphicData[i]['age'] > 0){
                    age0_10++;
                }
                else if(graphicData[i]['age'] < 20 && graphicData[i]['age'] > 10){
                    age10_20++;
                }
                else if(graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    age20_30++;
                }
                else if(graphicData[i]['age'] < 40 && graphicData[i]['age'] > 30){
                    age30_40++;
                }
                else if(graphicData[i]['age'] < 50 && graphicData[i]['age'] > 40){
                    age40_50++;
                }
                else if(graphicData[i]['age'] < 60 && graphicData[i]['age'] > 50){
                    age50_60++;
                }
                else if(graphicData[i]['age'] < 70 && graphicData[i]['age'] > 60){
                    age60_70++;
                }
                else if(graphicData[i]['age'] < 80 && graphicData[i]['age'] > 70){
                    age70_80++;
                }
                else if(graphicData[i]['age'] < 90 && graphicData[i]['age'] > 80){
                    age80_90++;
                }
                else if(graphicData[i]['age'] < 100 && graphicData[i]['age'] > 90){
                    age90_100++;
                }
            }
            console.log(age20_30);
            drawage_try2(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart2);
        });


    };

    $scope.race_firearmf = function () {

        var graphicData;
        var fw1=0,fw2=0,fw3=0,fb1=0,fb2=0,fb3=0;


        $http.get("https://data.kcmo.org/resource/98is-shjt.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "W" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    fw1++;
                }
                else if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "B" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    fb1++;
                }

            }


        $http.get("https://data.kcmo.org/resource/dmjw-d28i.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "W" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    fw2++;
                }
                else if(graphicData[i]['firearm_used_flag'] == "Y" && graphicData[i]['race'] == "B" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    fb2++;
                }


            }


        $http.get("https://data.kcmo.org/resource/pxaa-ahcm.json?$limit=150000").then(function (value) {
            graphicData = value.data;
            console.log(graphicData.length);
            for(var i=0;i<graphicData.length;i++){
                if(graphicData[i]['firearm_used_flag'] == true && graphicData[i]['race'] == "W" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    fw3++;
                }
                else if(graphicData[i]['firearm_used_flag'] == true && graphicData[i]['race'] == "B" && graphicData[i]['age'] < 30 && graphicData[i]['age'] > 20){
                    fb3++;
                    console.log(fb3);

                }

            }
            //drawracefirearm1(firearm_W,firearm_B, racefirearmtrychart2);
            drawracefirearm(fw1,fb1,fw2,fb2,fw3,fb3, racefirearmtrychart);

        });

        });
        });

    };









    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawgender);
    function drawgender(m1,m2,m3,f1,f2,f3,u1,u2,u3,genderchart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Male','Female','Unidentified'],
            ['2017', parseInt(m1),parseInt(f1),parseInt(u1)],
            ['2018', parseInt(m2),parseInt(f2),parseInt(u2)],
            ['2019', parseInt(m3),parseInt(f3),parseInt(u3)]

            //['Gender','CRIMES BASED ON GENDER'],
            //['Male', parseInt(m)],
            //['Female', parseInt(f)],
            //['Unidentified', parseInt(u)],

           // ['Gender','Male','Female','Unidentified'],
           // [ 'Gender', parseInt(m),parseInt(f),parseInt(u)]
        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            curvetype:'function',
            legend:'right',
            title:'INVOLVEMENT IN CRIMES BASED ON GENDER ',
            vAxis: {title: 'Crime Count'},
            hAxis: {title: 'Year'},
            is3D:true,
            seriesType: 'bars',
            series: {3: {type: 'line'}},
            colors: ['#C7A395', '#1A008C','#95B9C7','#FE6F5E'] ,
            height: 600,
            width: 1500

        };


        var chart = new google.visualization.ComboChart(document.getElementById('genderchart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawrace);
    function drawrace(b1,b2,b3,u1,u2,u3,w1,w2,w3,a1,a2,a3,i1,i2,i3,p1,p2,p3,racechart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Unknown','Black','White', 'Asian','Native Indian', 'Pacific Islander'],
            ['2017', parseInt(u1),parseInt(b1),parseInt(w1),parseInt(a1),parseInt(i1),parseInt(p1)],
            ['2018', parseInt(u2),parseInt(b2),parseInt(w2),parseInt(a2),parseInt(i2),parseInt(p2)],
            ['2019', parseInt(u3),parseInt(b3),parseInt(w3),parseInt(a3),parseInt(i3),parseInt(p3)]

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            title: 'CRIMES BASED ON RACE',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            height: 500,
            width: 1500,
            vAxis: {title: 'Crime Count'},
            hAxis: {title: 'Year'},
            is3D:true,
        };
        var chart = new google.visualization.LineChart(document.getElementById('racechart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawfirearm);
    function drawfirearm(y1,y2,n1,n2,y3,n3,firearmchart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','With Firearms','Without Firearms'],
            ['2017',parseInt(y1),parseInt(n1)],
            ['2018',parseInt(y2),parseInt(n2)],
            ['2019',parseInt(y3),parseInt(n3)]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'Total Usage of Firearms in CRIME',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C','#95B9C7'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('firearmchart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdesc);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawdesc(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,descchart) {
        var data = google.visualization.arrayToDataTable([
            ['DES','COUNT'],

            ['property damage', parseInt(c1)],
            ['stealing frm auto', parseInt(c2)],
            ['auto theft', parseInt(c3)],
            ['non aggravated assault', parseInt(c4)],
            ['burglury-residence', parseInt(c5)],
            ['aggravated assault', parseInt(c6)],
            ['stealing shoplifting', parseInt(c7)],
            ['possesion', parseInt(c8)],
            ['stealing frm building', parseInt(c9)],
            ['stealing all other', parseInt(c10)]



        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'TOP CRIMES in Year 2017',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('descchart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdesc1);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawdesc1(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,descchart1) {
        var data = google.visualization.arrayToDataTable([
            ['DES','COUNT'],

            ['property damage', parseInt(d1)],
            ['stealing frm auto', parseInt(d2)],
            ['auto theft', parseInt(d3)],
            ['non aggravated assault', parseInt(d4)],
            ['burglury-residence', parseInt(d5)],
            ['aggravated assault', parseInt(d6)],
            ['stealing shoplifting', parseInt(d7)],
            ['possesion', parseInt(d8)],
            ['stealing frm building', parseInt(d9)],
            ['stealing all other', parseInt(d10)]



        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'TOP CRIMES in Year 2018',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('descchart1'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawdesc2);
    //google.charts.load("visualization", "1", {packages:["corechart"],callback: drawdesc});
    function drawdesc2(e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,descchart2) {
        var data = google.visualization.arrayToDataTable([
            ['DES','COUNT'],

            ['property damage', parseInt(e1)],
            ['stealing frm auto', parseInt(e2)],
            ['auto theft', parseInt(e3)],
            ['non aggravated assault', parseInt(e4)],
            ['burglury-residence', parseInt(e5)],
            ['aggravated assault', parseInt(e6)],
            ['stealing shoplifting', parseInt(e7)],
            ['possesion', parseInt(e8)],
            ['stealing frm building', parseInt(e9)],
            ['stealing all other', parseInt(e10)]



        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'TOP CRIMES in Year 2019',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#1A008C'],
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };

        var chart = new google.visualization.BarChart(document.getElementById('descchart2'));
        chart.draw(data, options);
    }



    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawtopcrimes);
    function drawtopcrimes(c1,c2,c3,c4,c5,c6,c7,d1,d2,d3,d4,d5,d6,d7,e1,e2,e3,e4,e5,e6,e7,topcrimechart) {
        var data = google.visualization.arrayToDataTable([
            ['Year','Property Damage','Stealing from Auto','Auto Theft', 'Non Aggravated Assault','Burglury-Residence', 'Stealing shoplifting', 'Possesion'],
            ['2017', parseInt(c1),parseInt(c2),parseInt(c3),parseInt(c4),parseInt(c5),parseInt(c6),parseInt(c7)],
            ['2018', parseInt(d1),parseInt(d2),parseInt(d3),parseInt(d4),parseInt(d5),parseInt(d6),parseInt(d7)],
            ['2019', parseInt(e1),parseInt(e2),parseInt(e3),parseInt(e4),parseInt(e5),parseInt(e6),parseInt(e7)]

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            title: 'TOP 7 CRIMES',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            height: 500,
            width: 1500,
            vAxis: {title: 'Crime Count'},
            hAxis: {title: 'Year'},
            is3D:true,
        };
        var chart = new google.visualization.LineChart(document.getElementById('topcrimechart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzipcode);
    function drawzipcode(z1,z2,z3,z4,z5,zipcodechart) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','Number of Crimes'],
            ['64130', parseInt(z1)],
            ['64134', parseInt(z2)],
            ['64127', parseInt(z3)],
            ['64111', parseInt(z4)],
            ['64131', parseInt(z5)]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            legend:'right',
            title:'Top Crimes in Top 5 locations for 2017',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
        };


        var chart = new google.visualization.PieChart(document.getElementById('zipcodechart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzipcode1);
    function drawzipcode1(l1,l2,l3,l4,l5,zipcodechart1) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','Number of Crimes'],
            ['64130', parseInt(l1)],
            ['64134', parseInt(l2)],
            ['64127', parseInt(l3)],
            ['64111', parseInt(l4)],
            ['64131', parseInt(l5)]

        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            legend:'right',
            title:'Top Crimes in Top 5 locations for 2018',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
        };


        var chart = new google.visualization.PieChart(document.getElementById('zipcodechart1'));
        chart.draw(data, options);
    }


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawzipcode2);
    function drawzipcode2(k1,k2,k3,k4,k5,zipcodechart2) {
        var data = google.visualization.arrayToDataTable([
            ['Zipcode','Number of Crimes'],
            ['64130', parseInt(k1)],
            ['64134', parseInt(k2)],
            ['64127', parseInt(k3)],
            ['64111', parseInt(k4)],
            ['64131', parseInt(k5)]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },
            legend:'right',
            title:'Top Crimes in Top 5 locations for 2019',
            is3D:true,
            height: 400,
            width: 750,
            colors: ['#7C7C82', '#6464F1', '#C9C8EC', '#0000A0', '#42424A','#1610CB']
        };


        var chart = new google.visualization.PieChart(document.getElementById('zipcodechart2'));
        chart.draw(data, options);
    }


    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage_try);
    function drawage_try(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart) {
        var data = google.visualization.arrayToDataTable([
            ['age','count'],
            ['0-10',age0_10],
            ['10-20',age10_20],
            ['20-30',age20_30],
            ['30-40',age30_40],
            ['40-50',age40_50],
            ['50-60',age50_60],
            ['60-70',age60_70],
            ['70-80',age70_80],
            ['80-90',age80_90],
            ['90-100',age90_100]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'AGE Vs CRIME-2017',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#c299ff'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('age_trychart'));
        chart.draw(data, options);
    }

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage_try1);
    function drawage_try1(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart1) {
        var data = google.visualization.arrayToDataTable([
            ['age','count'],
            ['0-10',age0_10],
            ['10-20',age10_20],
            ['20-30',age20_30],
            ['30-40',age30_40],
            ['40-50',age40_50],
            ['50-60',age50_60],
            ['60-70',age60_70],
            ['70-80',age70_80],
            ['80-90',age80_90],
            ['90-100',age90_100]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'AGE Vs CRIME-2018',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ['#ff9999'] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('age_trychart1'));
        chart.draw(data, options);
    }
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawage_try2);
    function drawage_try2(age0_10,age10_20,age20_30,age30_40,age40_50,age50_60,age60_70,age70_80,age80_90,age90_100,age_trychart2) {
        var data = google.visualization.arrayToDataTable([
            ['age','count'],
            ['0-10',age0_10],
            ['10-20',age10_20],
            ['20-30',age20_30],
            ['30-40',age30_40],
            ['40-50',age40_50],
            ['50-60',age50_60],
            ['60-70',age60_70],
            ['70-80',age70_80],
            ['80-90',age80_90],
            ['90-100',age90_100]


        ]);
        var options = {
            animation: {
                startup: true,   /* Need to add this for animations */
                duration: 1000,
                easing: 'in',
            },

            title: 'AGE Vs CRIME-2019',
            linewidth: 70,
            curvetype:'function',
            pointSize: 9,
            legend:'right',
            colors: ["#744d25"] ,
            height: 500,
            width: 1500,
            hAxis: {title: 'Crime Count'},
            is3D:true,
        };
        var chart = new google.visualization.BarChart(document.getElementById('age_trychart2'));
        chart.draw(data, options);
    }

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawracefirearm);
function drawracefirearm(fw1,fb1,fw2,fb2,fw3,fb3, racefirearmtrychart) {
    var data = google.visualization.arrayToDataTable([
        //['Race','Firearm'],
       // ['W',firearm_W],
        //['B',firearm_B]
        ['Year','White','Black'],
        ['2017', parseInt(fw1),parseInt(fb1)],
        ['2018', parseInt(fw2),parseInt(fb2)],
        ['2019', parseInt(fw3),parseInt(fb3)]


    ]);
    var options = {
        animation: {
            startup: true,   /* Need to add this for animations */
            duration: 1000,
            easing: 'in',
        },
        curvetype:'function',
        legend:'right',
        title:'Firearm usage based on race within age 20-30 group ',
        vAxis: {title: 'Firearm Usage'},
        hAxis: {title: 'Year'},
        is3D:true,
        seriesType: 'bars',
        series: {3: {type: 'line'}},
        colors: ['#C7A395', '#1A008C','#95B9C7',] ,
        height: 600,
        width: 1500

    };
    var chart = new google.visualization.ComboChart(document.getElementById('racefirearmtrychart'));
    chart.draw(data, options);
}






});

