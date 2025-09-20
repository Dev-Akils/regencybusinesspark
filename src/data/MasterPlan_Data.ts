
import image1 from "../assets/MasterPlan/Masterplan 1 (0-00-15-00).jpg";
import image2 from "../assets/MasterPlan/Masterplan 2 (0-00-00-00).jpg";
import image3 from "../assets/MasterPlan/Masterplan 3 (0-00-00-00).jpg";


// Types
interface Unit {
    id: number;
    name: string;
    polygonPoints: string;

    hoveredColor: string;
}
interface Vedio3D {
    id: number;
    polygonPoints: string;
    link: string;
}

interface MasterPlan {
    id: number;
    image: string;
    imageSettings: {
        svgSize: string;
        imageWidth: string;
        imageHeight: string;
    };
    vedio3D: Vedio3D[];
    features: string[];
    units: Unit[];
}



export const masterPlan: MasterPlan[] = [
    {
        id: 1,
        image: image3,
        imageSettings: {
            svgSize: "0 0 3000 2000",
            imageWidth: "3000",
            imageHeight: "2000",
        },
        vedio3D: [
            { id: 1, polygonPoints: "1330,412,1356,394,1372,399,1393,420,1393,447,1359,497,1327,444", link: "https://panoraven.com/en/embed/JzbOBHd2EP" },  //5
            { id: 2, polygonPoints: "1810,628,1836,610,1852,615,1873,636,1873,663,1839,713,1807,660", link: "https://panoraven.com/en/embed/IzRh7AgWjK" },  //4
            { id: 3, polygonPoints: "2374,860,2400,842,2416,847,2437,868,2437,895,2403,945,2371,892", link: "https://panoraven.com/en/embed/BhekkdUMPg" },  //3
            { id: 4, polygonPoints: "2301,1018,2288,978,2243,976,2229,1002,2232,1029,2261,1082", link: "https://panoraven.com/en/embed/f3bc570by7" }, //2
            { id: 5, polygonPoints: "1265,527,1291,509,1307,514,1328,535,1328,562,1294,612,1262,559", link: "https://panoraven.com/en/embed/UHkcEZiOFr" },  //1
            { id: 6, polygonPoints: "1896,519,1922,501,1938,506,1959,527,1959,554,1925,604,1893,551", link: "https://panoraven.com/en/embed/LLLmd3NML9" },  //ex1
            { id: 7, polygonPoints: "1650,865,1676,847,1692,852,1713,873,1713,900,1679,950,1647,897", link: "https://panoraven.com/en/embed/GTMaj0X0VR" },  //ex3
            { id: 8, polygonPoints: "2442,1000,2468,982,2484,987,2505,1008,2505,1035,2471,1085,2439,1032", link: "https://panoraven.com/en/embed/VrYMmn1Dd6" },  //ex4
            { id: 9, polygonPoints: "1107,395,1133,377,1149,382,1170,403,1170,430,1136,480,1104,427", link: "https://panoraven.com/en/embed/MCxzufNJJr" }, //ex2
        ],
        features: ["Swimming Pool", "Club House", "Garden", "Parking Area"],
        units: [{
            id: 1,
            name: "Building 1",
            polygonPoints: "861,613,1056,462,1597,713,1422,891",

            // hoveredColor: "rgba(160, 175, 125, 0.5)", // pastel olive-green
            hoveredColor: "rgba(80, 90, 60, 0.5)", // very dark olive green
        },
        {
            id: 2,
            name: "Building 2",
            polygonPoints: "1877,1010,1978,886,2582,1161,2455,1402,1883,1116,1941,1026",

            // hoveredColor: "rgba(210, 190, 160, 0.5)", // sandy beige
            hoveredColor: "rgba(110, 90, 70, 0.5)", // very dark sandy beige
        },
        {
            id: 3,
            name: "Building 3",

            polygonPoints: "2203,896,2306,758,2770,939,2688,1090",
            // hoveredColor: "rgba(145, 180, 200, 0.5)", // pastel teal-blue
            hoveredColor: "rgba(50, 80, 95, 0.5)", // very dark teal-blue
        },
        {
            id: 4,
            name: "Building 4",

            polygonPoints: "1673,663,1787,533,2306,756,2203,894",
            // hoveredColor: "rgba(190, 160, 185, 0.5)", // soft mauve/purple
            hoveredColor: "rgba(80, 60, 85, 0.5)", // very dark mauve/purple
        },
        {
            id: 5,

            name: "Building 5",
            polygonPoints: "1120,411,1252,311,1785,533,1671,666",
            // hoveredColor: "rgba(200, 150, 160, 0.5)", // muted pink/red
            hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
        },
        {
            id: 6,

            name: "Building 6",
            polygonPoints: "135,997,299,1108,778,743,606,629",
            // hoveredColor: "rgba(200, 150, 160, 0.5)", // muted pink/red
            hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
        },
        ]
    },
    {
        id: 2,
        image: image1,
        imageSettings: {
            svgSize: "0 0 3000 2000",
            imageWidth: "3000",
            imageHeight: "2000",
        },
        features: ["Club House", "Garden"],
        vedio3D: [
            { id: 1, polygonPoints: "2190,683,2200,656,2224,646,2245,648,2264,667,2261,693,2227,741", link: "https://panoraven.com/en/embed/JzbOBHd2EP" },  //5
            { id: 2, polygonPoints: "1679,913,1689,886,1713,876,1734,878,1753,897,1750,923,1716,971", link: "https://panoraven.com/en/embed/IzRh7AgWjK" },  //4
            { id: 3, polygonPoints: "1056,1205,1066,1178,1090,1168,1111,1170,1130,1189,1127,1215,1093,1263", link: "https://panoraven.com/en/embed/BhekkdUMPg" },  //3
            { id: 4, polygonPoints: "955,1012,965,985,989,975,1010,977,1029,996,1026,1022,992,1070", link: "https://panoraven.com/en/embed/f3bc570by7" }, //2
            { id: 5, polygonPoints: "1971,597,1981,570,2005,560,2026,562,2045,581,2042,607,2008,655", link: "https://panoraven.com/en/embed/UHkcEZiOFr" },  //1
            { id: 6, polygonPoints: "1836,1076,1846,1049,1870,1039,1891,1041,1910,1060,1907,1086,1873,1134", link: "https://panoraven.com/en/embed/LLLmd3NML9" },  //ex1
            { id: 7, polygonPoints: "854,1174,864,1147,888,1137,909,1139,928,1158,925,1184,891,1232", link: "https://panoraven.com/en/embed/GTMaj0X0VR" },  //ex3
            { id: 8, polygonPoints: "1423,756,1433,729,1457,719,1478,721,1497,740,1494,766,1460,814", link: "https://panoraven.com/en/embed/VrYMmn1Dd6" },  //ex4
            { id: 9, polygonPoints: "2261,560,2271,533,2295,523,2316,525,2335,544,2332,570,2298,618", link: "https://panoraven.com/en/embed/MCxzufNJJr" }, //ex2
        ],
        units: [{
            id: 1,

            name: "Building 1",
            polygonPoints: "1544,639,2081,438,2293,552,1745,782",
            // hoveredColor: "rgba(160, 175, 125, 0.5)", // pastel olive-green
            hoveredColor: "rgba(80, 90, 60, 0.5)", // very dark olive green
        },
        {
            id: 2,

            name: "Building 2",
            polygonPoints: "559,1042,1120,809,1186,875,1255,841,1385,947,712,1233",
            // hoveredColor: "rgba(210, 190, 160, 0.5)", // sandy beige
            hoveredColor: "rgba(110, 90, 70, 0.5)", // very dark sandy beige
        },
        {
            id: 3,

            name: "Building 3",
            polygonPoints: "718,1351,855,1542,1417,1275,1279,1108",
            // hoveredColor: "rgba(145, 180, 200, 0.5)", // pastel teal-blue
            hoveredColor: "rgba(50, 80, 95, 0.5)", // very dark teal-blue
        },
        {
            id: 4,

            name: "Building 4",
            polygonPoints: "1287,1108,1869,843,2023,973,1422,1275",
            // hoveredColor: "rgba(190, 160, 185, 0.5)", // soft mauve/purple
            hoveredColor: "rgba(80, 60, 85, 0.5)", // very dark mauve/purple
        },
        {
            id: 5,
            name: "Building 5",

            polygonPoints: "1869,843,2386,599,2568,700,2026,975",
            // hoveredColor: "rgba(200, 150, 160, 0.5)", // muted pink/red
            hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
        },
        {
            id: 6,
            name: "Building 6",

            polygonPoints: "1613,217,1753,175,2086,342,1930,397",
            // hoveredColor: "rgba(200, 150, 160, 0.5)", // muted pink/red
            hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
        },
        ]
    },
    {
        id: 3,
        image: image2,
        imageSettings: {
            svgSize: "0 0 3000 2000",
            imageWidth: "3000",
            imageHeight: "2000",
        },
        features: ["Garden", "Parking Area"],
        vedio3D: [
            { id: 1, polygonPoints: "993,876,1006,847,1035,839,1059,855,1067,884,1027,942", link: "https://panoraven.com/en/embed/JzbOBHd2EP" },  //5
            { id: 2, polygonPoints: "857,569,870,540,899,532,923,548,931,577,891,635", link: "https://panoraven.com/en/embed/IzRh7AgWjK" },  //4
            { id: 3, polygonPoints: "748,337,761,308,790,300,814,316,822,345,782,403", link: "https://panoraven.com/en/embed/BhekkdUMPg" },  //3
            { id: 4, polygonPoints: "939,329,952,300,981,292,1005,308,1013,337,973,395", link: "https://panoraven.com/en/embed/f3bc570by7" }, //2
            { id: 5, polygonPoints: "1206,794,1219,765,1248,757,1272,773,1280,802,1240,860", link: "https://panoraven.com/en/embed/UHkcEZiOFr" },  //1
            { id: 6, polygonPoints: "655,597,668,568,697,560,721,576,729,605,689,663", link: "https://panoraven.com/en/embed/LLLmd3NML9" },  //ex1
            { id: 7, polygonPoints: "846,349,859,320,888,312,912,328,920,357,880,415", link: "https://panoraven.com/en/embed/GTMaj0X0VR" },  //ex3
            { id: 8, polygonPoints: "1163,553,1176,524,1205,516,1229,532,1237,561,1197,619", link: "https://panoraven.com/en/embed/VrYMmn1Dd6" },  //ex4
            { id: 9, polygonPoints: "1162,1004,1175,975,1204,967,1228,983,1236,1012,1196,1070", link: "https://panoraven.com/en/embed/MCxzufNJJr" }, //ex2
        ],
        units: [{
            id: 1,
            name: "Building 1",

            polygonPoints: "1088,676,1374,615,1636,1000,1311,1071",
            // hoveredColor: "rgba(120, 135, 95, 0.5)", // darker olive green
            hoveredColor: "rgba(80, 90, 60, 0.5)", // very dark olive green
        },
        {
            id: 2,
            name: "Building 2",
            polygonPoints: "887,302,1109,260,1231,429,1149,440,1162,480,996,517",
            // hoveredColor: "rgba(160, 140, 110, 0.5)", // darker sandy beige
            hoveredColor: "rgba(110, 90, 70, 0.5)", // very dark sandy beige
        },
        {
            id: 3,
            name: "Building 3",
            polygonPoints: "614,334,797,299,861,456,665,490",
            // hoveredColor: "rgba(90, 125, 140, 0.5)", // darker teal-blue
            hoveredColor: "rgba(50, 80, 95, 0.5)", // very dark teal-blue
        },
        {
            id: 4,
            name: "Building 4",
            polygonPoints: "670,493,866,461,982,713,768,755",
            // hoveredColor: "rgba(120, 90, 120, 0.5)", // darker mauve/purple
            hoveredColor: "rgba(80, 60, 85, 0.5)", // very dark mauve/purple
        },
        {
            id: 5,
            name: "Building 5",

            polygonPoints: "765,758,985,713,1173,1105,914,1169",
            // hoveredColor: "rgba(140, 70, 80, 0.5)", // darker muted red/pink
            hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
        },
        {
            id: 6,
            name: "Building 6",

            polygonPoints: "1790,922,1909,1079,2473,927,2333,790",
            // hoveredColor: "rgba(140, 70, 80, 0.5)", // darker muted red/pink
            hoveredColor: "rgba(100, 40, 50, 0.5)", // very dark muted red/pink
        },
        ]
    },
];