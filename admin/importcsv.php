<?php
// specify connection info
$connect = mysql_connect('localhost','root','usbw');
if (!$connect)
{
   die('Could not <span id="IL_AD1" class="IL_AD">
    connect to</span> MySQL: ' . mysql_error());
}

$cid =mysql_select_db('test',$connect); //specify db name

define('CSV_PATH','C:/temp/'); // specify CSV file path

$csv_file = CSV_PATH . "utmetest.csv"; // Name of your CSV file
$csvfile = fopen($csv_file, 'r');
$theData = fgets($csvfile);
$i = 0; 
while (!feof($csvfile)){
//for($i=0; $i<=count($csvfile); $i++)
//{
   $csv_data[] = fgets($csvfile, 1024);
   //echo $i;
   $csv_array = explode(",", $csv_data[$i]);
   echo '<pre>'.$csv_data[$i].'</pre>';
   $insert_csv = array();
   $insert_csv['ID'] = $csv_array[0];
   $insert_csv['name'] = $csv_array[1];
   $insert_csv['email'] = $csv_array[2];
  echo $query = "INSERT INTO csvdata(ID,name,email)
     VALUES('','".$insert_csv['name']."','".$insert_csv['email']."')";
   $n=mysql_query($query, $connect );
   $i++; 
  
}

fclose($csvfile);
echo "File data successfully imported to database!!";
mysql_close($connect); // closing connection
?>