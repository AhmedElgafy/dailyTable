

var daysName=["الأحد","الأثنين","الثلاثاء",
"الأبعاء","الخميس","الجمعة","السبت"]
var worningText=["اكتب التاريخ عدل يابو خالو*","ما قولنا نكتب عدل بااااااااقة*"]
var visited=0

function worning()
{
    var btn =document.getElementById("ptn")
    btn.addEventListener("click",()=>{
        visited++
    })
        var chito=document.createElement("p");
        chito.innerHTML=worningText[visited%2]
        chito.style.color="red"
        var chito2 =document.getElementById("dataInput")
        chito2.appendChild(chito)
      
    return chito2
}
function toArabicNumeral(en) {
    return ("" + en).replace(/[0-9]/g, function(t) {
        return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t+1);
    });
}

function genratDays(from,len)
{
    var days=[]
    var fulDate=new Date(from)
        var head = document.getElementById("head")
        head.style.margin=0

        for(let i=0;i<len;i++)
        {
            let day=fulDate.getDate()
            let month=fulDate.getMonth()+1
            let year=fulDate.getFullYear()
            days.push(toArabicNumeral(year+"/"+month+"/"+day))
            fulDate.setDate(fulDate.getDate()+1)
        }
    
    return days
    
}
function rowLength(from,num)
{
    for(let i=0;i<num;i++)
    {
        //create table with two td
        var row=document.createElement("tr")
        var rowData=document.createElement("td")
        var rowDataEmpty=document.createElement("td")
        var day=document.createElement("p")
        var fulDate=new Date(from)
        day.innerHTML=daysName[(fulDate.getDay()+i)%7]
        var date=document.createElement("p")
        var datePlace=document.createAttribute("class")
        datePlace.value="date"
        date.setAttributeNode(datePlace)
        date.innerHTML=genratDays(from,num)[i]
        rowData.appendChild(day)
        rowData.appendChild(date)
        row.appendChild(rowDataEmpty)
        row.appendChild(rowData)
        var table=document.getElementById("table")
        
        table.appendChild(row)
        
    }
}
function fromDate()
{
    var l=document.getElementById("fromDate").value
    var l= new Date(l)
    if(l=="Invalid Date")return worning()
    rowLength(l,10)
    document.getElementById("table").style.display="table"
    document.getElementById("dataInput").style.display="none"
    print()
}
addEventListener('keydown', (event) => 
{
    if(event.key=="Enter")
    {
        document.getElementById("ptn").click()
        
    }

});


