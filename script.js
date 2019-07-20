let products = [
    {
        pname:"Pudge Arcana",
        price:"$34.99",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://sg.carousell.com/p/pudge-arcana-164751877/",
        imgurl:"https://media.karousell.com/media/photos/products/2018/04/16/pudge_arcana_1523851074_05fded1f.jpg",
    },
    {
        pname:"Shadow Fiend A",
        price:"$32",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://sg.carousell.com/p/sf-arcana-dota-2-81549063/",
        imgurl:"https://media.karousell.com/media/photos/products/2016/12/22/sf_arcana_1482404273_69a60f65.jpg",
    },
    {
        pname:"Juggernut Arcana",
        price:"$34.54",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://www.reddit.com/r/DotA2/comments/5zssp5/psa_if_you_have_the_juggernaut_arcana_and_want_an/",
        imgurl:"https://i.redd.it/gnv6gf4dptly.png",
    },
    {
        pname:"Phantom Assasin Arcana",
        price:"$30.43",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://sg.carousell.com/p/dota-2-phantom-assassin-s-arcana-145668234/",
        imgurl:"https://media.karousell.com/media/photos/products/2017/12/26/dota_2_phantom_assassins_arcana_1514273364_658a700e.jpg",
    },
    {
        pname:"Techies Arcana",
        price:"$40",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://sg.carousell.com/p/inscribed-techies-arcana-full-set-with-legendary-items-25094279/",
        imgurl:"https://media.karousell.com/media/photos/products/2015/08/03/inscribed_techies_arcana_full_set_with_legendary_items_1438598797_e2fd43f3.jpg",
    },
    {
        pname:"Legion Commander Arcana",
        price:"$32",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://www.reddit.com/r/DotA2/comments/8lc9m4/legion_commander_with_the_fallen_legion_immortal/",
        imgurl:"https://i.redd.it/sbghew7s8gz01.png",
    },
    {
        pname:"Terror Blade Arcana",
        price:"$75",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://www.playerup.com/threads/cheap-autographed-fractal-horns-of-inner-abysm-terrorblade-arcana-purple-colour.3726195/",
        imgurl:"http://oi68.tinypic.com/30ue3py.jpg",
    },
    {
        pname:"Earthshaker Arcana",
        price:"$90",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://www.youtube.com/watch?v=SjuoKQcn_Mk",
        imgurl:"https://i.ytimg.com/vi/SjuoKQcn_Mk/maxresdefault.jpg",
    },
    {
        pname:"Monkey King Arcana",
        price:"$34.99",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://steamcommunity.com/sharedfiles/filedetails/?id=1213796697",
        imgurl:"https://i.ytimg.com/vi/tPB_qUh0oD8/maxresdefault.jpg",
    },
    {
        pname:"Rubick Arcana",
        price:"$45",
        pcode:"",
        description:"",
        manufacturer:"",
        stocks:"",
        supplier:"",
        expdate:"",
        url:"https://www.reddit.com/r/DotA2/comments/a7v775/valve_why_did_you_make_rubick_arcana_another/",
        imgurl:"https://i.imgur.com/l7l8160.jpg",
    }
]

let output = "";

products.forEach(function(item){

    if (item.imgurl == undefined)

    {

        item.imgurl = "https://via.placeholder.com/300"

    }

    output += `<div class ='item'>
    <img style="width:300px; display:inline" src = ${item.imgurl}>
    <a href = "${item.url}"> ${item.pname} </a>
    </div>
    `

})

document.getElementById('container').innerHTML = output

