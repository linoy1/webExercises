<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linoy Siman Tov</title>
</head>

<body>
    <section>
        Welcome
        <?php 
        $un=$_GET["reg_un"];
        $pw=$_GET["reg_pass"];
       
        if($un=="Linoy" && $pw=="111")
        echo"<h2>Good morning user . $un .</h2>";
        else
        echo"<h2>Who are you?you can't get in . $un .</h2>";
        
       ?>
    </section>
</body>

</html>0