<?php //toevoeging
	error_reporting(E_ALL);


    $World = simplexml_load_file("gameworld.xml");
	$debug = false;
	$input = "  ";
    $Gollum = simplexml_load_file("gollum.xml");
	session_start(); // 

	if(!isset($_SESSION['gameStatus'])){
			$_SESSION['gameStatus'] = "init";
			$_SESSION['currentPos'] = 0;
			$CurrentPos = 0;
		}
	if (isset($_GET["submit"])) {
				$input =strtolower( $_GET['input']); // input to lowercase
		}
	if(isset($_SESSION['gameStatus'])){ 
			// echo "gamestatus isset"; // debug
			$CurrentPos = $_SESSION['currentPos'] ;
		}
    function gollumSays($Gollum){
        $num= rand( 0, sizeof($Gollum)-1);
        print $Gollum->SAYS[$num];
        
    }
    function printplace($World, $CurrentPos) {
        $Room = $World->ROOM[$CurrentPos];
        $Name = $Room->NAME;
        $Desc = wordwrap((string)$Room->DESC);
        print "<h3>$Name<br>";
        print str_repeat('-', strlen($Name));
        print "</h3>$Desc<br><br>";

        if ((string)$Room->NORTH != '-') {
            $index = (int)$Room->NORTH;
            print "North: {$World->ROOM[$index]->NAME}<br>";
			}
        if ((string)$Room->SOUTH != '-') {
            $index = (int)$Room->SOUTH;
            print "South: {$World->ROOM[$index]->NAME}<br>";
			}
        if ((string)$World->ROOM[$CurrentPos]->WEST != '-') {
            $index = (int)$Room->WEST;
            print "West: {$World->ROOM[$index]->NAME}<br>";
			}
        if ((string)$World->ROOM[$CurrentPos]->EAST != '-') {
            $index = (int)$Room->EAST;
            print "East: {$World->ROOM[$index]->NAME}<br>";
			}
	}
?>
<!doctype html>
<html lang="en">
<head>
	<title>Back to Rivendel</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Dungeons and Dragons">
	<meta name="author" content="Mediacollege Amsterdam ">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="dANDd.css">
 </head>
<body>
	<div id="top">
	
		Commands:<br>north n, south s, east e, west w, look l, debug db.
		
	</div>
		<div id="version">start versie </div>
	<h2><br>Dungeons & Dragons. Back to Donotopia</h2>
		<form id="form" method="GET" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" class="col-s-8">
			 <input type = "text" name = "input"  autofocus placeholder = "<?php gollumSays($Gollum) ; ?>" >
			 <input type = "submit"  id = "submit" name = "submit" value = "your command"> 
		</form>
	

 <?php
    switch(trim($input)) {
            case 'north':
            case 'n':
                if ((string)$World->ROOM[$CurrentPos]->NORTH != '-') {
                    $CurrentPos = (int)$World->ROOM[$CurrentPos]->NORTH;
					 $_SESSION['currentPos'] = $CurrentPos  ;
                    printplace($World, $CurrentPos) ;
                } else {
                    print "You cannot go north!<br>";
                }
                break;
            case 'south':
            case 's':
                if ((string)$World->ROOM[$CurrentPos]->SOUTH != '-') {
                    $CurrentPos = (int)$World->ROOM[$CurrentPos]->SOUTH;
					 $_SESSION['currentPos'] = $CurrentPos  ;
                    printplace($World, $CurrentPos) ;
                } else {
                    print "You cannot go south!<br>";
                }
                break;
            case 'west':
            case 'w':
                if ((string)$World->ROOM[$CurrentPos]->WEST != '-') {
                    $CurrentPos = (int)$World->ROOM[$CurrentPos]->WEST;
					 $_SESSION['currentPos'] = $CurrentPos  ;
                    printplace($World, $CurrentPos) ;
                } else {
                    print "You cannot go west!<br>";
                }
                break;
            case 'east':
            case 'e':
                if ((string)$World->ROOM[$CurrentPos]->EAST != '-') {
                    $CurrentPos = (int)$World->ROOM[$CurrentPos]->EAST;
					 $_SESSION['currentPos'] = $CurrentPos  ;
                    printplace($World, $CurrentPos) ;
                } else {
                    print "You cannot go east!<br>";
                }
                break;
            case 'look':
            case 'l':
                printplace($World, $CurrentPos) ;
                break;
			case 'done':
            case 'd':
				echo "thank you for playing";
				session_unset();
				session_destroy();
				break;
			case 'debug':
            case 'db':
				$debug = true;
				break;
            default:
				echo "Master? Please explain \"" .  $input  . "\" to Us?";
        }
?>

</body>
</html>

<?php
		if ($debug){
		echo "<hr>";
		echo "session variabelen";
		print_r($_SESSION);//debug
		echo "<br>Current Position $CurrentPos <hr>";//debug
	
		// dump de arrays debug
		echo "lengte world array " . sizeof($World). "<br>";
		echo"<code><pre>";
		print_r($World);
		echo"</pre></code><hr>";
		}
?>
