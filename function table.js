<html>
<script type="text/javascript">
function table()
{
 var a,i,j,t;
a=document.getElementById("num").value;
document.write("<table border=1>")
for(i=1;i<=10;i++)
{
document.write("<tr>");
for(j=1;j<=a;j++)
{
t=i*j;
document.write("<td>"+t+"</td>");
}
if(i>10)
{
 document.write("</tr>")
}
}
}
</script>
<body>
<form>
Enter the Number<input type="text" id="num"><br><br>
<input type="button" value="table" onclick="table()">
</form>
 </html>