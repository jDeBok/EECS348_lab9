<html>
    <head>
        <title>Practice 4</title>
    </head>
    <body>
        <p>Here is the Multiplcation table for <?php echo $_POST["num"]; ?>: </p>
        <?php
        $end = $_POST["num"];
        echo "<style> tr, td {padding: 10px;}</style>"; //echo adds HTML elements to web page I am sending back to browser
        //added padding to the table so it is more readable once populated with values
        echo "<table border =\"1\" style = 'border-collapse: collapse'>";   //shared borders so it is a cleaner looking table
        for ($r = 0; $r <= $end; $r++) {    //goes over each row
            echo "<tr> \n"; //begins row
            for ($c = 0; $c <= $end; $c++) {    //goes over each column
                if (($r == 0) and ($c == 0)){   //first box has nothing in it
                    $p = "";
                }
                else if ($r == 0) { //column headers
                    $p = $c;
                }
                else if ($c == 0) { //row headers
                    $p = $r;
                }
                else {
                    $p = $c * $r;   //multiplication values
                }
                echo "<td>$p</td> \n";  //adds a cell with a value to the table
            }
            echo "</tr>";   //ends row
        }
        echo "</table>" //ends table element in html
        ?>
    </body>
</html>
